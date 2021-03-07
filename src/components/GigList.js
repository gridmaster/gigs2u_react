import "../style/gigList.css";
import React from 'react';

const GigList = props => {

    const events = props.events.map(({key, link, event, date}) => {

        return (
            <div key={key} style={{textAlign: "center", height: "350px", width: "260px"}}>
                <img src={link} alt={event} style={{width: "250px", height: "250px"}} />
                <br />
                <div style={{textAlign: "center"}}>
                    <span className="image-list-text">{event}</span>
                    <br />
                    <span className="image-list-text">{date}</span>
                </div>
            </div>
        )
    });

    return (
        <div className="gig-list">
            {events}
        </div>
    )
}

export default GigList;