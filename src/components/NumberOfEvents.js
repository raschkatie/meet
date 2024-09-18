import { useState } from "react"


const NumberOfEvents = ({ currentNOE, setCurrentNOE }) => {
    
    const handleInputChanged = (event) => {
        let value = event.target.value;
        setCurrentNOE(value);

    }

    return (
        <div id='number-of-events'>
            <label id='number'>
                Number of Events:
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