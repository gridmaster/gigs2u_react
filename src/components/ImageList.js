import "../style/gigList.css";
import "../style/imageList.css"
import React from 'react';

const ImageList = props => {

    let thisEvent;
    const events = props.events.map(({key, link, event, date}) => {

        return (
            <div style={{textAlign: "center"}}>
                <img src={link} key={key} alt='wtf' />
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

export default ImageList;