import "../style/imageList.css";
import "../style/bandList.css";
import React from 'react';

const BandList = props => {

    const events = props.events.map(({key, link, event, date}) => {

        return (
            <div key={key} style={{textAlign: "center", height: "220px", width: "153px"}}>
                <img src={link} alt={event} style={{height: "150px", width: "150"}}/>
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
        <div className="band-list">
            {events}
        </div>
    )
}

export default BandList;