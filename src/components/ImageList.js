import "../style/imageList.css"
import React from 'react';

const ImageList = props => {

    let thisEvent;
    const events = props.events.map(({key, link, event, date}) => {

        return (
            <div style={{textAlign: "center", height: "220px", width: "153px"}}>
                <img src={link} key={key} alt='wtf' style={{height: "150px", width: "150"}}/>
                <br />
                <div style={{textAlign: "center"}}>
                <text className="image-list-text">{event}</text>
                <br />
                <text className="image-list-text">{date}</text>
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

export default ImageList;