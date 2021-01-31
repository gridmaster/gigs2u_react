//import { render } from '@testing-library/react';
// import { image } from 'faker';
import React from 'react';
import EventImage from "./EventImage";

const ImageList = (props) => {
    const images = props.images.map((image) => {
        console.log(image.link);

        return <img src={image.link} alt='wtf' style={{height: 200, width: 200}}/>
    });

    return <div>{images}</div>
};

export default ImageList;