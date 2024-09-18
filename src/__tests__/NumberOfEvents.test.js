import { render, within } from "@testing-library/react";
import NumberOfEvents from "../components/NumberOfEvents";
import userEvent from "@testing-library/user-event";
import { getEvents } from "../api";
import App from "../App";

describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsComponent;
    let textbox;

    beforeEach(() => {
        NumberOfEventsComponent = render(<NumberOfEvents currentNOE={32} setCurrentNOE={() => {}} />);
    });

    test('has an element with "textbox" role', () => {
        expect(NumberOfEventsComponent.queryByRole('textbox')).toBeInTheDocument();
    });

    test('textbox has a default value of 32', () => {
        textbox = NumberOfEventsComponent.getByRole('textbox');
        expect(textbox).toHaveValue('32');
    });

    test('textbox value changes when user types in field', async () => {
        textbox = NumberOfEventsComponent.getByRole('textbox');
        const user = userEvent.setup();
        await user.type(textbox, '{backspace}{backspace}10');
        const events = await getEvents();
        NumberOfEventsComponent.rerender(<NumberOfEvents currentNOE={10} setCurrentNOE={events} />);
        expect(textbox).toHaveValue('10');
    });

});

describe('<NumberOfEvents /> integration', () => {
    test('the number of events rendered matches the number of events input by the user', async () => {
        const user = userEvent.setup();
        const AppComponent = render(<App />);
        const AppDOM = AppComponent.container.firstChild;

        const NumberOfEventsDOM = AppDOM.querySelector('#number-of-events');
        const NumberOfEventsInput = within(NumberOfEventsDOM).queryByRole('textbox');

        await user.type(NumberOfEventsInput, '{backspace}{backspace}10');

        const EventListDOM = AppDOM.querySelector('#event-list');
        const eventItems = within(EventListDOM).queryAllByRole('listitem');

        expect(eventItems.length).toBe(10);
    });
});