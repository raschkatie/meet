import EventList from './components/EventList';
import CitySearch from './components/CitySearch';
import NumberOfEvents from './components/NumberOfEvents';
import { extractLocations, getEvents } from './api';
import { useState, useEffect } from 'react';
import { InfoAlert, ErrorAlert, WarningAlert } from './components/Alert';
import React from 'react';
import './App.css';
import CityEventsChart from './components/CityEventsChart';

const App = () => {
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState('See all cities');
  const [isLoading, setIsLoading] = useState(false);
  const [infoAlert, setInfoAlert] = useState("");
  const [errorAlert, setErrorAlert] = useState("");
  const [warningAlert, setWarningAlert] = useState("");

  useEffect(() => {
    let warningText;
    if (navigator.onLine) {
      warningText = "";
    } else {
      warningText = "You are currently offline. Loading list from cached data. Please connect to the internet for an up-to-date list.";
    }
    setWarningAlert(warningText);
    
    setIsLoading(true);
    fetchData();
  }, [currentCity, currentNOE]);

  const fetchData = async () => {
    const allEvents = await getEvents();
    const filteredEvents = currentCity === 'See all cities' ?
      allEvents :
      allEvents.filter(event => event.location === currentCity);
    setEvents(filteredEvents.slice(0, currentNOE));
    setAllLocations(extractLocations(allEvents));
    setIsLoading(false);
  }

  return (
    <div className='App'>
      <div className='alerts-container'>
        {infoAlert.length ? <InfoAlert text={infoAlert} /> : null}
        {errorAlert.length ? <ErrorAlert text={errorAlert} /> : null}
        {warningAlert.length ? <WarningAlert text={warningAlert} /> : null}
      </div>
      <div id='heading'>
        <h1>Meet App</h1>
        <p id='heading-details'>
          Here, you can find events all around the globe. <br />
          If you'd like to find events near you or edit the number of events displayed, use the search bars below. <br />
          Happy planning!
        </p>
      </div>
      <CitySearch
        allLocations={allLocations}
        setCurrentCity={setCurrentCity}
        setInfoAlert={setInfoAlert}
      />
      <NumberOfEvents
        currentNOE={currentNOE}
        setCurrentNOE={setCurrentNOE}
        setErrorAlert={setErrorAlert}
      />
      <div>
        {isLoading ? <h3 className='loading-screen'>Loading...</h3> : null}
        <CityEventsChart allLocations={allLocations} events={events} />
        <EventList events={events} />
      </div>
    </div>
  );
}

export default App;
