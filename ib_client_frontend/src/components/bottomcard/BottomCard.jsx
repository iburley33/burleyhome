import React from 'react';
import "./bottomcardcss.css";
import Slider from '../slider/Slider';


function Bottomcard({ image, detail, description, title, link }) {


  return (

    <div className='bottomCard'>

      <div className='bottomContent'>
        <div className='bottomTitleDiv'>
          <a href={link} class='bottomLink'>
            <h1 class='bottomTitle'>{title}</h1>
          </a>
        </div>
        <div className='bottomDetDiv'>
          <h5 class='bottomDetail'>{detail}</h5>
        </div>
      </div>
        <Slider />
    </div>
  );
}

export default Bottomcard;

