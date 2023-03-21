import click1 from '../../images/click/click1.png'
import click2 from '../../images/click/click2.png'
import click3 from '../../images/click/click3.png'
import click4 from '../../images/click/click4.png'
import click5 from '../../images/click/click5.png'

import React from 'react'
import { useEffect, useState } from 'react'

import './mainClickImages.css'
const MainClickImages = () => {

  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    click1, click2, click3, click4, click5
  ]
  const [currentClassName, setCurrentClassName] = useState("defaultMainImage")

  useEffect(() => {
    const initialTimeout = setTimeout(() => {
      setCurrentClassName('defaultMainImageScaled');
    }, 100);

    return () => clearTimeout(initialTimeout);
  }, []);
  
  useEffect(() => {
    const timeout1 = setTimeout(() => {
      setCurrentClassName("defaultMainImageScaled")
      setCurrentImage((currentImage + 1) % images.length);
    }, 5000);

    const timeout2 = setTimeout(() => {
      setCurrentClassName("defaultMainImage")
    }, 4700);

    return () => { clearTimeout(timeout1); clearTimeout(timeout2) };
  }, [currentImage]);

  return (
    <div className="mainImages">
      <img src={images[currentImage]} alt="" className={`${currentClassName}`} />
    </div>
  );
}

export default MainClickImages