import React, { useState } from 'react';
import css from './Searchbar.module.css';
import { useImageGalleryContext } from '../useImageGallery';

export const Searchbar = () => {
  const [query, setQuery] = useState('');
  const { handleSubmit } = useImageGalleryContext();

  const handleChange = event => {
    setQuery(event.target.value);
  };

  const onSubmit = event => {
    event.preventDefault();
    handleSubmit(query);
  };

  return (
    <header className={css.searchbar}>
      <form className={css.searchForm} onSubmit={onSubmit}>
        <button type="submit">
          <span className="button-label">Search</span>
        </button>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleChange}
        />
      </form>
    </header>
  );
};

export default Searchbar;
