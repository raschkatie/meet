import { useState } from "react";

const Event = ({ event }) => {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <li className='event'>
            <h3>{event.summary}</h3>
            <p className='location'>{event.location}</p>
            <p className='start-time'>{event.start.dateTime}</p>
            <p className='end-time'>{event.end.dateTime}</p>

            {showDetails ? (
                <div className='details'>
                    <p>{event.description}</p>
                </div>
            ) : null };

            <button 
                id='show-details'
                onClick={() => setShowDetails(!showDetails)}>
                {showDetails ? "hide details" : "show details"}
            </button>
        </li>
    );
}

export default Event;