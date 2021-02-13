import React from 'react';

const ImageList = props => {

    const events = props.events.map(({key, link, event, date}) => {
        
        return (
            <div key={key} className="gig-list" style={{width: 220}}>
                <img src={link} alt='wtf' style={{height: 200, width: 200}} />
                <span className="image-list-span">{event}</span>
                <span>{date}</span>
                <br />
            </div>
        )
    });

    return <div>{events}</div>;
}

export default ImageList;