import React from 'react';

const ImageList = (props) => {
    console.log(props.images);

    const images = props.images.map((image, index) => {
        console.log({image.id});

        return ( 
            <div>
                <img id={index} src={image.link} alt='wtf' key={image.id} style={{height: 200, width: 200}} />
                <br />
                <span>{image.event}</span>
            </div>
    )})

    console.log({images});
    return <div>{images}</div>
}

export default ImageList;