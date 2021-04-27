import React, { useEffect, useState } from 'react';
import { NavLink, Redirect } from 'react-router-dom';

function Spots(spot) {
  spot = spot.spot

  const handleClick = (e) => {
    const spotId = e.target.attributes.value;
    console.log(spotId)
    return (
      <Redirect to="/"/>
    )
  }

  const getImages = async () => {
    const response = await fetch('https://relobnb.s3.us-east-2.amazonaws.com/1/airbnb.jpg')
    console.log(response)
  }
  getImages();

  return (
      <div className='spot__container'>
          <h3 value={spot.id} onClick={handleClick}>{spot.city}</h3>
          <div>${spot.cost} / Day</div>
          <div>
            <p>{spot.description}</p>
          </div>
      </div>
  );
}

export default Spots;
