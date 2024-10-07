import { useState } from "react"


const NumberOfEvents = ({ currentNOE, setCurrentNOE, setErrorAlert }) => {
    
    const handleInputChanged = (event) => {
        let value = event.target.value;

        let errorText;
        if (isNaN(value) || value <= 0) {
            errorText = "Please enter a valid number";
        } else {
            errorText = "";
        }
        setCurrentNOE(value);
        setErrorAlert(errorText);
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