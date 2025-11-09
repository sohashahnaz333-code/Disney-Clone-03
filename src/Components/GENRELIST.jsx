import React from 'react';
import Movielist from './Movielist';
import GenresList from '../Constant/GenresList';

function GENRELIST() {
  return (
    <div>
      {GenresList.map((item, index) =>
        index <= 4 && (
          <div key={item.id} className='p-8 px-8 md:px-16'>
            <h2 className='text-[20px] text-white font-bold'>{item.name}</h2>
            <Movielist genreId={item.id} index_={index} />
          </div>
        )
      )}
    </div>
  );
}

export default GENRELIST;
