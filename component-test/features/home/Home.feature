Feature: Home

  # Scenario: The title of page must to be "Good morning"
  #   When I open the Home page
  #   And I click in the button "button-goodMorning"
  #   Then the Title display "Good morning"

  # Scenario: The title of page must to be "Good night"
  #   When I open the Home page
  #   And I click in the button "button-goodNight"
  #   Then the Title display "Good night"

  Scenario Outline: The title of page must to be <page title>
    When I open the Home page
    And I click in the button "<buttonDataTest>"
    Then the Title display "<page title>"
    Examples:
        | page title   | buttonDataTest     |
        | Good morning | button-goodMorning |
        | Good night   | button-goodNight   |