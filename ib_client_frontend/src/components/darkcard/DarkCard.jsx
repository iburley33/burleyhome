import React from 'react';
import './darkcardcss.css';
import { useNavigate } from 'react-router-dom';
import ThreeFrame from '../threeframe/ThreeFrame';


function DarkCard({ title, link, detail }) {
  const navigate = useNavigate();

  function handleNav() {
    navigate(link)
  }
  return (
    <div className='darkCard'>
      <div className='darkContent'>

          <h1 class='darkDesc' onClick={handleNav}>{title}</h1>

        <h5 class='darkDetail'>{detail}</h5>
      </div>
      <div className='darkImgDiv'>
        <ThreeFrame />
      </div>
    </div>
  );
}

export default DarkCard;
