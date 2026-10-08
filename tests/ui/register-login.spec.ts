import { test, expect } from '../../fixtures/pages.fixtures';
import { AccountApi } from '../../utils/AccountApi';
import { TestDataFactory } from '../../utils/TestDataFactory';
const billData = TestDataFactory.getBillPaymentData();

test(
  'Register user, open account and transfer funds successfully',
  async ({
    page,
    request,
    registrationPage,
    loginPage,
    accountsPage,
    transferPage,
    transactionsPage,
    billPaymentPage
  }) => {
      const accountApi = new AccountApi(request);

  const username = TestDataFactory.generateUsername();
   const customer = TestDataFactory.getCustomerData();
  // Register new user
  await registrationPage.navigate();

  await registrationPage.registerUser(
    customer,
    username,
    customer.password
  );

  await expect(
    registrationPage.successMessage
  ).toContainText(`Welcome ${username}`);

  // Logout
  await registrationPage.logout();

  // Login again
  await loginPage.login(username, customer.password);

  // Verify successful login
  await expect(
    loginPage.accountOverviewHeader
  ).toBeVisible();

  // Open a new savings account
  await accountsPage.openNewAccount();

  // Verify new account was created
  await expect(
    page.getByText('Account Opened!')
  ).toBeVisible();

  await expect(
    accountsPage.newAccountId
  ).toBeVisible();

  // Capture new account ID
  const newAccountId = await accountsPage.getNewAccountId();

  console.log(`New Account ID: ${newAccountId}`);

 const accountResponse = await accountApi.getAccount(newAccountId);

console.log('Account API Response:', accountResponse);

expect(accountResponse.id.toString()).toBe(newAccountId);

expect(accountResponse.customerId).toBeDefined();

expect(accountResponse.type).toBe('SAVINGS');

expect(accountResponse.balance).toBeDefined();
  // Open Transfer Funds
  await transferPage.transferFundsLink.click();

  // Get first available source account
  const fromAccount =
    await transferPage.fromAccountDropdown
      .locator('option')
      .first()
      .getAttribute('value');

  if (!fromAccount) {
    throw new Error('From account was not found');
  }

  // Transfer $100
  await transferPage.amountInput.fill('100');

  await transferPage.fromAccountDropdown.selectOption(fromAccount);

  await transferPage.toAccountDropdown.selectOption(newAccountId);

  await transferPage.transferButton.click();

  // Verify transfer completed
  await expect(
    transferPage.transferCompleteMessage
  ).toContainText('Transfer Complete');

  // Open transaction history for the new account
await transactionsPage.openAccountTransactionHistory(newAccountId);

// Verify transaction table is displayed
await expect(
  transactionsPage.transactionTable
).toBeVisible();

// Verify the $100 transfer is present
await expect(
  transactionsPage.transactionTable
).toContainText('100');

// Pay a bill using the new account
await billPaymentPage.payBill(
  billData,
  newAccountId
);

// Verify bill payment completed
await expect(
  billPaymentPage.paymentCompleteMessage
).toContainText('Bill Payment Complete');

});