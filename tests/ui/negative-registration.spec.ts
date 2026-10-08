import { test, expect } from '../../fixtures/pages.fixtures';

test(
  'User should not register when first name is missing',
  async ({ registrationPage }) => {

    await registrationPage.navigate();

    const username = `invaliduser${Date.now()}`;

    await registrationPage.lastName.fill('B');
    await registrationPage.address.fill('123 Main Street');
    await registrationPage.city.fill('Atlanta');
    await registrationPage.state.fill('GA');
    await registrationPage.zipCode.fill('30004');
    await registrationPage.phone.fill('4705551234');
    await registrationPage.ssn.fill('123456789');

    await registrationPage.username.fill(username);
    await registrationPage.password.fill('Test@123');
    await registrationPage.confirmPassword.fill('Test@123');

    await registrationPage.registerButton.click();

    await expect(
      registrationPage.successMessage
    ).toContainText('First name is required');
  }
);