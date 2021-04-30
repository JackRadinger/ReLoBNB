import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import logo from '../../resources/ReLoBNB-Logo.png'

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton className='profile' user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <div>
            <NavLink to="/login">Log In</NavLink>
        </div>
        <div>
            <NavLink to="/signup">Sign Up</NavLink>
        </div>
      </>
    );
  }

  return (
    <div className='nav-container'>
      <div className='home'>
        {/* <Logo /> */}
        <NavLink exact to="/">
          <img src={logo} alt='ReLoBNB Logo' className='logo' />
        </NavLink>
        {/* {isLoaded && sessionLinks} */}
      </div>
      <div className='profile'>
        {isLoaded && sessionLinks}
      </div>
    </div>
  );
}

export default Navigation;
