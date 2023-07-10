import React from 'react';
import "./topcardcss.css";

function Topcard({ image, title, description, link, detail }) {
  console.log({ image, title, description, link, detail });

  return (

    <div className='topCard'>
      <div className='topImgDiv'>
        <img src={image} class='topImg' alt='portfolio'></img>
      </div>
      <div className='topContent'>
        <div className='topDescDiv'>
          <p class="pTop">{title}</p>
          <a href={link} class='topLink'>
            <h1 class='topDesc'>{description}</h1>
          </a>
        </div>
        <div className='topDetDiv'>
          <h5 class='topDetail'>{detail}</h5>
        </div>
      </div>
    </div>
  );
}

export default Topcard;

