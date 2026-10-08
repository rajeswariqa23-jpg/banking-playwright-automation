import { test, expect } from '@playwright/test';
import { testConfig } from '../../config/testConfig';

test('API should return error for invalid account ID', async ({ request }) => {
  const invalidAccountId = '999999999';

  const response = await request.get(
    `${testConfig.baseUrl}services/bank/accounts/${invalidAccountId}`
  );

  expect(response.status()).not.toBe(200);

  console.log('Status:', response.status());
  console.log('Response:', await response.text());
});