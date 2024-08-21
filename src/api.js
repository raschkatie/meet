import mockData from "./mock-data";


// this function takes an events array, then uses map to create a new array with only locations
export const extractLocations = (events) => {
    const extractedLocations = events.map((event) => event.location);
    const locations = [...new Set(extractedLocations)];
    return locations;
  };

// this function will fetch the list of all events
export const getEvents = async () => {
    return mockData;
  };