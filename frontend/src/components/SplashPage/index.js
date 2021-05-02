import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './SplashPage.css';

function SplashPage() {


  return (
    <div className='splash-page'>
        <div className='form__container'>
            <div className='Logo-wrapper'>
            <div className='logo'>
                ReLoBNB
            </div>
            <div className='slogan'>
                Relocation at Low Cost
            </div>
            </div>
        <div>

        </div>
      </div>
    </div>
  );
}

export default SplashPage;
