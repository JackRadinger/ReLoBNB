import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <>
      <button onClick={openMenu} className='profile-btn'>
          Profile
        <i className="fas fa-user-circle" />
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
          <div className='username'>
            <label>
              Username:
            </label>
            <span className='username'>{user.username}</span>
          </div>
          <div className='user-email'>
            <label>
              Email:
              <span className='user-email'>{user.email}</span>
            </label>
          </div>
          <span>
            <button onClick={logout}>Log Out</button>
          </span>
        </ul>
      )}
    </>
  );
}

export default ProfileButton;
