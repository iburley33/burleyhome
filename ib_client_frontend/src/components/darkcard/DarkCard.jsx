import React from 'react';
import './darkcardcss.css';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

function DarkCard({ image, img1, img2, img3, img4, img5, title, description, link, link1, link2, link3, link4, link5, detail }) {
  console.log({ image, img1, img2, img3, img4, img5, title, description, link,link1, link2, link3, link4, link5, detail });
 
  const images = [
        "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
        "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
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
      <Slide>
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
