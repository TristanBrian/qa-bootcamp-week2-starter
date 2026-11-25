import { test, expect } from '@playwright/test';

test('GET products returns products successfully', async ({ request }) => {
  const response = await request.get(
    'https://api.practicesoftwaretesting.com/products'
  );

  expect(response.status()).toBe(200);

  const products = await response.json();

  expect(products.data[0].name).toBe('Combination Pliers');
});
