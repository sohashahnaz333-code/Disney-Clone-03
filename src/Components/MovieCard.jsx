import React from "react";

function MovieCard({ movie }) {
  const imageUrl = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
    : "https://via.placeholder.com/300x200?text=No+Image";

  return (
    <div className="w-[150px] xs:w-[120px] iphone12:w-[120px] android:w-[120px] sm:w-[120px] md:w-[250px] lg:w-[300px] cursor-pointer group relative overflow-hidden rounded-lg border-[1px] border-transparent hover:border-blue-400 transition-all duration-300 ease-in-out hover:scale-110 hover:-translate-y-2 hover:shadow-[0_10px_25px_rgba(0,0,255,0.3)]">
      {/* Movie Image */}
      <img
        src={imageUrl}
        alt={movie.title || movie.name}
        className="w-full h-[120px] xs:h-[100px] iphone12:h-[100px] android:h-[100px] sm:h-[100px] md:h-[170px] object-cover rounded-lg transition-all duration-300"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Title */}
      <p className="absolute bottom-2 left-0 right-0 text-center text-white text-xs xs:text-sm md:text-base font-medium opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300">
        {movie.title || movie.name}
      </p>
    </div>




  );
}

export default MovieCard;
