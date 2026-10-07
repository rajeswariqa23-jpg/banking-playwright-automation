import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';


test.describe('Login Tests', () => {

  test('Verify invalid login', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigate();

    await loginPage.login(
      'invalidUser',
      'invalidPassword'
    );

    await expect(loginPage.errorMessage).toBeVisible();
  });

});