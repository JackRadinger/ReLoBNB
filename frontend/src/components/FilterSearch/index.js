import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as spotReducer from '../../store/spot';

function FilterSearch({ setFilter, setSearchTerm, setNewSpots, searchTerm, newSpots}) {
  const dispatch = useDispatch();
  const spots = useSelector(state => state.spots.allSpots);

  const handleClick = () => {
    dispatch(spotReducer.sortSpots())
    setFilter('filtered')
  }

  useEffect(()=> {

    let newSpotsArr = []

    if(searchTerm !== ''){
      for(let i = 0; i < spots.length; i++) {
        let spot = spots[i];
        if(spot.city.includes(searchTerm)) {
          newSpotsArr.push(spot)
        }
      }
      setNewSpots(newSpotsArr)
    }
  },[searchTerm, setNewSpots, spots])



  return (
      <div className='filter__container'>
          <div>
            <div>Filter</div>
            <div>
              Search
              <input onChange={(e) => setSearchTerm(e.target.value)}></input>
            </div>
            <button onClick={handleClick} >Price</button>
          </div>
      </div>
  );
}

export default FilterSearch;
