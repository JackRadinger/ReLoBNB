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
      images.push(image)
    }
  }

  return (
      <div>
        <a className='spot-link' href={`/spot/${spot.id}`} spot={spot}>
          <div className='spot__container'>
              <h3 className='spot-title' value={spot.id}>{spot.city}</h3>
              <div className='spot-cost'>${spot.cost} / Day</div>
              {images.map((image, i) => {
                return (
                  <div className={`image${i}`} key={spot.id + image.id}>
                    <img src={image.url} className='image' alt="Didn't work huh? Looks like AWS doesn't want you to view this."/>
                  </div>
                )
              })}
              <div className='spot-description'>
                <p>{spot.description}</p>
              </div>
            </div>
          </a>
      </div>
  );
}

export default Spots;
