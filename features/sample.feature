Feature: Example Features

  # Scenario: Login as the "administrator" role
  #
  #   When I login as the "administrator" role
  #   And I am on "/wp-admin/"
  #   Then I should see "Dashboard"

  Scenario: Take a screenshot

    Given the screen size is 1440x900

    When I am on "/"
    # Then take a screenshot and save it to "screenshot_1440x900.png"

    When I am on "/wp-admin/"
    # Then take a screenshot and save it to "screenshot_1440x900-login.png"

    When I login
    # Then take a screenshot and save it to "screenshot_1440x900-wp-admin.png"

    When I am on "/wp-admin/post-new.php"

    When I focus title
    When I type "this is title"
    # Then take a screenshot and save it to "screenshot_1440x900-post-new.png"

    When I add block "paragraph"
    When I type "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    When I publis post from editor
    When I wait 10
    When I am on "/"

    Then take a screenshot and save it to "screenshot_1440x900-posted.png"

    # When I am on "/"
    # Then take a screenshot and save it to "_out/320x400.png"
    #
    # When I am on "/wp-admin/"
    # Then take a screenshot and save it to "_out/320x400-wp-admin.png"
