import React from 'react';
import './darkcardcss.css';
import Example from '../slider/slider';

function Darkcard({ image, img1, img2, img3, img4, img5, title, description, link, link1, link2, link3, link4, link5, detail }) {
  console.log({ image, img1, img2, img3, img4, img5, title, description, link,link1, link2, link3, link4, link5, detail });

  return (

    <div className='darkCard'>
      <div className='darkContent'>
        <a href={link} class='darkLink'>
          <h1 class='darkDesc'>{title}</h1>
        </a>
        <h5 class='darkDetail'>{detail}</h5>
      </div>
      <div className='darkImgDiv'>

      </div>
    </div>
  );
}

export default Darkcard;

