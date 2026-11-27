
import { test, expect } from '@playwright/test';

const API_BASE_URL = 'https://api.practicesoftwaretesting.com';

test('returns 404 when requesting a non-existent cart', async ({ request }) => {
  const nonExistentCartId = `non-existent-cart-${Date.now()}`;

  const response = await request.get(
    `${API_BASE_URL}/carts/${nonExistentCartId}`
  );

  expect(response.status()).toBe(404);
});
