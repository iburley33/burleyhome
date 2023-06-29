import React from 'react';
import "./landingcss.css"
import TopCard from '../../components/topcard/TopCard';
import LeftCard from '../../components/leftcard/LeftCard'
import Gallery from '../gallery/Gallery';
import Store from '../store/Store';
import placeholder from '../../assets/imgs/burley-home.webp'


export default function Landing() {
  return (
    <div class ='homeDiv'>
    <div class='base'>
      <LeftCard image={placeholder} title={'LIFESTYLE'} detail={'Our favorite summer holiday and how to style for it.'} description={'Styling Inspiration for the Fouth of July'}
      link={<Gallery />} />
    </div>
    <div class='base'>
      <TopCard image={placeholder} title={'LIFESTYLE'} detail={'Our favorite summer holiday and how to style for it.'} description={'Styling Inspiration for the Fouth of July'}
      link={<Store />} />
    </div>
    </div>

  );
}