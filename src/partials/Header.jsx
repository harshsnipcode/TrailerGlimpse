import React from "react";
import { Link } from "react-router-dom";

function Header({ wallpaper }) {
  const getImageUrl = () => {
    const imagePath = wallpaper?.backdrop_path || 
                     wallpaper?.profile_path || 
                     wallpaper?.poster_path;
    if (!imagePath) return null;
    return `https://image.tmdb.org/t/p/original${imagePath}`;
  };

  const handleImageError = (e) => {
    console.log("TMDB image failed, trying smaller size");
    e.target.src = e.target.src.replace('/original/', '/w1280/');
  };

  if (!wallpaper) return null;

  return (
    <div className="w-full h-[65vh] relative overflow-hidden">
      {getImageUrl() ? (
        <img
          src={getImageUrl()}
          alt={wallpaper.title || wallpaper.name || "Movie poster"}
          onLoad={() => console.log("TMDB image loaded successfully!")}
          onError={handleImageError}
          className="w-full h-full object-cover object-center block"
        />
      ) : (
        <div className="w-full h-full bg-gray-700 flex items-center justify-center">
          <p className="text-white text-lg">No Image Available</p>
        </div>
      )}

      
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-8 gap-2">
        <h1 className="text-white text-4xl md:text-5xl font-extrabold leading-tight m-0">
          {wallpaper.original_title || wallpaper.title || wallpaper.name}
        </h1>

        <p className="text-white text-base md:text-lg w-1/2 tracking-tight m-0">
          {wallpaper.overview?.slice(0, 200)}
          <Link to="#" className="text-[#6556CC] font-bold no-underline">
            ...more
          </Link>
        </p>

        <div className="flex items-center gap-5 my-2">
          <p className="text-white m-0">
            <i className="ri-megaphone-fill text-yellow-400"></i>{" "}
            {wallpaper.release_date || 'No Information'}
          </p>
          <p className="text-white m-0">
            <i className="ri-album-fill text-yellow-400"></i>{" "}
            {wallpaper.media_type?.toUpperCase()}
          </p>
        </div>

        <Link
          to={`/${wallpaper.media_type}/details/${wallpaper.id}`}
          className="inline-block px-4 py-2 font-bold rounded-md mt-3 bg-[#6556CC] text-white hover:bg-[#5445b8] transition-colors duration-200 w-fit no-underline"
        >
          Watch Trailer
        </Link>
      </div>
    </div>
  );
}

export default Header;
