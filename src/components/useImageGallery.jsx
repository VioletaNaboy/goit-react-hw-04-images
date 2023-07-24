import {
  useState,
  useEffect,
  createContext,
  useContext,
  useCallback,
} from 'react';
import axios from 'axios';

const apiKey = '36982063-09f5e87e06cdb5f9f4765ffc0';
const baseUrl = 'https://pixabay.com/api/';

const ImageGalleryContext = createContext();

export const useImageGallery = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchImages = useCallback(async () => {
    setIsLoading(true);

    try {
      const response = await axios.get(
        `${baseUrl}?q=${searchQuery}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
      );

      setImages(prevImages =>
        page === 1 ? response.data.hits : [...prevImages, ...response.data.hits]
      );
      setIsLoading(false);
    } catch (error) {
      console.log('Error fetching images:', error);
      setIsLoading(false);
    }
  }, [searchQuery, page]);
  useEffect(() => {
    fetchImages();
  }, [fetchImages]);
  const handleSubmit = query => {
    setSearchQuery(query);
    setPage(1);
    setImages([]);
  };

  const loadMoreImages = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleImageClick = image => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return {
    searchQuery,
    images,
    isLoading,
    selectedImage,
    handleSubmit,
    loadMoreImages,
    handleImageClick,
    handleCloseModal,
  };
};

const ImageGalleryProvider = ({ children }) => {
  const galleryState = useImageGallery();

  return (
    <ImageGalleryContext.Provider value={galleryState}>
      {children}
    </ImageGalleryContext.Provider>
  );
};

const useImageGalleryContext = () => useContext(ImageGalleryContext);

export { ImageGalleryProvider, useImageGalleryContext };
