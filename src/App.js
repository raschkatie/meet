import EventList from './components/EventList';
import CitySearch from './components/CitySearch';
import NumberOfEvents from './components/NumberOfEvents';
import { extractLocations, getEvents } from './api';
import { useState, useEffect } from 'react';
import React from 'react';
import './App.css';

const App = () => {
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState('See all cities');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log('loading screen enabled');
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
    console.log('loading screen disabled');
  }

  return (
    <div className='App'>
      <div id='heading'>
        <h1>Welcome to the Meet App</h1>
        <p id='heading-details'>
          Here, you can find events all around the globe. <br />
          If you'd like to find events near you or edit the number of events displayed, use the search bars below. <br />
          Happy planning!
        </p>
      </div>
      <CitySearch allLocations={allLocations} setCurrentCity={setCurrentCity} />
      <NumberOfEvents currentNOE={currentNOE} setCurrentNOE={setCurrentNOE} />
      <div>
        {isLoading ? <h3 className='loading-screen'>Loading...</h3> : null}
        <EventList events={events} />
      </div>
    </div>
  );
}

export default App;
