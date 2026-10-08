import { test, expect } from '@playwright/test';
import { RegistrationPage } from '../../pages/Registrationpage';
import { TestDataFactory } from '../../utils/TestDataFactory';

test.describe('Registration Tests', () => {

  test('Register a new customer', async ({ page }) => {

    const registrationPage = new RegistrationPage(page);

    const username = TestDataFactory.generateUsername();
    const customer = TestDataFactory.getCustomerData();

    await registrationPage.navigate();

    await registrationPage.registerUser(
      customer,
      username,
      customer.password
    );

    await expect(
      registrationPage.successMessage
    ).toContainText(`Welcome ${username}`);

    await expect(
      registrationPage.successMessage
    ).toContainText('Your account was created successfully');
  });

});