import React from 'react'

import  marvel from './../assets/images/marvel.png';
import  nationalG  from './../assets/images/nationalG.png';
import  pixar from './../assets/images/pixar.png';
import  logo from './../assets/images/logo.png';
import  starwar from './../assets/images/starwar.png';

import  disney from './../assets/video/disney.mp4';
import  marvell from './../assets/video/marvell.mp4';
import  S from './../assets/video/S.mp4';
import  p  from './../assets/video/p.mp4';
import  national from './../assets/video/national.mp4';

function ProductionHouse() {
  const productionHouseList=[
    {
      id:1,
      image:logo,
      video:disney
    },
    {
      id:2,
      image:marvel,
      video:marvell
    },
   
    {
      id:3,
      image:pixar,
      video:p
    },

    {
      id:4,
      image:nationalG,
      video:national
    },

    {
      id:5,
      image:starwar,
      video:S
    } 

]

  return (
    <div className='flex gap-5 p-2 px-5 md:px-16'>
      {productionHouseList.map((item)=>(       
         <div className='border-[2px] border-gray-600 rounded-lg w-full
             hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer relative
             shadow-xl  shadow-blue-800'>
             <video src={item.video}  autoPlay loop playsInline className='absolute 
              top-0 rounded-md z-0 opacity-0 hover:opacity-50'/>
              <img src={item.image} className='w-full z-[1] opacity-100 '/>
            
         </div>
      ))} 
    </div>
  )
}


export default ProductionHouse
