import React from 'react';
import "./landingcss.css";
import TopCard from '../../components/topcard/TopCard';
import LeftCard from '../../components/leftcard/LeftCard';
import DarkCard from '../../components/darkcard/DarkCard';
import placeholder from '../../assets/imgs/burley-home.webp';
import Bottomcard from '../../components/bottomcard/BottomCard';
import photo1 from '../../assets/imgs/burley-home.webp';
import photo2 from '../../assets/imgs/portrait-PH.jpeg';


export default function Landing() {
  const imgArray = [{
    photo: photo1,
    message: 'landscape',
  },
  {
    photo: photo2,
    message: 'portrait',
  },
  {
    photo: photo1,
    message: 'landscape',
  },
  {
    photo: photo2,
    message: 'portrait',
  },
  {
    photo: photo1,
    message: 'landscape',
  },
  {
    photo: photo2,
    message: 'portrait',
  },
  ];
  return (
    <div>
      <div>
      <LeftCard image={placeholder} title={'GALLERY'} detail={'Our favorite summer holiday and how to style for it.'} description={'Styling Inspiration for the Fouth of July'}
      link={'/gallery'} />
      </div>
      <div>
      <TopCard image={placeholder} title={'GALLERY'} detail={'Our favorite summer holiday and how to style for it.'} description={'Styling Inspiration for the Fouth of July'}
      link={'/gallery'} />
      </div>
      <div>
      <DarkCard title={'Shop Burley Home'} detail={'Explore our brand collaborations. Everything from sofas to scents'} />
      </div>
      {imgArray.map((image) => {
        return <Bottomcard image={image.photo}/>
      })}
     
    </div>

  );
}