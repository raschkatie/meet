import { render } from "@testing-library/react";
import NumberOfEvents from "../components/NumberOfEvents";
import userEvent from "@testing-library/user-event";
import { getEvents } from "../api";

describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsComponent;
    let textbox;

    beforeEach(() => {
        NumberOfEventsComponent = render(<NumberOfEvents />)
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
        NumberOfEventsComponent.rerender(<NumberOfEvents />);
        expect(textbox).toHaveValue('10');
    });

});