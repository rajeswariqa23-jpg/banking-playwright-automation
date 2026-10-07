import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { LoginPage } from '../pages/Loginpage';

const { Given, When, Then } = createBdd();

let loginPage: LoginPage;
const username = 'john';
const password = 'demo';

Given('the customer is on the ParaBank login page', async ({ page }) => {
  loginPage = new LoginPage(page);
  await loginPage.navigate();
});

When('the customer enters valid username and password', async () => {
  await loginPage.login(username, password);
});

When('clicks the login button', async () => {
  // Login button is already clicked inside login()
});

Then('the Accounts Overview page should be displayed', async () => {
  await expect(
    loginPage.accountOverviewHeader
  ).toBeVisible();
});