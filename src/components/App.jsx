import React from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import css from './App.module.css';
import {
  ImageGalleryProvider,
  useImageGalleryContext,
} from './useImageGallery';

export const App = () => {
  return (
    <ImageGalleryProvider>
      <AppContent />
    </ImageGalleryProvider>
  );
};

const AppContent = () => {
  const { images, isLoading, selectedImage } = useImageGalleryContext();

  return (
    <div className={css.container}>
      <Searchbar />
      <ImageGallery />
      {isLoading && <Loader />}
      {images.length > 0 && <Button />}
      {selectedImage && <Modal />}
    </div>
  );
};

export default App;
