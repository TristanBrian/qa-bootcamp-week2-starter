
import { test, expect } from '@playwright/test';

const API_URL = 'https://api.practicesoftwaretesting.com';

test('C4 Add to a cart', async ({ request }) => {
  const productResponse = await request.get(`${API_URL}/products`);
  expect(productResponse.status()).toBe(200);

  const products = await productResponse.json();
  const productId = products.data[0].id;

  expect(productId).toBeTruthy();

  let cartId: string | undefined;

  try {
    const createResponse = await request.post(`${API_URL}/carts`);
    expect(createResponse.status()).toBe(201);

    const newCart = await createResponse.json();
    cartId = newCart.id;

    expect(cartId).toBeTruthy();

    const quantity = 1;

    const addResponse = await request.post(
      `${API_URL}/carts/${cartId}`,
      {
        data: {
          product_id: productId,
          quantity,
        },
      }
    );

    expect(addResponse.status()).toBe(200);

    const cartResponse = await request.get(
      `${API_URL}/carts/${cartId}`
    );

    expect(cartResponse.status()).toBe(200);

    const cart = await cartResponse.json();

    const addedProduct = cart.cart_items.find(
      (item: { product_id: string }) =>
        item.product_id === productId
    );

    expect(addedProduct).toBeTruthy();
    expect(addedProduct.quantity).toBe(quantity);
  } finally {
    if (cartId) {
      const deleteResponse = await request.delete(
        `${API_URL}/carts/${cartId}`
      );

      expect(deleteResponse.status()).toBe(204);
    }
  }
});
