import React, { useState } from 'react';
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
