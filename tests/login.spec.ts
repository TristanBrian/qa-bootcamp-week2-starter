import { test, expect } from '@playwright/test';

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
