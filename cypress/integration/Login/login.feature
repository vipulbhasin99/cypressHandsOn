Feature: Login

    Scenario: Login Successfully
        Given I open Login Page
        When I fill the username input with "webdriver"
        And I fill the password input with "webdriver123"
        And I click on Login button