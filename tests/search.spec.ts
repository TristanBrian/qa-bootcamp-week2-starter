import { test, expect } from '@playwright/test';

test('search returns only products matching pliers', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('textbox', { name: 'Search' }).fill('pliers');
  await page.getByRole('button', { name: 'Search' }).click();

  const productNames = page.locator(
    '[data-test^="product-name"]:visible'
  );

  await expect(productNames).toHaveCount(4);

  const names = await productNames.allTextContents();

  for (const name of names) {
    expect(name.trim().toLowerCase()).toContain('pliers');
  }
});
