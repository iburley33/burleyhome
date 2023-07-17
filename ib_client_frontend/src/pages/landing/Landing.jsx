import React from 'react';
import "./landingcss.css";
import TopCard from '../../components/topcard/TopCard';
import LeftCard from '../../components/leftcard/LeftCard';
import DarkCard from '../../components/darkcard/DarkCard';
import placeholder from '../../assets/imgs/burley-home.webp';
import Bottomcard from '../../components/bottomcard/BottomCard';



export default function Landing() {

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
      <div>
        <Bottomcard image={placeholder} detail={'Browse our custom designs to find inspiration for your homes new look'} title={'Welcome Home'} link={'/gallery'} />
      </div>

    </div>

  );
}