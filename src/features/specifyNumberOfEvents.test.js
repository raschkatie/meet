import { loadFeature, defineFeature } from "jest-cucumber";
import { render, within, waitFor } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";
import NumberOfEvents from "../components/NumberOfEvents";

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    test('User should see the full list of events when a number of events has not been specified.', ({ given, when, then }) => {
        
        let AppComponent;
        given('the user has not specified a value in the Number of Events field;', () => {  
            AppComponent = render(<App />);
        });

        let EventListDOM;
        when('the user views the events list;', () => {
            const AppDOM = AppComponent.container.firstChild;
            EventListDOM = AppDOM.querySelector('#event-list');
        });

        then('they should see all available events.', async () => {
            await waitFor(() => {
                const EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBe(32);
            });
        });
    });

    test('When the user fills out the Number of Events field, they should not view more than the specified number', ({ given, when, then }) => {
        
        let AppComponent;
        given('the user has opened the app;', () => {
            AppComponent = render(<App />);
        });

        when('the user types a new value in the field;', async () => {
            const user = userEvent.setup();
            const AppDOM = AppComponent.container.firstChild;
            const NumberOfEventsDOM = AppDOM.querySelector('.number-of-events');
            const NumberOfEventsInput = within(NumberOfEventsDOM).queryByRole('textbox');
            await user.type(NumberOfEventsInput, '{backspace}{backspace}10');
        });

        then('they should not see a number of events in the list that exceeds the provided value.', async () => {
            await waitFor(() => {
                const AppDOM = AppComponent.container.firstChild;
                const EventListDOM = AppDOM.querySelector('#event-list');
                const EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBe(10);
            });
        });
    });
});