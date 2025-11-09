import React from 'react'
import Header from './Components/Header';
import Slider from './Components/Slider';
import ProductionHouse from './Components/ProductionHouse';
import GENRELIST from './Components/GENRELIST';


function App() {
  return (
    <div className="App">
      <div className=' bg-[#161827]'>
        <Header/>
         <Slider/>
         <ProductionHouse/>
         <GENRELIST/>
      </div>
     </div>  
  )
}

export default App;
  