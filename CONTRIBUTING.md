# Contributing

Keep the portfolio static, interactive, accessible and easy to review. Use Node.js 24 and locked dependencies. Follow the confirmed redesign plan with Karpathy Guidelines and Ponytail: state material assumptions, reuse existing code, keep changes within scope and verify each stage.

Edit the canonical content, renderer, stylesheet and enhancement modules in `src/`. Implement shared homepage/case-study behavior once. Use native controls and DOM/SVG; reserve GSAP for coordinated motion. Preserve all confirmed interactive features when simplifying implementation.

Run `npm run build` and include generated HTML, sitemap, manifest, bundles, brand/social exports and hashed resources together. Normal builds use checked-in fixture JSON and font outlines and require no Python or network. Do not edit generated release files directly.

Run `npm run check`, `npm run test:release`, `npm run test:ci` and `npm run build:check`. Review all five routes at 320/390/768/1440px, landscape, keyboard/touch, reduced motion, no JavaScript, failed assets and zoom. Verify legacy links still reach their actual destinations. Test calculations and exported cohorts against source evidence.

Update Windows Chrome baselines intentionally with `npm run test:update -- --project=desktop --project=mobile --grep "visual baseline"`; visually review the images and rerun comparisons. CI never approves new screenshots automatically.

Preserve original resume bytes unless a replacement is supplied. Employment facts follow the resume. Project claims need sources and visible qualifications. Courses are not certifications; synthetic fixtures are not live product evidence. Freeze source revisions/checksums before changing demo data. Record one-time export environments in the source notes.

Sound and analytics remain off. Keep credentials and workspace state out of static files. Preserve redistributed font, icon and GSAP notices. Reports, local asset-generation environments, archives and upload packages remain ignored. Production publication follows a separate explicit request and the Hostinger runbook.
