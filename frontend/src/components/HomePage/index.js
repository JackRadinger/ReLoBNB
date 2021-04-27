import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import ImageHeader from '../ImageHeader/index';
import FilterSearch from '../FilterSearch/index';
import Spots from '../Spots/index';
import { useDispatch, useSelector } from 'react-redux';
import * as spotReducer from '../../store/spot';


function HomePage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const spots = useSelector(state => state.spots.allSpots)
  // const spots = useSelector(state => {
  //   // return state.spots.map(spotId => state.spot[spotId]);
  //   console.log('state', state.spots)
  //   // console.log('array', Array.from(state.spots))
  // })

  useEffect(() => {
    dispatch(spotReducer.getSpots())
    dispatch(spotReducer.getImages())
  }, [dispatch])

  if (!sessionUser) return (
    <Redirect to="/login" />
  );

  if(!spots){
    return null
  }


  return (
      <div className='home__container'>
          <ImageHeader />
          <FilterSearch />
          {spots.map((spot) => {
            return (
              <div key={spot.id}>
                <Spots spot={spot}/>
              </div>
            )
          })}
      </div>
  );
}

export default HomePage;
