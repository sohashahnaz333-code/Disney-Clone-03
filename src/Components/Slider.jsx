import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";

const screenWidth = window.innerWidth;

function Slider() {
  const [movies, setMovies] = useState([]);
  const elementRef = useRef();

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          "https://api.themoviedb.org/3/trending/all/day?api_key=f634f5df8dca3089b42636220d80ebb3"
        );
        console.log(res.data.results);
        setMovies(res.data.results);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  const SliderRight = (element) => {
    element.scrollLeft += screenWidth - 100;
  };

  const SliderLeft = (element) => {
    element.scrollLeft -= screenWidth - 100;
  };

  return (
    <div className="relative">
      {/* Left Button */}
      <FaChevronLeft
        className="hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer z-10"
        onClick={() => SliderLeft(elementRef.current)}
      />

      <FaChevronRight
        className="hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] right-0 cursor-pointer z-10"
        onClick={() => SliderRight(elementRef.current)}
      />

      {/* Movie Images */}
      <div
        ref={elementRef}
        className="flex overflow-x-auto w-full px-16 py-4 p-6 scrollbar-hide scroll-smooth"
      >
        {movies.map((movie) => (
          <img
            key={movie.id}
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            alt={movie.title || movie.name}
            className=" rounded-lg object-cover object-left-top mr-8 border-gray-400
                        hover:border-[4px] transition-all duration-150 ease-in hover:border-blue-400
                        min-w-full android:min-w-[100%]  xs:min-w-[100%] iphone12:min-w-[100%] sm:w-[300px] md:w-[350px] lg:w-[400px]
                        h-[310px] android:h-[190px] xs:h-[180px] sm:h-[190px] md:h-[300px]  
                      
                        hover:shadow-[0_8px_25px_rgba(0,0,255,0.3)]"
          />
        ))}
      </div>
    </div>
  );
}





export default Slider;