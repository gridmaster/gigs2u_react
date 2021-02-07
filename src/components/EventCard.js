import React from 'react';

const EventCard = (props) => {

    console.log(props);

    return (
        <div>
                <img key={props.key} src={props.image.link} alt='wtf' style={{height: 200, width: 200}} />
                <br />
                <span>{props.image.event}</span>
                <br />
                <span>{props.image.date}</span>
        </div>
    );
}

export default EventCard;