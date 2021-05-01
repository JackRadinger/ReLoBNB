import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignUp.css'

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      console.log(firstName, lastName, email, username, password)
      return dispatch(sessionActions.signup({ firstName, lastName, email, username, password }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
      <div className='sign-up-page'>
        <div className='form__container'>
            <form onSubmit={handleSubmit} className='login-form'>
            <ul>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
            <div className='first-name-input form-input'>
                <label>
                    First Name
                </label>
                <input
                    className='first-name-input form-input'
                    type="text"
                    value={firstName}
                    placeholder='First Name'
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                />
            </div>
            <div className='last-name-input form-input'>
                <label>
                    Last Name
                </label>
                <input
                    className='last-name-input form-input'
                    type="text"
                    value={lastName}
                    placeholder='Last Name'
                    onChange={(e) => setLastName(e.target.value)}
                    required
                />
            </div>
            <div className='email-input form-input'>
                <label>
                    Email
                </label>
            </div>
            <div className='form-input'>
                <input
                    className='email-input form-input'
                    type="text"
                    value={email}
                    placeholder='Email'
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div className='username-input form-input'>
                <label>
                    Username
                    <input
                    className='username-input form-input'
                    type="text"
                    value={username}
                    placeholder='Username'
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    />
                </label>
            </div>
            <div  className='form-input'>
                <label>
                    Password
                    <input
                    className='form-input'
                    type="password"
                    value={password}
                    placeholder='Password'
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    />
                </label>
            </div>
            <div className='form-input'>
                <label>
                    Confirm Password
                    <input
                    className='form-input'
                    type="password"
                    value={confirmPassword}
                    placeholder='Confirm Password'
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    />
                </label>
            </div>
            <button className='submit-sign-up form-input' type="submit">Sign Up</button>
            </form>
        </div>
      </div>
  );
}

export default SignupFormPage;
