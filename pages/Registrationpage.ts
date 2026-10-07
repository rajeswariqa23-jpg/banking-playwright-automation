import { Page, Locator, expect } from '@playwright/test';

export class RegistrationPage {
  readonly page: Page;
  readonly registerLink: Locator;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly address: Locator;
  readonly city: Locator;
  readonly state: Locator;
  readonly zipCode: Locator;
  readonly phone: Locator;
  readonly ssn: Locator;
  readonly username: Locator;
  readonly password: Locator;
  readonly confirmPassword: Locator;
  readonly registerButton: Locator;
  readonly successMessage: Locator;
  readonly logoutLink: Locator;

  constructor(page: Page) {
    this.page = page;

    this.registerLink = page.getByRole('link', { name: 'Register' });

    this.firstName = page.locator('input[name="customer.firstName"]');
    this.lastName = page.locator('input[name="customer.lastName"]');
    this.address = page.locator('input[name="customer.address.street"]');
    this.city = page.locator('input[name="customer.address.city"]');
    this.state = page.locator('input[name="customer.address.state"]');
    this.zipCode = page.locator('input[name="customer.address.zipCode"]');
    this.phone = page.locator('input[name="customer.phoneNumber"]');
    this.ssn = page.locator('input[name="customer.ssn"]');
    this.username = page.locator('input[name="customer.username"]');
    this.password = page.locator('input[name="customer.password"]');
    this.confirmPassword = page.locator('input[name="repeatedPassword"]');
    this.registerButton = page.locator('input[value="Register"]');
    this.successMessage = page.locator('#rightPanel');
    this.logoutLink = page.getByRole('link', { name: 'Log Out' });
  }

async navigate() {
  await this.page.goto('register.htm');

  await this.firstName.waitFor({
    state: 'visible'
  });
}
  async registerUser(
    firstName: string,
    lastName: string,
    username: string,
    password: string
  ) {
    await this.firstName.fill(firstName);
  await expect(this.firstName).toHaveValue(firstName);
    await this.lastName.fill(lastName);
    await this.address.fill('123 Main Street');
    await this.city.fill('Atlanta');
    await this.state.fill('GA');
    await this.zipCode.fill('30004');
    await this.phone.fill('4705551234');
    await this.ssn.fill('123456789');

    await this.username.fill(username);
    await this.password.fill(password);
    await this.confirmPassword.fill(password);

    await this.registerButton.click();
  }
  async logout() {
  await this.logoutLink.click();
}
}