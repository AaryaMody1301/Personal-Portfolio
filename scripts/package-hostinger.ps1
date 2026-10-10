$ErrorActionPreference = 'Stop'
$portfolioRoot = [IO.Path]::GetFullPath((Split-Path -Parent $PSScriptRoot))
$portfolioEvidence = if ($env:PORTFOLIO_REPORTS_DIR) {
    if ([IO.Path]::IsPathRooted($env:PORTFOLIO_REPORTS_DIR)) { $env:PORTFOLIO_REPORTS_DIR } else { Join-Path $portfolioRoot $env:PORTFOLIO_REPORTS_DIR }
} else { Join-Path $portfolioRoot ('reports/local/' + [DateTime]::UtcNow.ToString('yyyyMMddTHHmmssfff') + '-package') }
$portfolioEvidence = [IO.Path]::GetFullPath($portfolioEvidence)
if (-not $portfolioEvidence.StartsWith((Join-Path $portfolioRoot 'reports') + [IO.Path]::DirectorySeparatorChar, [StringComparison]::OrdinalIgnoreCase)) { throw 'Package evidence must be within reports/' }
node (Join-Path $PSScriptRoot 'prepare-assets.mjs') --check
if ($LASTEXITCODE -ne 0) { throw 'Build current assets before packaging: npm run build' }
$portfolioManifest = Get-Content -LiteralPath (Join-Path $portfolioRoot 'assets/manifest.json') -Raw | ConvertFrom-Json
$portfolioPages = @(Get-Content -LiteralPath (Join-Path $portfolioRoot 'site-pages.json') -Raw | ConvertFrom-Json)
$portfolioFiles = $portfolioPages + @('site-pages.json', '.htaccess', 'robots.txt', 'sitemap.xml', 'assets/manifest.json', 'assets/docs/AaryaMody_Resume.pdf', 'assets/js/app.js.LEGAL.txt', 'assets/js/world.js.LEGAL.txt') + @($portfolioManifest.assets.path)
if (@($portfolioFiles | Select-Object -Unique).Count -ne $portfolioFiles.Count) { throw 'Duplicate package paths' }
foreach ($portfolioPath in $portfolioFiles) {
    $portfolioResolved = [IO.Path]::GetFullPath((Join-Path $portfolioRoot $portfolioPath))
    if (-not $portfolioResolved.StartsWith($portfolioRoot + [IO.Path]::DirectorySeparatorChar, [StringComparison]::OrdinalIgnoreCase) -or $portfolioPath.Contains('..')) { throw "Unsafe package path: $portfolioPath" }
    if (-not (Test-Path -LiteralPath $portfolioResolved -PathType Leaf)) { throw "Missing package file: $portfolioPath" }
}
$portfolioOutput = Join-Path $portfolioRoot 'output'
$portfolioZip = Join-Path $portfolioOutput 'portfolio-hostinger.zip'
$portfolioTemporary = Join-Path $portfolioOutput 'portfolio-hostinger.zip.tmp'
New-Item -ItemType Directory -Path $portfolioOutput -Force | Out-Null
Add-Type -AssemblyName System.IO.Compression.FileSystem
$portfolioStream = [IO.File]::Open($portfolioTemporary, [IO.FileMode]::Create)
$portfolioArchive = [IO.Compression.ZipArchive]::new($portfolioStream, [IO.Compression.ZipArchiveMode]::Create)
try {
    foreach ($portfolioPath in $portfolioFiles) {
        [IO.Compression.ZipFileExtensions]::CreateEntryFromFile($portfolioArchive, (Join-Path $portfolioRoot $portfolioPath), $portfolioPath, [IO.Compression.CompressionLevel]::Optimal) | Out-Null
    }
} finally { $portfolioArchive.Dispose(); $portfolioStream.Dispose() }
$portfolioArchive = [IO.Compression.ZipFile]::OpenRead($portfolioTemporary)
try {
    if ($portfolioArchive.Entries.Count -ne $portfolioFiles.Count) { throw 'Unexpected archive entry count' }
    foreach ($portfolioEntry in $portfolioArchive.Entries) {
        if ($portfolioEntry.FullName -notin $portfolioFiles) { throw "Unexpected archive entry: $($portfolioEntry.FullName)" }
        $portfolioEntryStream = $portfolioEntry.Open()
        $portfolioHasher = [Security.Cryptography.SHA256]::Create()
        try { $portfolioHash = [Convert]::ToHexString($portfolioHasher.ComputeHash($portfolioEntryStream)) }
        finally { $portfolioEntryStream.Dispose(); $portfolioHasher.Dispose() }
        if ($portfolioHash -ne (Get-FileHash -LiteralPath (Join-Path $portfolioRoot $portfolioEntry.FullName) -Algorithm SHA256).Hash) { throw "Packaged bytes differ: $($portfolioEntry.FullName)" }
    }
    if ((Get-FileHash -LiteralPath (Join-Path $portfolioRoot 'assets/docs/AaryaMody_Resume.pdf') -Algorithm SHA256).Hash -ne '15476B1A5A2B94611D5F867AA1D64826A2B0978279C4053585794B9908FCF9F8') { throw 'Authoritative resume bytes changed' }
    Write-Output "Verified $($portfolioArchive.Entries.Count) runtime entries; every byte matches its source."
} finally { $portfolioArchive.Dispose() }
Move-Item -LiteralPath $portfolioTemporary -Destination $portfolioZip -Force
New-Item -ItemType Directory -Path $portfolioEvidence -Force | Out-Null
$portfolioPackageReport = @{ date = [DateTime]::UtcNow.ToString('o'); scope = 'package'; entries = $portfolioFiles; bytes = (Get-Item -LiteralPath $portfolioZip).Length; sha256 = (Get-FileHash -LiteralPath $portfolioZip).Hash.ToLowerInvariant(); htmlSHA256 = (Get-FileHash -LiteralPath (Join-Path $portfolioRoot 'index.html')).Hash.ToLowerInvariant(); manifestSHA256 = (Get-FileHash -LiteralPath (Join-Path $portfolioRoot 'assets/manifest.json')).Hash.ToLowerInvariant(); verified = $true }
$portfolioReleaseHasher = [Security.Cryptography.SHA256]::Create()
try { $portfolioPackageReport.fingerprint = [Convert]::ToHexString($portfolioReleaseHasher.ComputeHash([byte[]]([IO.File]::ReadAllBytes((Join-Path $portfolioRoot 'index.html')) + [IO.File]::ReadAllBytes((Join-Path $portfolioRoot 'assets/manifest.json'))))).ToLowerInvariant() }
finally { $portfolioReleaseHasher.Dispose() }
[IO.File]::WriteAllText((Join-Path $portfolioEvidence 'package.json'), ($portfolioPackageReport | ConvertTo-Json -Depth 5) + "`n")
Get-Item -LiteralPath $portfolioZip | Select-Object FullName, Length
