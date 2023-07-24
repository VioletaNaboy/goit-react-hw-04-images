import React from 'react';
import css from './Button.module.css';
import { useImageGalleryContext } from '../useImageGallery';

const Button = () => {
  const { loadMoreImages } = useImageGalleryContext();

  return (
    <button className={css.button} onClick={loadMoreImages}>
      Load more
    </button>
  );
};

export default Button;
