import React from 'react';
import ImageItem from './imageItem';

function ImageList({ imagesPlaceHolder }) {
  return (
    <div className="imageList">
      {imagesPlaceHolder.map((image, index) => {
        return <ImageItem key={index} image={image} />;
      })}
    </div>
  );
}

export default ImageList;
