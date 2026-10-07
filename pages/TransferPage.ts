import { Page, Locator } from '@playwright/test';

export class TransferPage {
  readonly page: Page;
  readonly transferFundsLink: Locator;
  readonly amountInput: Locator;
  readonly fromAccountDropdown: Locator;
  readonly toAccountDropdown: Locator;
  readonly transferButton: Locator;
  readonly transferCompleteMessage: Locator;

  constructor(page: Page) {
    this.page = page;

    this.transferFundsLink = page.getByRole('link', {
      name: 'Transfer Funds'
    });

    this.amountInput = page.locator('#amount');

    this.fromAccountDropdown = page.locator('#fromAccountId');

    this.toAccountDropdown = page.locator('#toAccountId');

    this.transferButton = page.getByRole('button', {
      name: 'Transfer'
    });

    this.transferCompleteMessage = page.locator('#showResult');
  }

  async transferFunds(
    amount: string,
    fromAccount: string,
    toAccount: string
  ) {
    await this.transferFundsLink.click();

    await this.amountInput.fill(amount);

    await this.fromAccountDropdown.selectOption(fromAccount);

    await this.toAccountDropdown.selectOption(toAccount);

    await this.transferButton.click();
  }
}