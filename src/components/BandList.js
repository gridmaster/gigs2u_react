import "../style/imageList.css";
import "../style/bandList.css";
import React from 'react';

const BandList = props => {

    let thisEvent;
    const events = props.events.map(({key, link, event, date}) => {

        return (
            <div style={{textAlign: "center", height: "220px", width: "153px"}}>
                <img src={link} key={key} alt='wtf' style={{height: "150px", width: "150"}}/>
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
        <div className="band-list">
            {events}
        </div>
    )
}

export default BandList;