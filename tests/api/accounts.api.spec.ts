import { test, expect } from '@playwright/test';

test('Get ParaBank accounts API response', async ({ request }) => {

  const response = await request.get(
    'http://localhost:8080/parabank/services/bank/accounts/12345'
  );

  expect(response.status()).toBe(200);

  const responseBody = await response.text();

  console.log('Response Body:', responseBody);

  expect(responseBody).not.toBe('');
});