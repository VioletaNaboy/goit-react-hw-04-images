import React from 'react';
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';
const ImageGalleryItem = ({ image, onClick }) => (
  <li className={css.galleryItem} onClick={onClick}>
    <img src={image.webformatURL} alt={image.tags} />
  </li>
);
ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};
export default ImageGalleryItem;
