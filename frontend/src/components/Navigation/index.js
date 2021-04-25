import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
// import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
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
      <div className='home-link'>
        <NavLink exact to="/">Home</NavLink>
        {/* {isLoaded && sessionLinks} */}
      </div>
      <div className='session-links'>
        {isLoaded && sessionLinks}
      </div>
    </div>
  );
}

export default Navigation;
