import React from "react";
import { IoIosHeartEmpty, IoMdHeart } from "react-icons/io";

const PhotoCard = ({ photo, isFavorite, onToggleFavorite }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-gray-200 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={photo.download_url}
          alt={`By ${photo.author}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className="absolute bottom-4 left-4 right-12 transform translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <p className="text-sm font-medium text-white line-clamp-1">
          {photo.author}
        </p>
      </div>

      <button
        onClick={(e) => {
          e.preventDefault();
          onToggleFavorite();
        }}
        className="absolute bottom-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-md transition-all duration-200 hover:bg-white/40 active:scale-90"
        aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
      >
        {isFavorite ? (
          <IoMdHeart className="h-6 w-6 text-red-500 transition-colors duration-200" />
        ) : (
          <IoIosHeartEmpty className="h-6 w-6 text-white transition-colors duration-200" />
        )}
      </button>

      <div className="bg-white p-3 sm:hidden">
        <p className="text-sm font-semibold text-gray-800 truncate">{photo.author}</p>
      </div>
    </div>
  );
};

export default PhotoCard;
