import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function ImageHeader() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);





  return (
      <div className='image__container'>
          <h1>Image Header</h1>
      </div>
  );
}

export default ImageHeader;
