@smoke @regression
Feature: Customer Login

  Scenario: Registered customer logs in successfully
    Given the customer is on the ParaBank login page
    When the customer enters valid username and password
    Then the Accounts Overview page should be displayed