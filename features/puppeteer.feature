Feature: Simple Pupetter scenario

  Scenario: Take a screenshot

    Given the screen size is 1440x900

    Given the page URL is "/"

    When I change the screen size into 380x800

    When I type "Hello!"

    When I press Enter

    When I scroll by 500px virtically

    When I wait for 2 seconds

    Then I should see ".entry-title"

    Then I should see "VCCW"

    Then take a screenshot and save it to "screenshot-pptr.png"
