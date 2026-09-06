from __future__ import annotations

import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


class GitHubPagesReadinessTests(unittest.TestCase):
    def test_plain_static_pages_marker_exists(self) -> None:
        self.assertTrue((ROOT / ".nojekyll").is_file())

    def test_preview_phase_does_not_attach_production_domain_in_source(self) -> None:
        # For Actions publishing CNAME is ignored; for branch publishing it can attach
        # a custom domain. Keep it absent until the GitHub-hosted preview is accepted.
        self.assertFalse((ROOT / "CNAME").exists())

    def test_custom_404_is_index_safe_and_links_to_canonical_home(self) -> None:
        html = (ROOT / "404.html").read_text(encoding="utf-8")
        self.assertIn('<html lang="en">', html)
        self.assertIn('name="robots" content="noindex,follow"', html)
        self.assertIn('href="https://aaryamody.app/"', html)
        self.assertIn("Page not found", html)

    def test_deployment_runbook_contains_preview_and_dns_gates(self) -> None:
        text = (ROOT / "docs" / "GITHUB_PAGES_DEPLOYMENT.md").read_text(encoding="utf-8")
        for expected in [
            "Deploy from a branch",
            "master",
            "/(root)",
            "https://aaryamody1301.github.io/Personal-Portfolio/",
            "aaryamody.app",
            "185.199.108.153",
            "185.199.109.153",
            "185.199.110.153",
            "185.199.111.153",
            "AaryaMody1301.github.io",
            "Enforce HTTPS",
            "Rollback",
        ]:
            self.assertIn(expected, text)


if __name__ == "__main__":
    unittest.main()
