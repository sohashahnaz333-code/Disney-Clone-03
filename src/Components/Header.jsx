import React, { useState } from 'react'
import  logo from './../assets/images/logo.png';
import { LuSearch } from "react-icons/lu";
import { HiHome} from "react-icons/hi";
import { FaPlus } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { RiMovieFill } from "react-icons/ri";
import { MdMovieCreation } from "react-icons/md";
import  soha from './../assets/images/shahnaz.jpeg';
import { HiDotsVertical } from "react-icons/hi";



function  Header () {
   const [toggle, setToggle] = useState(true);
   const menu = [
        {
        
            name:'HOME',
            icon:HiHome
        },
        { 
            
            name:'SEARCH',
            icon:LuSearch
        },
        {    
            
            name:'WATCH LIST',
            icon:FaPlus
        },
        {   
             
            name:'ORIGINALS',
            icon:FaRegStar
        },
        {   
            
            name:'MOVIES',
            icon:RiMovieFill
        },
        {   
             
            name:'SERIES',
            icon:MdMovieCreation
        }
    ]

  
 const HeaderItem = ({ name, Icon }) => (
  <div className=" text-white flex  items-center gap-3 
  text-[15px] font-semibold cursor-pointer hover:underline 
   underline-offset-8 mb-2">
    <Icon/>
    <h2>{name}</h2>
  </div>
)
  
  return (
    
        <div className='flex items-center gap-8 justify-between p-5'>
          <div className='flex gap-8 items-center'>
            <img src={logo} className='w-[80px]
             md:w-[115px] object-cover'/>
              <div className='hidden md:flex  gap-8'>
            {
            menu.map((item ,index )=>(
           <HeaderItem key={index} key={item.id} name={item.name} Icon={item.icon}/>

            ))}
          </div>
          
          <div className='flex md:hidden gap-8'>
           { 
           menu.map((item , index )=>index<3&&(
           <HeaderItem key={item.id} name={''} Icon={item.icon}/>

           ))}
           
           <div className=' md:hidden' onClick={()=>setToggle(!toggle)}>
            <HeaderItem name='' Icon={HiDotsVertical}/> 
             {toggle ?< div className='absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4'>
                 { 
               menu.map((item , index )=>index>2&&(
               <HeaderItem key={item.id} name={item.name} Icon={item.icon}/>

                ))}

               </div>:null}

            </div>
          
          </div>
       </div>

      <img src= {soha} className='w-[80px] rounded-full'/>   
      
      
  </div> 
    
  )

}

export default Header;