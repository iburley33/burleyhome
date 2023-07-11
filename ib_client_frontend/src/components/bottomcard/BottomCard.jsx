import React from 'react';
import "./bottomcardcss.css";


function Bottomcard({ image }) {


  return (

    <div className='bottomCard'>
      <div className='sliderDiv'>
        <img class='image' src={image} alt='carousel'></img>
      </div>
    </div>
  );
}

export default Bottomcard;

