import { test, expect } from '@playwright/test';
import { RegistrationPage } from '../../pages/RegistrationPage';
import { randomUUID } from 'crypto';
import { testUser } from '../../test-data/userData';

test.describe('Registration Tests', () => {

  test('Register a new customer', async ({ page }) => {

    const registrationPage = new RegistrationPage(page);

    const username =
      `user${randomUUID().replace(/-/g, '').slice(0, 15)}`;

    await registrationPage.navigate();

    await registrationPage.registerUser(
      testUser.firstName,
      testUser.lastName,
      username,
      testUser.password
    );

    await expect(
      registrationPage.successMessage
    ).toContainText(`Welcome ${username}`);

    await expect(
      registrationPage.successMessage
    ).toContainText('Your account was created successfully');
  });

});