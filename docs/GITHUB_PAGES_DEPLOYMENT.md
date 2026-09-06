# GitHub Pages deployment and custom-domain cutover

This repository is a plain static site. GitHub Pages can publish the repository root directly from `master` without a build step.

The deployment is intentionally split into two gates:

1. **GitHub-hosted preview** — prove the merged `master` source works on Pages.
2. **Custom-domain cutover** — move `aaryamody.app` only after the preview is accepted.

Do not change production DNS before the preview gate passes.

## Gate 1 — enable the GitHub Pages preview

After the deployment-readiness PR is merged:

1. Open **Repository Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select branch **`master`** and folder **`/(root)`**.
4. Save.
5. Wait for GitHub Pages to publish the site.

The project-site preview should be available at:

```text
https://aaryamody1301.github.io/Personal-Portfolio/
```

The canonical metadata intentionally continues to point to `https://aaryamody.app/`; the GitHub-hosted URL is an acceptance surface, not a second production identity.

### Preview acceptance

Verify all of the following before attaching the custom domain:

- home page loads over HTTPS;
- `style.css` loads and the layout is responsive;
- profile image renders;
- resume downloads successfully;
- all in-page navigation anchors work;
- all featured GitHub project links open the intended repositories;
- keyboard focus is visible;
- skip navigation works;
- `robots.txt` and `sitemap.xml` are reachable;
- a missing route renders the custom `404.html` page;
- browser console shows no mixed-content or missing-asset errors.

## Gate 2 — attach `aaryamody.app`

Only after Gate 1 is accepted:

1. Verify ownership of the domain with GitHub Pages before changing DNS where possible.
2. In **Repository Settings → Pages**, enter `aaryamody.app` as the custom domain.
3. Configure the apex-domain DNS records with the DNS provider.
4. Configure `www` as a CNAME to the GitHub Pages host if `www.aaryamody.app` should resolve as well.
5. Wait for GitHub's DNS check and TLS certificate provisioning to succeed.
6. Enable **Enforce HTTPS**.
7. Re-run the production acceptance checklist below.

### GitHub Pages DNS targets

For the apex domain `aaryamody.app`, GitHub currently documents these `A` records:

```text
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

GitHub also documents these IPv6 `AAAA` records:

```text
2606:50c0:8000::153
2606:50c0:8001::153
2606:50c0:8002::153
2606:50c0:8003::153
```

For `www.aaryamody.app`, use:

```text
CNAME  www  AaryaMody1301.github.io
```

Remove or replace conflicting apex `A`, `AAAA`, `ALIAS`, or `ANAME` records during the actual cutover. Do not use wildcard DNS records for the Pages domain.

## Production acceptance after DNS cutover

Verify:

- `https://aaryamody.app/` serves the repository version;
- `http://aaryamody.app/` redirects to HTTPS after **Enforce HTTPS** is enabled;
- the intended apex/`www` canonical redirect works;
- TLS is valid with no browser certificate warning;
- canonical URL remains `https://aaryamody.app/`;
- Open Graph/Twitter image resolves over HTTPS;
- `https://aaryamody.app/robots.txt` works;
- `https://aaryamody.app/sitemap.xml` works;
- `https://aaryamody.app/Aarya_Mody_Resume.pdf` downloads;
- a nonexistent path returns the custom 404 presentation;
- project links, LinkedIn, email, and resume links work;
- no old-host-only content remains cached at the domain.

## Rollback

Keep the current hosting configuration available until the new domain has passed acceptance.

If the Pages cutover fails:

1. restore the previous DNS records;
2. allow DNS caches to converge;
3. remove or correct the Pages custom-domain configuration if necessary;
4. diagnose the Pages/DNS/TLS issue before attempting another cutover.

Do not modify portfolio content as part of an emergency DNS rollback.
