import React from 'react';
import './darkcardcss.css';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import portrait from '../../assets/imgs/portrait-PH.jpeg';

function DarkCard({ image, img1, img2, img3, img4, img5, title, description, link, link1, link2, link3, link4, link5, detail }) {
  console.log({ image, img1, img2, img3, img4, img5, title, description, link,link1, link2, link3, link4, link5, detail });
 
  const images = [
    portrait,
    portrait,
    portrait,
  ];

  return (
    <div className='darkCard'>
      <div className='darkContent'>
        <a href={link} class='darkLink'>
          <h1 class='darkDesc'>{title}</h1>
        </a>
        <h5 class='darkDetail'>{detail}</h5>
      </div>
      <div className='darkImgDiv'>
      <Slide slidesToScroll={1} slidesToShow={3} indicators={true}>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                    <span>Slide 1</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                    <span>Slide 2</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                    <span>Slide 3</span>
                </div>
            </div>
        </Slide>
      </div>
    </div>
  );
}

export default DarkCard;
