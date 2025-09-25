import React from 'react'

//https://api.themoviedb.org/3/trending/all/day?api_key=f634f5df8dca3089b42636220d80ebb3
function MovieCard({movie}) {
  return (
    <>
       <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        className='w-full md:h-[300px] md:w-[300px]  rounded-lg 
        hover:border-[3px] border-gray-400 cursor-pointer
        hover:scale-110 transition-all  duration-150 ease-in'/>
    </>
  )
}

export default MovieCard;
