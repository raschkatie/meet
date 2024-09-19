import { useState } from "react";

const Event = ({ event }) => {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <li className='event'>
            <h3>{event.summary}</h3>
            <span className="event-detail-title">Location: </span><p className='location'>{event.location}</p>
            <span className="event-detail-title">Start: </span><p className='start-time'>{new Date(event.start.dateTime).toUTCString()}</p>
            <span className="event-detail-title">End: </span><p className='end-time'>{new Date(event.end.dateTime).toUTCString()}</p>

            {showDetails ? (
                <div className='details'>
                    <p>{event.description}</p>
                </div>
            ) : null }

            <button 
                className='details-btn'
                onClick={() => setShowDetails(!showDetails)}>
                {showDetails ? "hide details" : "show details"}
            </button>
        </li>
    );
}

export default Event;