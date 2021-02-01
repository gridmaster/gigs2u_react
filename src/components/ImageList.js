import React from 'react';

const ImageList = (props) => {
    console.log(props.images);

    const images = props.images.map((image, index) => {

        const imgKey = image.key;
        console.log(imgKey.toString());

        return ( 
            <div>
                <img key={imgKey.toString} src={image.link} alt='wtf' style={{height: 200, width: 200}} />
                <br />
                <span>{image.event}</span>
                <br />
                <span>{image.date}</span>
            </div>
    )})

    console.log({images});
    return <div>{images}</div>
}

export default ImageList;