import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import MovieCard from "./MovieCard";
import HrMovieCard from "./HrMovieCard";

function Movielist({ genreId, index_ }) {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef(null);

  useEffect(() => {
    async function getMovieByGenreId() {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=f634f5df8dca3089b42636220d80ebb3&with_genres=${genreId}`
        );
        setMovieList(res.data.results);
      } catch (err) {
        console.log(err);
      }
    }
    if (genreId) getMovieByGenreId();
  }, [genreId]);

  const sliderRight = (element) => {
    console.log("Slider Right Clicked:", element);
    if (element) element.scrollLeft += 500;
  };

  const sliderLeft = (element) => {
    if (element) element.scrollLeft -= 500;
  };

  return (
    <div className="relative bg-gray-900 py-6 overflow-hidden">
      {/* Left Scroll */}
      <FaChevronLeft
        onClick={() => sliderLeft(elementRef.current)}
        className="hidden md:block text-[40px] text-white absolute left-0 z-[50] p-2 
        top-1/2 transform -translate-y-1/2 cursor-pointer"
      />

      {/* Movie Slider */}
      <div
        ref={elementRef}
        className="flex gap-4 overflow-x-auto hover:overflow-visible scrollbar-hide scroll-smooth px-6 md:px-1"
      >


        {movieList.map((item, i) => (
          <div key={i} className="mr-4 first:ml-4" >
            {index_ % 3 === 0 ? (
              <MovieCard movie={item} />
            ) : (
              <HrMovieCard movie={item} />
            )}
          </div>
        ))}
      </div>

      {/* Right Scroll */}
      <FaChevronRight
        onClick={() => sliderRight(elementRef.current)}
        className="hidden md:block text-[40px] text-white absolute right-0 z-[50] p-2 
        top-1/2 transform -translate-y-1/2 cursor-pointer"
      />
    </div>
  );
}

export default Movielist;
