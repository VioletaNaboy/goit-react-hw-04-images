import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';
import { useImageGalleryContext } from '../useImageGallery';

export const ImageGallery = () => {
  const { images, handleImageClick } = useImageGalleryContext();

  return (
    <ul className={css.imageGallery}>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          image={image}
          onClick={() => handleImageClick(image)}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
