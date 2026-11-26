import { test, expect } from '@playwright/test';
import { SearchPage } from '../pages/SearchPage';

test('search returns no products for an unmatched term', async ({ page }) => {
  const searchPage = new SearchPage(page);

  await searchPage.goto();
  await searchPage.searchFor('XYZ123');

  await expect(searchPage.productNames).toHaveCount(0);
});
