import { useState } from "react"


const NumberOfEvents = ({ currentNOE, setCurrentNOE }) => {
    
    const handleInputChanged = (event) => {
        let value = event.target.value;
        setCurrentNOE(value);

    }

    return (
        <div className='number-of-events search-box'>
            <label id='number'>
                <span className="input-title">Number of Events: </span>
                <input
                    type='text'
                    value={currentNOE}
                    onChange={handleInputChanged}
                />
            </label>
        </div>
    )
};

export default NumberOfEvents;