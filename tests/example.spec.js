import { test, expect } from "@playwright/test";

test("open playwright site and assert title", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  await expect(page).toHaveTitle(/Playwright/);
});
