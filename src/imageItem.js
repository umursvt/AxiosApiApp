import React from 'react';

function ImageItem({ image }) {
  console.log(image);
  return (
    <div>
      <div className="imageListImg">
        <img src={image.urls.small} alt={image.alt_description} />
      </div>
    </div>
  );
}

export default ImageItem;
