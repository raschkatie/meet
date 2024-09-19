import { render } from "@testing-library/react";
import Event from "../components/Event";
import userEvent from "@testing-library/user-event";
import { getEvents } from "../api";


describe('<Event /> component', () => {

    let EventComponent;
    let allEvents;

    beforeEach(async () => {
        allEvents = await getEvents();
        EventComponent = render(<Event event={allEvents[0]} />);
    });

    // test that the event information displays correctly
    test('renders event title', () => {
        expect(EventComponent.queryByText(allEvents[0].summary)).toBeInTheDocument();
    });

    test('renders start time', () => {
        expect(EventComponent.container.querySelector('.start-time')).toBeInTheDocument();
    });

    test('renders location', () => {
        expect(EventComponent.queryByText(allEvents[0].location)).toBeInTheDocument();
    });

    test('renders event details button with the title \'show details\'', () => {
        expect(EventComponent.queryByText('show details')).toBeInTheDocument();
    });

    // check if the event's details section is shown or hidden when a user click on a 'show details' button
    test('by default, event\'s details section should be hidden', () => {
        const eventDetails = EventComponent.container.querySelector('.details');
        expect(eventDetails).not.toBeInTheDocument();
    });

    test('shows the details section when user click on the \'show details\' button', async () => {
        const user = userEvent.setup();
        const button = EventComponent.queryByText('show details');
        await user.click(button);
        const details = EventComponent.container.querySelector('.details');
        expect(details).toBeInTheDocument();
    });

    test('hides the details section when the user clicks on the \'hide details\' button', async () => {
        const user = userEvent.setup();
        let button = EventComponent.queryByText('show details');
        await user.click(button);
        let details = EventComponent.container.querySelector('.details');
        expect(details).toBeInTheDocument();

        button = EventComponent.queryByText('hide details');
        await user.click(button);
        details = EventComponent.container.querySelector('.details');
        expect(details).not.toBeInTheDocument();
    });
});