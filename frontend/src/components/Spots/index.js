import React, { useEffect, useState } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as spotReducer from '../../store/spot';
import './spots.css';

function Spots(spot) {
  const dispatch = useDispatch();
  spot = spot.spot

  // useEffect(() => {
  //   dispatch(spotReducer.getImages(spot.id))
  // }, [dispatch])
  console.log(spot.Images)


  const handleClick = (e) => {
    const spotId = e.target.attributes.value;
    console.log(spotId)
    return (
      <Redirect to="/"/>
    )
  }


  return (
      <div className='spot__container'>
          <h3 value={spot.id} onClick={handleClick}>{spot.city}</h3>
          <div>${spot.cost} / Day</div>
          {spot.Images.map(image => {
            return (
              <div key={spot.id + image.id}>
                <img src={image.url} className='image' />
              </div>
            )
          })}
          <div>
            <p>{spot.description}</p>
          </div>
      </div>
  );
}

export default Spots;
