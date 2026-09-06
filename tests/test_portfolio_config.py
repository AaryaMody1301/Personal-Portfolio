import unittest
from pathlib import Path
from urllib.parse import urlparse

import config


class PortfolioConfigTests(unittest.TestCase):
    def test_identity_fields_are_present(self) -> None:
        self.assertEqual(config.NAME, "Aarya Mody")
        self.assertTrue(config.TITLE.strip())
        self.assertTrue(config.TAGLINE.strip())
        self.assertTrue(config.BIO.strip())

    def test_public_links_use_https(self) -> None:
        for url in (config.GITHUB_URL, config.LINKEDIN_URL, config.SITE_URL):
            parsed = urlparse(url)
            self.assertEqual(parsed.scheme, "https", url)
            self.assertTrue(parsed.netloc, url)

    def test_featured_projects_are_unique_and_link_to_github(self) -> None:
        self.assertGreaterEqual(len(config.PROJECTS), 4)
        titles = [project["title"] for project in config.PROJECTS]
        self.assertEqual(len(titles), len(set(titles)))

        for project in config.PROJECTS:
            self.assertTrue(project["description"].strip())
            self.assertTrue(project["technologies"])
            parsed = urlparse(project["github"])
            self.assertEqual(parsed.scheme, "https")
            self.assertEqual(parsed.netloc, "github.com")
            self.assertTrue(parsed.path.startswith("/AaryaMody1301/"))

    def test_experience_entries_have_required_fields(self) -> None:
        self.assertGreaterEqual(len(config.EXPERIENCE), 1)
        for role in config.EXPERIENCE:
            for field in ("title", "company", "location", "duration"):
                self.assertTrue(role[field].strip(), f"Missing {field} in {role}")
            self.assertTrue(role["highlights"])
            self.assertTrue(role["stack"])

    def test_local_assets_exist(self) -> None:
        self.assertTrue(Path(config.PROFILE_PHOTO).is_file())
        self.assertTrue(Path(config.RESUME_FILE).is_file())

    def test_skill_categories_are_populated(self) -> None:
        self.assertGreaterEqual(len(config.SKILLS), 4)
        for category, skills in config.SKILLS.items():
            self.assertTrue(category.strip())
            self.assertTrue(skills)
            self.assertEqual(len(skills), len(set(skills)))


if __name__ == "__main__":
    unittest.main()
