import React from "react";

function HrMovieCard({ movie }) {
  const imagePath = movie.backdrop_path || movie.poster_path;

  return (
    <div
      className="
        w-[110px] iphone12:w-[100px] android:w-[100px]
        xs:w-[100px] sm:w-[100px] md:w-[250px]
        cursor-pointer group relative overflow-hidden rounded-lg
        border-[1px] border-transparent hover:border-blue-400
        transition-all duration-300 ease-in-out
        hover:scale-110 hover:-translate-y-2
        hover:shadow-[0_8px_25px_rgba(0,0,255,0.3)]
      "
    >
      {/* Movie Image */}
      <img
        src={
          imagePath
            ? `https://image.tmdb.org/t/p/w500${imagePath}`
            : "https://via.placeholder.com/300x200?text=No+Image"
        }
        alt={movie.title || movie.name}
        className="
          w-full h-[180px] iphone12:h-[160px] android:h-[180px]
          sm:h-[200px] md:h-[300px]
          object-cover rounded-lg transition-all duration-300
        "
      />

      {/* Overlay Gradient */}
      <div
        className="
          absolute inset-0 bg-gradient-to-t
          from-black/80 via-black/30 to-transparent
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300
        "
      ></div>

      {/* Movie Title */}
      <h2
        className="
          absolute bottom-2 left-0 right-0 text-center
          text-white text-xs iphone12:text-sm md:text-base
          font-medium opacity-0 group-hover:opacity-100
          translate-y-3 group-hover:translate-y-0
          transition-all duration-300
        "
      >
        {movie.title || movie.name}
      </h2>
    </div>
  );
}

export default HrMovieCard;
