import React from 'react';
import "./topcardcss.css";

function Topcard({ image, title, description, link, detail }) {
  console.log({ image, title, description, link, detail });

  return (

    <div className='topCard'>
      <div className='topImgDiv'>
          <img src={image} class='topImg'></img>
      </div>
      <div className='topContent'>
        <p class="pTop">{title}</p>
        <a href={link} class='topLink'>
          <h1 class='topDesc'>{description}</h1>
        </a>
        <h5 class='topDetail'>{detail}</h5>
      </div>
    </div>
  );
}

export default Topcard;

