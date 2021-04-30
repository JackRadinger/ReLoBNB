import React from 'react';
import { useSelector } from 'react-redux';
import "./ImageHeader.css";


function ImageHeader() {
  const spots = useSelector(state => state.spots.allSpots);

  const carouselImages = [];

  const getRandomImages = (spots) => {
    for(let i = 0; i < 5; i++) {
      // let num = Math.floor(Math.random() * spots.length)
      let num = Math.floor(Math.random() * 9)
      let num2 = Math.floor(Math.random() * spots[num].Images.length)
      carouselImages.push(spots[num].Images[num2].url)
    }
  }

  getRandomImages(spots)

  return (
      <div className='image-header__container'>
        <div className='image-header-1'>
          <img className='image-header-image' alt="" src={carouselImages[0]} />
        </div>
        <div className='image-header-2'>
          <img className='image-header-image image-header-2' alt="" src={carouselImages[1]} />
        </div>
        <div className='image-header-3'>
          <img className='image-header-image' alt="" src={carouselImages[2]} />
        </div>
        <div className='image-header-4'>
          <img className='image-header-image' alt="" src={carouselImages[3]} />
        </div>
        <div className='image-header-5'>
          <img className='image-header-image' alt="" src={carouselImages[4]} />
        </div>
      </div>
  );
}

export default ImageHeader;
