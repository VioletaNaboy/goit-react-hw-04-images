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
  useImageGalleryContext();

  return (
    <ImageGalleryProvider>
      <div className={css.container}>
        <Searchbar />
        <ImageGallery />
        <Loader />
        <Button />
        <Modal />
      </div>
    </ImageGalleryProvider>
  );
};

export default App;
