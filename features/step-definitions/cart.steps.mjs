import {
  Given,
  When,
  Then,
  Before,
  After,
  setDefaultTimeout
} from '@cucumber/cucumber';

import { chromium, expect } from '@playwright/test';

setDefaultTimeout(60000);

const HOME_URL = 'https://practicesoftwaretesting.com';
const PRODUCT_SELECTOR =
  '[data-test="product-01M8C2GJQVSKTG4M54DXC5MCAH"]';

Before(async function () {
  this.browser = await chromium.launch({ headless: true });
  this.page = await this.browser.newPage();
});

After(async function (scenario) {
  if (scenario.result?.status === 'PASSED') {
    await this.page.screenshot({
      path: 'test-results/cucumber-cart.png',
      fullPage: true
    });
  }

  await this.browser?.close();
});

Given('the shopper is viewing an available product', async function () {
  await this.page.goto(HOME_URL, {
    waitUntil: 'domcontentloaded'
  });

  const product = this.page.locator(PRODUCT_SELECTOR);

  await expect(product).toBeVisible({ timeout: 30000 });
  await product.click();

  await expect(this.page.locator('[data-test="product-name"]'))
    .toHaveText('Combination Pliers', { timeout: 30000 });

  await expect(this.page.locator('[data-test="unit-price"]'))
    .toHaveText('14.15');
});

When('the shopper adds the product to the cart', async function () {
  await this.page.locator('[data-test="add-to-cart"]').click();

  await expect(this.page.locator('[data-test="cart-quantity"]'))
    .toHaveText('1');
});

Then('the cart should contain the selected product', async function () {
  await expect(this.page.locator('body'))
    .toContainText('Product added to shopping cart.');
});

Then('the product quantity should be {int}', async function (quantity) {
  await expect(this.page.locator('[data-test="cart-quantity"]'))
    .toHaveText(String(quantity));
});

Then('the cart should display the correct subtotal', async function () {
  const price = Number(
    await this.page.locator('[data-test="unit-price"]').innerText()
  );

  const quantity = Number(
    await this.page.locator('[data-test="cart-quantity"]').innerText()
  );

  expect(price * quantity).toBe(14.15);
});
