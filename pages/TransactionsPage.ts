import { Page, Locator } from '@playwright/test';

export class TransactionsPage {
  readonly page: Page;
  readonly accountsOverviewLink: Locator;
  readonly accountLink: Locator;
  readonly transactionTable: Locator;

  constructor(page: Page) {
    this.page = page;

    this.accountsOverviewLink = page.getByRole('link', {
      name: 'Accounts Overview'
    });

    this.accountLink = page.locator('a[href*="activity.htm?id="]');

    this.transactionTable = page.locator('#transactionTable');
  }

  async openAccountTransactionHistory(accountId: string) {
    await this.accountsOverviewLink.click();

    await this.page.getByRole('link', {
      name: accountId
    }).click();
  }
}