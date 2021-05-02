import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './LoginForm.css';
import pic from '../../resources/ReLoBNB-Remove-Background.png'

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return (
    <Redirect to="/home" />
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  }

  const handleDemo = (e) => {
    e.preventDefault();
    const credential = 'demo@user.io';
    const password = 'password';
    console.log(credential, password)
    return dispatch(sessionActions.login({ credential, password }))
  }

  return (
    <div className='login-page'>
      <div className='form__container'>
        <div className='Logo-wrapper'>
          <div className='logo'>
            ReLoBNB
          </div>
          <div className='slogan'>
            Relocation at Low Cost
          </div>
        </div>
        <form onSubmit={handleSubmit} className='login-form'>
        <ul>
            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
        <div className='user__container'>
            <label className='User-tag'>
                Username or Email
                <input
                type="text"
                value={credential}
                onChange={(e) => setCredential(e.target.value)}
                required
                />
            </label>
        </div>
        <div className='password__container'>
            <label className='password-tag'>
                Password
                <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
            </label>
        </div>
        <div className='demo-user'>
          <button className='demo-user-btn' type='submit' onClick={handleDemo}>Demo User</button>
        </div>
        <div className='submit__container'>
            <button type="submit" className='submit-btn'>Log In</button>
        </div>
        </form>
      </div>
    </div>
  );
}

export default LoginFormPage;
