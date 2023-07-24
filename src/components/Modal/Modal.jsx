import React, { useEffect } from 'react';
import css from './Modal.module.css';
import { useImageGalleryContext } from '../useImageGallery';

export const Modal = () => {
  const { selectedImage, handleCloseModal } = useImageGalleryContext();

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        handleCloseModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleCloseModal]);

  const handleOverlayClick = event => {
    if (event.target === event.currentTarget) {
      handleCloseModal();
    }
  };

  if (!selectedImage) {
    return null;
  }

  return (
    <div className={css.overlay} onClick={handleOverlayClick}>
      <div className={css.modal}>
        <img src={selectedImage.largeImageURL} alt={selectedImage.tags} />
      </div>
    </div>
  );
};

export default Modal;
