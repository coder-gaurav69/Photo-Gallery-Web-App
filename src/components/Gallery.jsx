import React from 'react';
import PhotoCard from './PhotoCard';

const Gallery = ({ images, favorites, onToggleFavorite }) => {
  if (images.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-xl text-gray-500">No photos found for this search.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
      {images.map((photo) => {
        const isFavorite = favorites.some((fav) => fav.id === photo.id);

        return (
          <PhotoCard
            key={photo.id}
            photo={photo}
            isFavorite={isFavorite}
            onToggleFavorite={() => onToggleFavorite(photo)}
          />
        );
      })}
    </div>
  );
};

export default Gallery;
