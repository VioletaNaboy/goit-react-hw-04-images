import { Component } from 'react';
import axios from 'axios';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import css from './App.module.css';
const apiKey = '36982063-09f5e87e06cdb5f9f4765ffc0';
const baseUrl = 'https://pixabay.com/api/';

export class App extends Component {
  state = {
    searchQuery: '',
    page: 1,
    images: [],
    selectedImage: null,
    isLoading: false,
  };

  componentDidMount() {
    this.fetchImages();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.searchQuery !== this.state.searchQuery ||
      prevState.page !== this.state.page
    ) {
      this.fetchImages();
    }
  }

  fetchImages = async () => {
    const { searchQuery, page } = this.state;
    this.setState({ isLoading: true });

    try {
      const response = await axios.get(
        `${baseUrl}?q=${searchQuery}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
      );

      this.setState(prevState => ({
        images:
          page === 1
            ? response.data.hits
            : [...prevState.images, ...response.data.hits],
        isLoading: false,
      }));
    } catch (error) {
      console.log('Error fetching images:', error);
      this.setState({ isLoading: false });
    }
  };
  handleSubmit = searchQuery => {
    this.setState({ searchQuery, page: 1, images: [] });
  };

  loadMoreImages = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };
  handleImageClick = image => {
    this.setState({ selectedImage: image });
  };

  handleCloseModal = () => {
    this.setState({ selectedImage: null });
  };

  render() {
    const { images, isLoading, selectedImage } = this.state;

    return (
      <div className={css.container}>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery images={images} onImageClick={this.handleImageClick} />
        {isLoading && <Loader />}
        {images.length > 0 && <Button onClick={this.loadMoreImages} />}
        {selectedImage && (
          <Modal
            selectedImage={selectedImage}
            onClose={this.handleCloseModal}
          />
        )}
      </div>
    );
  }
}

export default App;
