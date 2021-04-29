import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import ImageHeader from '../ImageHeader/index';
import FilterSearch from '../FilterSearch/index';
import Spots from '../Spots/index';
import { useDispatch, useSelector } from 'react-redux';
import * as spotReducer from '../../store/spot';
import './Home.css'


function HomePage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const spots = useSelector(state => state.spots.allSpots)
  const [filter, setFilter] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [newSpots, setNewSpots] = useState()

  useEffect(() => {
    dispatch(spotReducer.getSpots())
  }, [dispatch])

  if (!sessionUser) return (
    <Redirect to="/login" />
  );

  if(!spots){
    return null
  }

  if(!newSpots) {
    setNewSpots(spots)
    return null
  }

  return (
      <div className='home__container'>
          <ImageHeader />
          <FilterSearch  filter={filter} newSpots={newSpots} searchTerm={searchTerm} setFilter={setFilter} setSearchTerm={setSearchTerm} setNewSpots={setNewSpots}/>
          {newSpots.map((spot) => {
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
