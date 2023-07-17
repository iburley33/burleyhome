import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./threeframecss.css";
import image1 from '../../assets/imgs/1.jpg';
import image2 from '../../assets/imgs/2.jpg';
import image3 from '../../assets/imgs/3.jpg';
import image4 from '../../assets/imgs/4.jpg';
import image5 from '../../assets/imgs/5.jpg';
import image6 from '../../assets/imgs/6.jpg';


export default function ThreeFrame() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,

  };
  return (
    <Slider {...settings}>
      <div className="item">
        <img alt="" src={image1}></img>
      </div>
      <div className="item">
        <img alt="" src={image2}></img>
      </div>
      <div className="item">
        <img alt="" src={image3}></img>
      </div>
      <div className="item">
        <img alt="" src={image4}></img>
      </div>
      <div className="item">
        <img alt="" src={image5}></img>
      </div>
      <div className="item">
        <img alt="" src={image6}></img>
      </div>

    </Slider>
  );
}