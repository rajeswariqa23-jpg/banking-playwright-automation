import { Page, Locator } from '@playwright/test';

export class BillPaymentPage {
  readonly page: Page;
  readonly billPayLink: Locator;
  readonly payeeName: Locator;
  readonly address: Locator;
  readonly city: Locator;
  readonly state: Locator;
  readonly zipCode: Locator;
  readonly phone: Locator;
  readonly account: Locator;
  readonly verifyAccount: Locator;
  readonly amount: Locator;
  readonly fromAccountDropdown: Locator;
  readonly sendPaymentButton: Locator;
  readonly paymentCompleteMessage: Locator;

  constructor(page: Page) {
    this.page = page;

    this.billPayLink = page.getByRole('link', {
      name: 'Bill Pay'
    });

    this.payeeName = page.locator('input[name="payee.name"]');
    this.address = page.locator('input[name="payee.address.street"]');
    this.city = page.locator('input[name="payee.address.city"]');
    this.state = page.locator('input[name="payee.address.state"]');
    this.zipCode = page.locator('input[name="payee.address.zipCode"]');
    this.phone = page.locator('input[name="payee.phoneNumber"]');
    this.account = page.locator('input[name="payee.accountNumber"]');
    this.verifyAccount = page.locator('input[name="verifyAccount"]');
    this.amount = page.locator('input[name="amount"]');
    this.fromAccountDropdown = page.locator('select[name="fromAccountId"]');

    this.sendPaymentButton = page.getByRole('button', {
      name: 'Send Payment'
    });

    this.paymentCompleteMessage = page.locator('#billpayResult');
  }

  async payBill(
    amount: string,
    fromAccount: string
  ) {
    await this.billPayLink.click();

    await this.payeeName.fill('Electric Company');
    await this.address.fill('100 Utility Drive');
    await this.city.fill('Atlanta');
    await this.state.fill('GA');
    await this.zipCode.fill('30004');
    await this.phone.fill('4705552222');

    await this.account.fill('987654321');
    await this.verifyAccount.fill('987654321');

    await this.amount.fill(amount);

    await this.fromAccountDropdown.selectOption(fromAccount);

    await this.sendPaymentButton.click();
  }
}