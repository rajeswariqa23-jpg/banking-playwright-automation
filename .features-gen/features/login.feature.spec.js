// Generated from: features\login.feature
import { test } from "playwright-bdd";

test.describe('Customer Login', () => {

  test('Registered customer logs in successfully', { tag: ['@smoke', '@regression'] }, async ({ Given, When, Then, And, page }) => { 
    await Given('the customer is on the ParaBank login page', null, { page }); 
    await When('the customer enters valid username and password'); 
    await And('clicks the login button'); 
    await Then('the Accounts Overview page should be displayed'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":["@smoke","@regression"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the customer is on the ParaBank login page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When the customer enters valid username and password","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"And clicks the login button","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then the Accounts Overview page should be displayed","stepMatchArguments":[]}]},
]; // bdd-data-end