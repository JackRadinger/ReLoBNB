import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import * as spotReducer from '../../store/spot';
import './spots.css';

function Spots({spot}) {

  return (
      <div className='spot__container'>
        <Link to={`/spot/${spot.id}`} spot={spot}>
            <h3 value={spot.id}>{spot.city}</h3>
            <div>${spot.cost} / Day</div>
            {spot.Images.map(image => {
              return (
                <div key={spot.id + image.id}>
                  <img src={image.url} className='image' alt="Didn't work huh? Looks like AWS doesn't want you to view this."/>
                </div>
              )
            })}
            <div>
              <p>{spot.description}</p>
            </div>
          </Link>
      </div>
  );
}

export default Spots;
