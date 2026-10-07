import { Page, Locator } from '@playwright/test';

export class AccountsPage {
  readonly page: Page;
  readonly openNewAccountLink: Locator;
  readonly accountTypeDropdown: Locator;
  readonly fromAccountDropdown: Locator;
  readonly openAccountButton: Locator;
  readonly newAccountId: Locator;

  constructor(page: Page) {
    this.page = page;

    this.openNewAccountLink = page.getByRole('link', {
      name: 'Open New Account'
    });

    this.accountTypeDropdown = page.locator('#type');

    this.fromAccountDropdown = page.locator('#fromAccountId');

    this.openAccountButton = page.getByRole('button', {
      name: 'Open New Account'
    });

    this.newAccountId = page.locator('#newAccountId');
  }

  async openNewAccount() {
    await this.openNewAccountLink.click();

    await this.accountTypeDropdown.selectOption('SAVINGS');

    await this.fromAccountDropdown.selectOption({ index: 0 });

    await this.openAccountButton.click();
  }

  async getNewAccountId(): Promise<string> {
  const accountId = await this.newAccountId.textContent();

  if (!accountId) {
    throw new Error('New account ID was not found');
  }

  return accountId.trim();
}
}