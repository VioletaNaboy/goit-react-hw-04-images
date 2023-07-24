import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';
class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.key === 'Escape') {
      this.props.onClose();
    }
  };

  handleOverlayClick = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { selectedImage, onClose } = this.props;

    return (
      <div className={css.overlay} onClick={onClose}>
        <div className={css.modal}>
          <img src={selectedImage.largeImageURL} alt={selectedImage.tags} />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  selectedImage: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
