import React, { useEffect, useState } from "react";
//import { getGenres } from "./tmdb";
import axios from "axios";

function Genres() {
  const [genres, setGenres] = useState([]);
   useEffect(()=>{
    async function fetchGenres(){
      try{
        const res= await axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=f634f5df8dca3089b42636220d80ebb3');
        console.log(res.data.results);
      
        setGenres(res.data.results);
  
      }catch (err){
      console.log(err);
      }
    } 
    fetchGenres();
   },[]);
    const images=[];
      for(let i=0; i<genres.length;i++){
      images.push(
    
       < img
        key={genres[i].id}
        src={'https://image.tmdb.org/t/p/w500'+genres[i].backdrop_path}
        alt={genres[i].title}
        className='min-w-full h-[310px] object-cover object-left-top mr-5 rounded-md hover:border-[4px]
      border-gray-400 transition-all duration-100 ease-in'
      />

  );
 }
  
   

  return (
    <div className="p-4 text-white">
      
          <div>{genres.id}</div>
 
      
    </div>
  )
}

export default Genres;