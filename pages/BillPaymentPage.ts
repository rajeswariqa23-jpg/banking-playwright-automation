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
  billData: {
    payeeName: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    phone: string;
    accountNumber: string;
    amount: string;
  },
  fromAccount: string
) {
  await this.billPayLink.click();

  await this.payeeName.fill(billData.payeeName);
  await this.address.fill(billData.address);
  await this.city.fill(billData.city);
  await this.state.fill(billData.state);
  await this.zipCode.fill(billData.zipCode);
  await this.phone.fill(billData.phone);

  await this.account.fill(billData.accountNumber);
  await this.verifyAccount.fill(billData.accountNumber);

  await this.amount.fill(billData.amount);

  await this.fromAccountDropdown.selectOption(fromAccount);

  await this.sendPaymentButton.click();
}
}