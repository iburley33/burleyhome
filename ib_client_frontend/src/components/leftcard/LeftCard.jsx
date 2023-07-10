import React from 'react';
import './leftcardcss.css';
import { useNavigate } from "react-router-dom";

function Leftcard({ image, title, description, link, detail }) {
  console.log({ image, title, description, link, detail });
  const navigate = useNavigate();

  function handleNav() {
    navigate(link)
  }
  return (

    <div className='leftCard'>
      <div className='leftImgDiv'>

          <img src={image} class='leftImg' onClick={handleNav} alt='portfolio'></img>
   
      </div>
      <div className='leftContent'>
        <p class="pLeft">{title}</p>
          <h1 class='leftDesc' onClick={handleNav}>{description}</h1>
        <h5 class='leftDetail'>{detail}</h5>
      </div>
    </div>
  );
}

export default Leftcard;

