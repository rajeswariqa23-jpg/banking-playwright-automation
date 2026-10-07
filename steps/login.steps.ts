import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { randomUUID } from 'crypto';
import { LoginPage } from '../pages/Loginpage';
import { RegistrationPage } from '../pages/Registrationpage';

const { Given, When, Then } = createBdd();

let loginPage: LoginPage;
let registrationPage: RegistrationPage;

let username: string;
const password = 'Test@123';

Given('the customer is on the ParaBank login page', async ({ page }) => {
  loginPage = new LoginPage(page);
  registrationPage = new RegistrationPage(page);

  username =
    `bdd${randomUUID().replace(/-/g, '').slice(0, 15)}`;

  // Create a valid user first
  await registrationPage.navigate();

  await registrationPage.registerUser(
    'Rajeswari',
    'B',
    username,
    password
  );

  await expect(
    registrationPage.successMessage
  ).toContainText(`Welcome ${username}`);

  // Logout so we can test login
  await registrationPage.logout();
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