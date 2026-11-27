
import { test, expect } from '@playwright/test';

const API_BASE_URL = 'https://api.practicesoftwaretesting.com';

test('creates a cart, adds a product, and verifies responses', async ({ request }) => {
  let cartId: string | undefined;

  try {
    // Create a cart
    const createResponse = await request.post(`${API_BASE_URL}/carts`);

    expect(createResponse.status()).toBe(201);

    const createdCart = await createResponse.json();

    expect(createdCart).toHaveProperty('id');
    expect(createdCart.id).toBeTruthy();

    cartId = String(createdCart.id);

    // Get a valid product ID
    const productsResponse = await request.get(`${API_BASE_URL}/products`);

    expect(productsResponse.status()).toBe(200);

    const products = await productsResponse.json();
    const productId = products.data[0].id;

    expect(productId).toBeTruthy();

    // Add the product to the cart
    const addResponse = await request.post(
      `${API_BASE_URL}/carts/${cartId}`,
      {
        data: {
          product_id: productId,
          quantity: 1,
        },
      }
    );

    expect(addResponse.status()).toBe(200);

    const addResult = await addResponse.json();

    expect(addResult).toHaveProperty(
      'result',
      'item added or updated'
    );
  } finally {
    // Always delete the cart created by this test
    if (cartId) {
      const deleteResponse = await request.delete(
        `${API_BASE_URL}/carts/${cartId}`
      );

      expect(deleteResponse.status()).toBe(204);
    }
  }
});
