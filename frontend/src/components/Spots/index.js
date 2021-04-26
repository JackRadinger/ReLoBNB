import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function Spots() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);





  return (
      <div className='spot__container'>
          <h1>Spots</h1>
      </div>
  );
}

export default Spots;
