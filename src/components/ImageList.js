//import { render } from '@testing-library/react';
// import { image } from 'faker';
import React from 'react';
import EventImage from "./EventImage";

const ImageList = (props) => {
    const images = props.images.map((image) => {
        console.log(image.link);

        return <img src={image.link} />
    });

    return <div>{images}</div>
};

export default ImageList;