import React from 'react';
import './leftcardcss.css';
import { Link } from "react-router-dom";

function Leftcard({ image, title, description, link, detail }) {
  console.log({ image, title, description, link, detail });

  return (

    <div className='leftCard'>
      <div className='leftImgDiv'>
       <Link to={link}>
          <img src={image} class='leftImg'></img>
        </Link>
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

