import React from 'react';
import EventCard from './EventCard';

const ImageList = props => {

    // console.log(props);

    // console.log(props.events);

    const events = props.events.map((event, index) => {
        
        //console.log(event);
        
        return (
            <div>
            <img key={event.key} src={event.link} alt='wtf' style={{height: 200, width: 200}} />
            <br />
            <span>{event.event}</span>
            <br />
            <span>{event.date}</span>
            </div>

        )
    });

    // const images = props.events.map((events, index) => {

    //     const imgKey = events.key;
    //     console.log(imgKey.toString());

    //     return (
    //         <div>hello...</div>
    //         //<EventCard images={events} />
    //     );
    // });

    return <div>{events}</div>;
}

export default ImageList;