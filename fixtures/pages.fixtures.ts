import { test as base } from '@playwright/test';

import { LoginPage } from '../pages/Loginpage';
import { RegistrationPage } from '../pages/Registrationpage';
import { AccountsPage } from '../pages/AccountsPage';
import { TransferPage } from '../pages/TransferPage';
import { TransactionsPage } from '../pages/TransactionsPage';
import { BillPaymentPage } from '../pages/BillPaymentPage';

type PageFixtures = {
  loginPage: LoginPage;
  registrationPage: RegistrationPage;
  accountsPage: AccountsPage;
  transferPage: TransferPage;
  transactionsPage: TransactionsPage;
  billPaymentPage: BillPaymentPage;
};

export const test = base.extend<PageFixtures>({

  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  registrationPage: async ({ page }, use) => {
    await use(new RegistrationPage(page));
  },

  accountsPage: async ({ page }, use) => {
    await use(new AccountsPage(page));
  },

  transferPage: async ({ page }, use) => {
    await use(new TransferPage(page));
  },

  transactionsPage: async ({ page }, use) => {
    await use(new TransactionsPage(page));
  },

  billPaymentPage: async ({ page }, use) => {
    await use(new BillPaymentPage(page));
  },

});

export { expect } from '@playwright/test';