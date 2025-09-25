import React, { useEffect , useRef, useState} from 'react'
import axios from "axios";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";
const screenWidth=window.innerWidth;


const API_KEY = import.meta.env.REACT_API_KEY; // for Vite + Tailwind projects
const BASE_URL = "https://api.themoviedb.org/3";
//https://image.tmdb.org/t/p/w500/eU7IfdWq8KQy0oNd4kKXS0QUR08.jpg
//const img_base_url ="https://image.tmdb.org/t/p/w500"

//https://api.themoviedb.org/3/person/popular?api_key=f634f5df8dca3089b42636220d80ebb3
//https://api.themoviedb.org/3/trending/movie/day?api_key=f634f5df8dca3089b42636220d80ebb3

//const getTrendingVedios =axios.get("this.BASE_URL"+"/trending/movie/day?="+ API_KEY)
//https://api.themoviedb.org/3/trending/all/day?api_key=f634f5df8dca3089b42636220d80ebb3
//f634f5df8dca3089b42636220d80ebb3
//https://pokeapi.co/api/v2/pokemon?limit=151




 
function Slider (){
 const [movies,  setMovies]=useState([]);
 const elementRef=useRef();
 
 useEffect(()=>{
  async function fetchData(){
    try{
      const res= await axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=f634f5df8dca3089b42636220d80ebb3');
      console.log(res.data.results);
    
      setMovies(res.data.results);

     }catch (err){
      console.log(err);
    }
  } 
  fetchData();
 },[]);
 
 const images=[];
 for(let i=0; i<movies.length;i++){
  images.push(
    
    <img
     key={movies[i].id}
     src={'https://image.tmdb.org/t/p/w500'+movies[i].backdrop_path}
     alt={movies[i].title}
     className='min-w-full h-[310px] object-cover object-left-top mr-5 rounded-md hover:border-[4px]
     border-gray-400 transition-all duration-100 ease-in'/>

  );
 }
  const SliderRight=(element)=>{
    element.scrollLeft+=screenWidth-110
  }
  const SliderLeft=(element)=>{
    element.scrollLeft-=screenWidth-110
  }

  return (
    
        <div>
        <FaChevronLeft  className="hidden md:block text-white text-[30px] 
        absolute mx-8 mt-[150px] cursur-pointer" onClick={()=>SliderLeft(elementRef.current)}/>
        <FaChevronRight className=" hidden md:block text-white text-[30px] 
        absolute mx-8 mt-[150px] cursur-pointer right-0" onClick={()=>SliderRight(elementRef.current)}/>
        <div className='flex overflow-x-auto w-full px-16 py-4 
        scrollbar-hide scroll-smooth'ref={elementRef}>
          {images}
        </div>
        </div>  
        
  );
}

export default Slider;