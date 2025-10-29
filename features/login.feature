Feature: Login form validation on saucedemo.com

  Scenario Outline: UC-1 Successful login: Valid credentials
    Given the user is on the login page
    When the user logs in with username "<username>" and password "<password>"
    Then the user is redirected to the dashboard
    And the inventory container is visible on the page

    Examples:
      | username                | password     | behavior_after_login          |
      | standard_user           | secret_sauce | **No known issues**           |
      | problem_user            | secret_sauce | **Incorrect images**          |
      | error_user              | secret_sauce | **Fails during the Checkout** |
      | visual_user             | secret_sauce | **Visual issues**             |

  Scenario: UC-2 Unsuccessful Login: Both Username and Password fields cleared
    Given the user is on the login page
    When the user enters "any_user" in the "Username" field
      And clears the content of the "Username" field
      And the user enters "any_pass" in the "Password" field
      And clears the content of the "Password" field
      And clicks the "Login" button
    Then the login error message is visible
      And the error message contains the text "Epic sadface: Username is required"
      And the user remains on the login page

  Scenario: UC-3 Unsuccessful Login: Password field cleared
    Given the user is on the login page
    When the user enters "any_user" in the "Username" field
      And the user enters "any_pass" in the "Password" field
      And clears the content of the "Password" field
      And clicks the "Login" button
    Then the login error message is visible
      And the error message contains the text "Epic sadface: Password is required"
      And the user remains on the login page

  Scenario: UC-4 Unsuccessful Login: Username field cleared
    Given the user is on the login page
    When the user enters "any_user" in the "Username" field
      And clears the content of the "Username" field
      And the user enters "any pass" in the "Password" field
      And clicks the "Login" button
    Then the login error message is visible
      And the error message contains the text "Epic sadface: Username is required"
      And the user remains on the login page

  Scenario Outline: UC-5 Unsuccessful Login: Invalid credentials combinations
    Given the user is on the login page
    When the user logs in with username "<username>" and password "<password>"
    Then the login error message is visible
      And the error message contains the text "Epic sadface: Username and password do not match any user in this service"
      And the user remains on the login page

    Examples:
      | username          | password         | test_case_description                                       |
      | non_existent_user | secret_sauce     | Failure: Non-existent Username                              |
      | standard_user     | wrong_password   | Failure: Invalid Password                                   |
      | non_existent_user | wrong_password   | Failure: Non-existent Username and Password                 |
      | standard_user     | secret_SAUCE     | Boundary:  Password Case Sensitivity                        |
      | standard_USER     | secret_sauce     | Boundary:  Username Case Sensitivity                        |
      | standard_USER     | secret_SAUCE     | Boundary:  Username and Password Case Sensitivity           |
      | '  standard_user' | secret_sauce     | Boundary: Leading/tailing Trim in Username                  |
      | standard_user     | '  secret_sauce' | Boundary: Leading/tailing Trim in Password                  |
      | 'standard_user '  | 'secret_sauce '  | Boundary: Leading/tailing Trim in Password and Username     |

  Scenario: UC-6 Unsuccessful Login: Account is locked out
    Given the user is on the login page
    When the user logs in with username "locked_out_user" and password "secret_sauce"
    Then the login error message is visible
      And the error message contains the text "Epic sadface: Sorry, this user has been locked out."
      And the user remains on the login page