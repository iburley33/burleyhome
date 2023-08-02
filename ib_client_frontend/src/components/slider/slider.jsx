import './slidercss.css';
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import image1 from '../../assets/imgs/1.jpg';
import image2 from '../../assets/imgs/2.jpg';
import image3 from '../../assets/imgs/3.jpg';
import image4 from '../../assets/imgs/4.jpg';
import image5 from '../../assets/imgs/5.jpg';
import image6 from '../../assets/imgs/1.jpg';

function Slider() {

  const [ width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  }, []);
  
  const images  = [image1, image2, image3, image4, image5, image6];

  return (
    <div className="App">
      <motion.div ref={carousel} className='carousel' whileTap={{cursor: 'grabbing'}}>
        <motion.div 
        drag='x' 
        dragConstraints={{ right:0, left: -width }}
        className='inner-carousel'>
          {images.map((image) => {
            return (
              <motion.div className='item' key={image}>
                <img src={image} alt="" key={image}/>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}



export default Slider;
