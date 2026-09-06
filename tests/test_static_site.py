from __future__ import annotations

import json
import re
import unittest
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlparse

ROOT = Path(__file__).resolve().parents[1]
INDEX = ROOT / "index.html"


class SiteParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.tags: list[tuple[str, dict[str, str]]] = []
        self.ids: set[str] = set()
        self.links: list[dict[str, str]] = []
        self.images: list[dict[str, str]] = []
        self.meta: list[dict[str, str]] = []
        self.scripts: list[tuple[dict[str, str], str]] = []
        self._script_attrs: dict[str, str] | None = None
        self._script_text: list[str] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        data = {key: value or "" for key, value in attrs}
        self.tags.append((tag, data))
        if data.get("id"):
            self.ids.add(data["id"])
        if tag == "a":
            self.links.append(data)
        elif tag == "img":
            self.images.append(data)
        elif tag == "meta":
            self.meta.append(data)
        elif tag == "script":
            self._script_attrs = data
            self._script_text = []

    def handle_endtag(self, tag: str) -> None:
        if tag == "script" and self._script_attrs is not None:
            self.scripts.append((self._script_attrs, "".join(self._script_text).strip()))
            self._script_attrs = None
            self._script_text = []

    def handle_data(self, data: str) -> None:
        if self._script_attrs is not None:
            self._script_text.append(data)


class StaticPortfolioTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls) -> None:
        cls.html = INDEX.read_text(encoding="utf-8")
        cls.parser = SiteParser()
        cls.parser.feed(cls.html)

    def test_required_public_assets_exist(self) -> None:
        for path in [
            "index.html",
            "style.css",
            "profile_photo_optimized.jpg",
            "Aarya_Mody_Resume.pdf",
            "robots.txt",
            "sitemap.xml",
        ]:
            self.assertTrue((ROOT / path).exists(), path)

    def test_document_language_and_single_h1(self) -> None:
        html_tags = [attrs for tag, attrs in self.parser.tags if tag == "html"]
        self.assertEqual(html_tags[0].get("lang"), "en")
        self.assertEqual(sum(1 for tag, _ in self.parser.tags if tag == "h1"), 1)

    def test_seo_metadata_is_present(self) -> None:
        title = re.search(r"<title>(.*?)</title>", self.html, re.S)
        self.assertIsNotNone(title)
        self.assertIn("Data Engineer", title.group(1))

        descriptions = [m.get("content") for m in self.parser.meta if m.get("name") == "description"]
        self.assertTrue(descriptions and len(descriptions[0]) >= 80)

        canonical = re.search(r'<link\s+rel="canonical"\s+href="([^"]+)"', self.html)
        self.assertIsNotNone(canonical)
        self.assertEqual(canonical.group(1), "https://aaryamody.app/")

        og_names = {m.get("property") for m in self.parser.meta if m.get("property")}
        self.assertTrue({"og:title", "og:description", "og:url", "og:image"}.issubset(og_names))

    def test_person_json_ld_is_valid_and_matches_visible_identity(self) -> None:
        blocks = [text for attrs, text in self.parser.scripts if attrs.get("type") == "application/ld+json"]
        self.assertEqual(len(blocks), 1)
        data = json.loads(blocks[0])
        self.assertEqual(data["@type"], "Person")
        self.assertEqual(data["name"], "Aarya Mody")
        self.assertEqual(data["jobTitle"], "Data Engineer & Data Analyst")
        self.assertIn("https://github.com/AaryaMody1301", data["sameAs"])

    def test_skip_link_primary_nav_and_main_target_exist(self) -> None:
        self.assertIn("main-content", self.parser.ids)
        self.assertTrue(any(link.get("class") == "skip-link" and link.get("href") == "#main-content" for link in self.parser.links))
        self.assertTrue(any(tag == "nav" and attrs.get("aria-label") == "Primary navigation" for tag, attrs in self.parser.tags))

    def test_internal_anchor_targets_exist(self) -> None:
        for link in self.parser.links:
            href = link.get("href", "")
            if href.startswith("#") and len(href) > 1:
                self.assertIn(href[1:], self.parser.ids, href)

    def test_images_have_nonempty_alt_text(self) -> None:
        self.assertGreaterEqual(len(self.parser.images), 1)
        for image in self.parser.images:
            self.assertTrue(image.get("alt", "").strip(), image.get("src"))

    def test_blank_target_links_are_hardened(self) -> None:
        for link in self.parser.links:
            if link.get("target") == "_blank":
                rel = set(link.get("rel", "").split())
                self.assertTrue({"noopener", "noreferrer"}.issubset(rel), link.get("href"))

    def test_local_link_targets_exist(self) -> None:
        for link in self.parser.links:
            href = link.get("href", "")
            parsed = urlparse(href)
            if parsed.scheme or href.startswith("#") or href.startswith("mailto:") or href.startswith("tel:"):
                continue
            if href:
                self.assertTrue((ROOT / parsed.path).exists(), href)

    def test_no_placeholder_or_stale_streamlit_copy(self) -> None:
        lowered = self.html.lower()
        for forbidden in ["<your-repo-url>", "coming soon", "streamlit run", "python developer | data scientist"]:
            self.assertNotIn(forbidden, lowered)

    def test_public_project_links_are_specific_repositories(self) -> None:
        required = {
            "https://github.com/AaryaMody1301/StockPulse",
            "https://github.com/AaryaMody1301/OriginKeep",
            "https://github.com/AaryaMody1301/SQL_Practice_Project",
            "https://github.com/AaryaMody1301/Sales-Forcasting-Using-Time-Series-Analysis",
            "https://github.com/AaryaMody1301/Face_Detection_Attendance_System",
        }
        hrefs = {link.get("href") for link in self.parser.links}
        self.assertTrue(required.issubset(hrefs))


if __name__ == "__main__":
    unittest.main()
