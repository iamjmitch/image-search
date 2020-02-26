import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';
import Masonry from 'react-masonry-component';

const ImageList = props => {
  const masonryOptions = {
    transitionDuration: 0
  };

  const imagesLoadedOptions = { background: '.my-bg-image-el' };

  const images = props.images.map(image => {
    return <ImageCard key={image.id} image={image} />;
  });
  return (
    <Masonry
      // default ''
      // default 'div'
      options={masonryOptions} // default {}
      breakpointCols={3}
      elementType={'div'}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
      disableImagesLoaded={false} // default false
      updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
      imagesLoadedOptions={imagesLoadedOptions} // default {}
    >
      {images}
    </Masonry>
  );
};

export default ImageList;
