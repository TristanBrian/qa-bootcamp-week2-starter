Feature: Shopping cart

  Scenario: A shopper adds an available product to the cart
    Given the shopper is viewing an available product
    When the shopper adds the product to the cart
    Then the cart should contain the selected product
    And the product quantity should be 1
    And the cart should display the correct subtotal