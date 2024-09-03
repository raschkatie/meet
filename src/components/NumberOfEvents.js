import { useState } from "react"


const NumberOfEvents = () => {
    const [number, setNumber] = useState(32);
    
    const handleInputChanged = (event) => {
        let value = event.target.value;
        setNumber(value);

    }

    return (
        <div id='number-of-events'>
            <label id='number'>
                <input
                    type='text'
                    value={number}
                    onChange={handleInputChanged}
                />
            </label>
        </div>
    )
};

export default NumberOfEvents;