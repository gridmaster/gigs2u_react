import "../style/gigList.css";
import React from 'react';

const GigList = props => {

    let thisEvent;
    const events = props.events.map(({key, link, event, date}) => {

        return (
            <div style={{textAlign: "center", height: "350px", width: "260px"}}>
                <img src={link} key={key} alt='bfd' style={{width: "250px", height: "250px"}} />
                <br />
                <view style={{textAlign: "center"}}>
                <text className="image-list-text">{event}</text>
                <br />
                <text className="image-list-text">{date}</text>
                </view>
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