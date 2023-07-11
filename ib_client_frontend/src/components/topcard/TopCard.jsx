import React from 'react';
import "./topcardcss.css";
import { useNavigate } from 'react-router-dom';

function Topcard({ image, title, description, link, detail }) {
  console.log({ image, title, description, link, detail });
  const navigate = useNavigate();

  function handleNav() {
    navigate(link)
  }
  return (

    <div className='topCard'>
      <div className='topImgDiv'>
        <img src={image} class='topImg' onClick={handleNav}alt='portfolio'></img>
      </div>
      <div className='topContent'>
        <div className='topDescDiv'>
          <p class="pTop">{title}</p>

            <h1 class='topDesc' onClick={handleNav}>{description}</h1>

        </div>
        <div className='topDetDiv'>
          <h5 class='topDetail'>{detail}</h5>
        </div>
      </div>
    </div>
  );
}

export default Topcard;

