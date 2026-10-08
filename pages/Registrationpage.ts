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

    this.registerLink = page.getByRole('link', {
      name: 'Register'
    });

    this.firstName = page.locator(
      'input[name="customer.firstName"]'
    );

    this.lastName = page.locator(
      'input[name="customer.lastName"]'
    );

    this.address = page.locator(
      'input[name="customer.address.street"]'
    );

    this.city = page.locator(
      'input[name="customer.address.city"]'
    );

    this.state = page.locator(
      'input[name="customer.address.state"]'
    );

    this.zipCode = page.locator(
      'input[name="customer.address.zipCode"]'
    );

    this.phone = page.locator(
      'input[name="customer.phoneNumber"]'
    );

    this.ssn = page.locator(
      'input[name="customer.ssn"]'
    );

    this.username = page.locator(
      'input[name="customer.username"]'
    );

    this.password = page.locator(
      'input[name="customer.password"]'
    );

    this.confirmPassword = page.locator(
      'input[name="repeatedPassword"]'
    );

    this.registerButton = page.locator(
      'input[value="Register"]'
    );

    this.successMessage = page.locator(
      '#rightPanel'
    );

    this.logoutLink = page.getByRole('link', {
      name: 'Log Out'
    });
  }

  async navigate() {
    await this.page.goto('register.htm');

    await this.firstName.waitFor({
      state: 'visible'
    });
  }

  async registerUser(
    customer: {
      firstName: string;
      lastName: string;
      address: string;
      city: string;
      state: string;
      zipCode: string;
      phone: string;
    },
    username: string,
    password: string
  ) {
    const uniqueSSN =
      Math.floor(
        100000000 + Math.random() * 900000000
      ).toString();

    await this.firstName.fill(customer.firstName);

    await expect(
      this.firstName
    ).toHaveValue(customer.firstName);

    await this.lastName.fill(customer.lastName);
    await this.address.fill(customer.address);
    await this.city.fill(customer.city);
    await this.state.fill(customer.state);
    await this.zipCode.fill(customer.zipCode);
    await this.phone.fill(customer.phone);

    await this.ssn.fill(uniqueSSN);

    await this.username.fill(username);
    await this.password.fill(password);
    await this.confirmPassword.fill(password);

    await this.registerButton.click();
  }

  async logout() {
    await this.logoutLink.click();
  }
}