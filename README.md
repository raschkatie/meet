# Meetup App

This app will be a serverless progressive web application (PWA) with React using a test-driven development (TDD) technique. The application will use the Google Calendar API to fetch upcoming events.

## Usage

You can access the running app at: [https://raschkatie.github.io/meet/](https://raschkatie.github.io/meet/).

## Tech Used

- Serverless
- Google Calendar API
- React
- Jest
- Puppeteer
- Recharts

## Key Features

### Feature 1: Filter Events by City

_As a user, I should be able to filter events by city so that I can see a list of events taking place in that city._

#### Scenario 1:

_When user hasn’t searched for a specific city, show upcoming events from all cities._

- Given user hasn’t searched for any city;
- When the user opens the app;
- Then the user should see a list of upcoming events.

#### Scenario 2:

_User should see a list of suggestions when they search for a city._

- Given the main page is open;
- When the user start typing in the city textbox;
- Then the user should receive a list of cities (suggestions) that match what they’ve typed.

#### Scenario 3:

_User can select a city from the suggested list._

- Given user was typing “Berlin” in the city textbox AND the list of suggested cities is showing;
- When the user selects a city (e.g., ‘Berlin, Germany’) from the list;
- Then their city should be changed to that city AND the user should receive a list of upcoming events in that city.

### Feature 2: Show/Hide Event Details

_As a user, I should be able to click on a ‘show/hide’ button in an event’s description so that I can see more comprehensive details about an event._

#### Scenario 1:

_When the user hasn’t clicked on the Show/Hide button, the event description is more general and succinct._

- Given the Show/Hide button is not clicked;
- When the user views an event list;
- Then they should only see the basic details for each event.

#### Scenario 2:

_When the user has clicked on the Show/Hide button, they can view more specific details about an event._

- Given the event details are hidden;
- When the user clicks on the Show/Hide button;
- Then they should see more details about the specific event.

### Feature 3: Specify Number of Events

_As a user, I should be able to specify a number of events shown in a list so that I’m not overwhelmed by too many event options at once._

#### Scenario 1:

_User should see the full list of events when a number of events has not been specified._

- Given the "Number of Events" field is empty;
- When the user views the events list;
- Then they should see all available events.

#### Scenario 2:

_When the user fills out the 'Number of Events' field, they should not view more than the specified number_

- Given the user has opened the app;
- When the user types a new value in the field;
- Then they should not see a number of events in the list that exceeds the provided value.

### Feature 4: Use the App when Offline

_As a user, I should be able to still access the app while offline so that I can continue to view events without an internet connection._

#### Scenario:

_If the user tries to view an event list without an internet connection, they should be able to view cached data._

- Given the user has used the app before;
- When the user opens the app without an internet connection;
- Then they should still be able to view certain events from cached data.

### Feature 5: Add an App Shortcut to the Home Screen

_As a user, I should be able to choose whether I want a shortcut on my home screen so that I have easy and quick access to the app._

#### Scenario:

_When the user is viewing the app, they should be able to download a shortcut of the app for easy access in the future._

- Given the user is viewing the main page of the app;
- When they click on the "Add to Home Screen" button;
- Then they should be able to download and install a shortcut for the app on their Desktop (computer) or Home Screen (mobile).

### Feature 6: Display Charts Visualizing Event Details

_As a user, I should be able to find a visualization of data about the events so that I can see and easily interpret how many events are taking place in certain areas, and the popularity of certain types of events._

#### Scenario:

_While the user is viewing an event's page, they should be able to view a visualization of data so they can easily see and interpret that data._

- Given the user has searched for a specific location;
- When they click on the "More Event Info" button;
- Then they can view a scatterplot of events taking place near the searched location, alongside a pie chart showing the popularity of event genres.
