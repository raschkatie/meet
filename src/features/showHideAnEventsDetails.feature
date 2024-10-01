Feature: Show/hide event details

    Scenario: When the user hasn’t clicked on the show/hide button, the event description is more general and succinct.
        Given the Show/Hide button is not clicked;
        When the user views an event list;
        Then they should only see the basic details for each event.

    Scenario: When the user has clicked on the show/hide button, they can view more specific details about an event.
        Given the event details are hidden;
        When the user clicks on the Show/Hide button;
        Then they should see more details about the specific event.