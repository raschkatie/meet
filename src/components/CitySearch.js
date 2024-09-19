import { useEffect, useState } from "react";

const CitySearch = ({ allLocations, setCurrentCity }) => {
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        setSuggestions(allLocations);
    }, [`${allLocations}`]);

    const handleInputChanged = (event) => {
        const value = event.target.value;
        const filteredLocations = allLocations ? allLocations.filter((location) => {
          return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
        }) : [];
    
        setQuery(value);
        setSuggestions(filteredLocations);
    };

    const handleItemClicked = (event) => {
        const value = event.target.textContent;
        setQuery(value);
        setShowSuggestions(false); // to hide the list
        setCurrentCity(value);
    };

    return (
        <div className='city-search search-box'>
            <label id="location">
                <span className="input-title">Event Location: </span>
                <input
                type='text'
                className='city'
                placeholder='Search for a city'
                value={query}
                onFocus={() => setShowSuggestions(true)}
                onChange={handleInputChanged}
                />
            </label>
            {showSuggestions ?
                <ul className='suggestions'>
                    {suggestions.map((suggestion) => {
                        return <li onClick={handleItemClicked} key={suggestion}>{suggestion}</li>
                    })}
                    <li key='See all cities' onClick={handleItemClicked}>
                        <b>See all cities</b>
                    </li>
                </ul>
                : null
            }
        </div>
    );

}

export default CitySearch;