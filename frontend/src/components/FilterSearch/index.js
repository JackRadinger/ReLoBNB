import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function FilterSearch() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);





  return (
      <div className='filter__container'>
          <h1>Filter</h1>
      </div>
  );
}

export default FilterSearch;
