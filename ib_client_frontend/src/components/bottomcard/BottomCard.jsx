import React from 'react';
import "./bottomcardcss.css";
import Slider from '../slider/Slider';
import { useNavigate } from 'react-router-dom';

function Bottomcard({ image, detail, description, title, link }) {
  const navigate = useNavigate();

  function handleNav() {
    navigate(link)
  }

  return (

    <div className='bottomCard'>

      <div className='bottomContent'>
        <div className='bottomTitleDiv'>
            <h1 onClick={()=>navigate(link)} class='bottomTitle'>{title}</h1>
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

