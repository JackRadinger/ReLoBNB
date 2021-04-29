import React from 'react';
// import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function ImageHeader() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
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
  console.log(carouselImages)

  return (
      <div className='image-header__container'>
          <h1>Image Header</h1>
          <div>
            <div className='image-header-1'>
              <img alt="" src={carouselImages[0]} />
            </div>
            <div className='image-header-2'>
              <img alt="" src={carouselImages[1]} />
            </div>
            <div className='image-header-3'>
              <img alt="" src={carouselImages[2]} />
            </div>
            <div className='image-header-4'>
              <img alt="" src={carouselImages[3]} />
            </div>
            <div className='image-header-5'>
              <img alt="" src={carouselImages[4]} />
            </div>
          </div>
      </div>
  );
}

export default ImageHeader;
