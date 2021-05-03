import React from 'react';
// import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import * as spotReducer from '../../store/spot';
import './spots.css';

function Spots({spot}) {

  const images = []
  if(spot.Images.length) {
    for(let i = 0; i < 3; i++) {
      let image = spot.Images[i]
      if(image){
        images.push(image)
      }
    }
  }

  return (
      <>
        <a className='spot-link' href={`/spot/${spot.id}`} spot={spot}>
          {/* <div className='spot__container'> */}
            <div className='spot-title'>
              <h3 value={spot.id}>{spot.city}</h3>
            </div>
              <div className='spot-cost'>${spot.cost} / Day</div>
              {images.map((image, i) => {
                return (
                  <div className={`image${i}`} key={spot.id + image.id}>
                    <img src={image.url} className='image' alt="Didn't work huh? Looks like AWS doesn't want you to view this."/>
                  </div>
                )
              })}
              <div className='spot-description'>
                <label className='description-title'>Description</label>
                <p>{spot.description}</p>
              </div>
            {/* </div> */}
          </a>
      </>
  );
}

export default Spots;
