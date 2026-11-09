import { expect, test } from "@playwright/test";

test("the root redirects to the browser's language", async ({ browser }) => {
  const context = await browser.newContext({ locale: "es-ES" });
  const page = await context.newPage();

  await page.goto("/");

  await expect(page).toHaveURL(/\/es$/);
  await context.close();
});

test("Catalan is served under /cat with lang=ca", async ({ page }) => {
  await page.goto("/cat");

  await expect(page.locator("html")).toHaveAttribute("lang", "ca");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Troba la teva propera feina",
  );
});

test("the home page has no horizontal scroll", async ({ page }) => {
  await page.goto("/en");

  const overflows = await page.evaluate(
    () => document.documentElement.scrollWidth > window.innerWidth,
  );
  expect(overflows).toBe(false);
});
