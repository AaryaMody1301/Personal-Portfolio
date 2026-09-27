$ErrorActionPreference = 'Stop'
$portfolioRoot = Split-Path -Parent $PSScriptRoot
node (Join-Path $PSScriptRoot 'prepare-assets.mjs') --check
if ($LASTEXITCODE -ne 0) { throw 'Prepare current assets before packaging: npm run assets:prepare' }
$portfolioOutput = Join-Path $portfolioRoot 'output'
$portfolioZip = Join-Path $portfolioOutput 'portfolio-hostinger.zip'
New-Item -ItemType Directory -Path $portfolioOutput -Force | Out-Null
$portfolioFiles = @('index.html', 'robots.txt', 'sitemap.xml', 'assets') | ForEach-Object { Join-Path $portfolioRoot $_ }
Compress-Archive -LiteralPath $portfolioFiles -DestinationPath $portfolioZip -Force

Add-Type -AssemblyName System.IO.Compression.FileSystem
$portfolioArchive = [System.IO.Compression.ZipFile]::OpenRead($portfolioZip)
try {
    $portfolioEntries = @($portfolioArchive.Entries)
    foreach ($portfolioEntry in $portfolioEntries) {
        $portfolioEntryPath = $portfolioEntry.FullName.Replace('\', '/')
        if ($portfolioEntryPath -notmatch '^(index\.html|robots\.txt|sitemap\.xml|assets/[^.].*)$' -or $portfolioEntryPath.Contains('../')) {
            throw "Unexpected archive entry: $portfolioEntryPath"
        }
        if (-not $portfolioEntryPath.EndsWith('/')) {
            $portfolioLocalFile = Join-Path $portfolioRoot $portfolioEntryPath
            $portfolioStream = $portfolioEntry.Open()
            $portfolioFileHasher = [System.Security.Cryptography.SHA256]::Create()
            try {
                $portfolioFileHash = [Convert]::ToHexString($portfolioFileHasher.ComputeHash($portfolioStream))
                if ($portfolioFileHash -ne (Get-FileHash -LiteralPath $portfolioLocalFile -Algorithm SHA256).Hash) {
                    throw "Packaged bytes do not match: $portfolioEntryPath"
                }
            } finally { $portfolioStream.Dispose(); $portfolioFileHasher.Dispose() }
        }
    }
    foreach ($portfolioRequired in @('index.html', 'robots.txt', 'sitemap.xml', 'assets/docs/AaryaMody_Resume.pdf', 'assets/css/style.css', 'assets/js/main.js', 'assets/images/og-image.jpg')) {
        if (-not ($portfolioEntries | Where-Object { $_.FullName.Replace('\', '/') -eq $portfolioRequired })) {
            throw "Missing package file: $portfolioRequired"
        }
    }
    $portfolioResumeEntry = $portfolioEntries | Where-Object { $_.FullName.Replace('\', '/') -eq 'assets/docs/AaryaMody_Resume.pdf' }
    $portfolioResumeStream = $portfolioResumeEntry.Open()
    try {
        $portfolioHasher = [System.Security.Cryptography.SHA256]::Create()
        try {
            $portfolioPackedHash = [Convert]::ToHexString($portfolioHasher.ComputeHash($portfolioResumeStream))
        } finally { $portfolioHasher.Dispose() }
    } finally { $portfolioResumeStream.Dispose() }
    $portfolioSourceHash = (Get-FileHash -LiteralPath (Join-Path $portfolioRoot 'assets/docs/AaryaMody_Resume.pdf') -Algorithm SHA256).Hash
    if ($portfolioPackedHash -ne $portfolioSourceHash) { throw 'Packaged resume does not match source.' }
    Write-Output "Verified $($portfolioEntries.Count) package entries; every packaged file matches its source bytes."
} finally { $portfolioArchive.Dispose() }
Get-Item -LiteralPath $portfolioZip | Select-Object FullName, Length
