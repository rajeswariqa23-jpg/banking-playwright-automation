import { test, expect } from '../../fixtures/pages.fixtures';

test('User should not login with invalid credentials', async ({
  loginPage
}) => {

  await loginPage.navigate();

  await loginPage.login(
    'invalidUser',
    'invalidPassword'
  );

  await expect(
    loginPage.errorMessage
  ).toBeVisible();
});