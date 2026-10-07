@smoke @regression
Feature: Customer Login

  Scenario: Registered customer logs in successfully
    Given a registered customer exists
    When the customer logs in with valid credentials
    Then the Accounts Overview page should be displayed