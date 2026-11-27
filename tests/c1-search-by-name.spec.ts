import { test, expect } from '@playwright/test';
import { SearchPage } from '../pages/SearchPage';

test('C1 Search by name', async ({ page }) => {
  const searchPage = new SearchPage(page);

  await searchPage.goto();
  await searchPage.searchFor('pliers');

  await expect(searchPage.productNames).toHaveCount(4);

  const names = await searchPage.productNames.allTextContents();

  for (const name of names) {
    expect(name.trim().toLowerCase()).toContain('pliers');
  }
});
