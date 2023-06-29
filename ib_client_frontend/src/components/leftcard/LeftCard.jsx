import React from 'react';
import './leftcardcss.css'

function Leftcard({ image, title, description, link, detail }) {
  console.log({ image, title, description, link, detail });

  return (

    <div className='leftCard'>
      <div className='leftImgDiv'>
        <a href={link} class='leftImgLink'>
          <img src={image} class='leftImg'></img>
        </a>
      </div>
      <div className='leftContent'>
        <p class="pLeft">{title}</p>
        <a href={link} class='leftLink'>
          <h1 class='leftDesc'>{description}</h1>
        </a>
        <h5 class='leftDetail'>{detail}</h5>
      </div>
    </div>
  );
}

export default Leftcard;

