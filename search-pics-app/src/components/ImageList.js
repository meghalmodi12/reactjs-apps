import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = (props) => {
    const imgList = props.images ? props.images.map((image) => {
        return <ImageCard key={image.id} image={image} />
    }) : (<div></div>);

    return (
        <div className="image-list">
            {imgList}
        </div>
    )
};

export default ImageList;