Feature: Specify Number of Events

    Scenario: User should see the full list of events when a number of events has not been specified.

        Given the user has not specified a value in the Number of Events field;
        When the user views the events list;
        Then they should see all available events.

    Scenario: When the user fills out the Number of Events field, they should not view more than the specified number

        Given the user has opened the app;
        When the user types a new value in the field;
        Then they should not see a number of events in the list that exceeds the provided value.