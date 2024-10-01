import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react';
import { getEvents } from '../api';
import userEvent from '@testing-library/user-event';
import App from '../App';
import Event from '../components/Event';


const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    test('When the user hasn’t clicked on the show/hide button, the event description is more general and succinct.', ({ given, when, then }) => {
        let AppComponent;
        let AppDOM
        given('the Show/Hide button is not clicked;', () => {
            AppComponent = render(<App />);
        });

        when('the user views an event list;', async () => {
            AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');

            await waitFor(() => {
                const EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBe(32);
            });
        });

        then('they should only see the basic details for each event.', () => {
            AppDOM = AppComponent.container.firstChild;
            const eventDetails = AppDOM.querySelector('.details');
            expect(eventDetails).not.toBeInTheDocument();
        });
    });

    test('When the user has clicked on the show/hide button, they can view more specific details about an event.', ({ given, when, then }) => {
        let EventComponent;
        let allEvents;
        let eventDetails;
        given('the event details are hidden;', async () => {
            allEvents = await getEvents();
            EventComponent = render(<Event event={allEvents[0]} />);
            eventDetails = EventComponent.container.querySelector('.details');
            expect(eventDetails).not.toBeInTheDocument();
        });

        when('the user clicks on the Show/Hide button;', async () => {
            const user = userEvent.setup();
            const details = EventComponent.container.querySelector('.details-btn');
            await user.click(details);
        });

        then('they should see more details about the specific event.', () => {
            eventDetails = EventComponent.container.querySelector('.details');
            expect(eventDetails).toBeInTheDocument();
        });
    });
});