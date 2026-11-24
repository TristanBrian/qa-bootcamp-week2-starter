
import { test, expect } from '@playwright/test';

test('homepage displays the correct title', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(
    'Practice Software Testing - Toolshop - v5.0'
  );
});

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

test('invalid login displays an error message', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('link', { name: 'Sign in' }).click();

  await page.getByLabel('Email address').fill('nm@gmail.com');
  await page.locator('#password').fill('1234');

  await page.getByRole('button', { name: 'Login' }).click();

  await expect(
    page.getByText('Invalid email or password', { exact: true })
  ).toBeVisible();
});
