import React, {useEffect ,useState, useRef}  from 'react';
import axios from "axios";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";
import MovieCard from './MovieCard';
import HrMovieCard from './HrMovieCard';

//https://image.tmdb.org/t/p/w500/fwh8QyEaCmfPnUjHQTwSgOMA5tt.jpg
//const getMovieByGenreId = axios.get('https://api.themoviedb.org/3/discover/movie?api_key=f634f5df8dca3089b42636220d80ebb3');
function Movielist({genreId,index_}) {
    const [movieList,  setMovielist]=useState([])
     const elementRef=useRef(null);
    
 useEffect(()=>{
  async function getMovieByGenreId(){
    try{
      const res= await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=f634f5df8dca3089b42636220d80ebb3&with_genres=${genreId}`
      );
      console.log(res.data.results);
    
       setMovielist(res.data.results);

    }catch (err){
    console.log(err);
    }
  } 
  if(genreId){
    getMovieByGenreId();

  }
   
 },[genreId]);

 //left Scroll function
  const SliderRight=(element)=>{
    element.scrollLeft+=300;
  }
 

  //left Scroll function
  const SliderLeft=(element)=>{
    element.scrollLeft-=300;
  }




  return ( 
        <div className='relative'>
           <FaChevronLeft
             onClick={() => SliderLeft(elementRef.current)}
              className={`hidden md:block text-[50px] text-white p-2 z-10 cursor-pointer absolute 
              ${index_ % 3 === 0 ? 'mt-[80px]' : 'mt-[150px]'}`}
              />

        <div ref={elementRef} 
          className='flex overflow-x-auto gap-8 scrollbar-hide space-x-3 scroll-smooth p-2'>
          { movieList.map((item,i)=>(
               <>
               {index_%3===0
                  ?<MovieCard key={i} movie={item}/>
                  :<HrMovieCard key={i}movie={item}/>
                }
               </>
    
            ))}
         </div> 
         <FaChevronRight onClick={()=>SliderRight(elementRef.current)}
              className={`hidden md:block text-white text-[50px]  
              absolute p-2 z-10 top-0   cursor-pointer right-0
               ${index_%3===0? 'mt-[80px]' : 'mt-[150px]'}`}
              />
     </div>
  )
}


export default Movielist

