import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import ImageHeader from '../ImageHeader/index';
import FilterSearch from '../FilterSearch/index';
import Spots from '../Spots/index';
import { useDispatch, useSelector } from 'react-redux';

function HomePage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);

  if (!sessionUser) return (
    <Redirect to="/login" />
  );



  return (
      <div className='home__container'>
          <ImageHeader />
          <FilterSearch />
          <Spots />
      </div>
  );
}

export default HomePage;
