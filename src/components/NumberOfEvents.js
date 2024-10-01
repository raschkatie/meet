import { useState } from "react"


const NumberOfEvents = ({ currentNOE, setCurrentNOE }) => {
    
    const handleInputChanged = (event) => {
        let value = event.target.value;
        setCurrentNOE(value);

    }

    return (
        <div className='textbox-and-title number-of-events'>
            <label id='number'>
                <span className="input-title">Number of Events: </span>
            </label>
            <div className='search-box'>
                <input
                    type='text'
                    value={currentNOE}
                    onChange={handleInputChanged}
                />
            </div>
        </div>

    )
};

export default NumberOfEvents;