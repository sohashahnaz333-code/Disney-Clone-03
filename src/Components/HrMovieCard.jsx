import React from 'react'

function HrMovieCard({movie}) {
  return (
    <section className='w-[300px] flex flex-col items-center hover:scale-110 transition-all duration-150 ease-in'>
    <img src={ `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
    className='w-full md:h-[300px] md:w-[300px] rounded-lg 
             object-cover hover:border-[3px]  border-gray-400 cursor-pointer'
             alt={movie.title}
        />

    <h2 className='w-[150px] md:w-[260px] text-white mt-2  turncate'>{movie.title}</h2>
    
    </section>
  )
}

export default HrMovieCard;


