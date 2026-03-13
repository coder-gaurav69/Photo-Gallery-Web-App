import React, { useState, useReducer, useEffect, useCallback, useMemo } from 'react';
import useFetchPhotos from './hooks/useFetchPhotos';
import { favoritesReducer, initialState } from './reducers/favoritesReducer';
import SearchBar from './components/SearchBar';
import Gallery from './components/Gallery';
import Loader from './components/Loader';

const App = () => {
  const { photos, loading, error } = useFetchPhotos('https://picsum.photos/v2/list?limit=30');
  const [searchTerm, setSearchTerm] = useState('');

  const [favorites, dispatch] = useReducer(favoritesReducer, initialState, (initial) => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : initial;
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const handleSearch = useCallback((value) => {
    setSearchTerm(value);
  }, []);

  const filteredPhotos = useMemo(() => {
    if (!searchTerm) return photos;
    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [photos, searchTerm]);

  const toggleFavorite = (photo) => {
    dispatch({ type: 'TOGGLE_FAVORITE', payload: photo });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Photo Gallery</h1>
          <p className="text-lg text-gray-600">Celebrare - Frontend Intern Assignment</p>
        </header>

        <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />

        {error && (
          <div className="mt-8 p-4 bg-red-100 text-red-700 rounded-lg text-center">
            {error}
          </div>
        )}

        {loading ? (
          <Loader />
        ) : (
          <Gallery
            images={filteredPhotos}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
          />
        )}
      </div>
    </div>
  );
};

export default App;
