Feature: WordPress scenario

  Scenario: login

    Given the screen size is 1440x900

    Given the page URL is "/wp-admin"

    Then I should see "WordPress"

    When I login

    Then take a screenshot and save it to "screenshot-wp.png"
