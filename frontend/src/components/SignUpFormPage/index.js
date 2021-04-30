import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";

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
      <div className='form__container'>
        <form onSubmit={handleSubmit} className='login-form'>
        <ul>
            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
        <div>
            <label>
                First Name
            </label>
            <input
                className='first-name-input'
                type="text"
                value={firstName}
                placeholder='First Name'
                onChange={(e) => setFirstName(e.target.value)}
                required
            />
        </div>
        <div>
            <label>
                Last Name
            </label>
            <input
                className='last-name-input'
                type="text"
                value={lastName}
                placeholder='Last Name'
                onChange={(e) => setLastName(e.target.value)}
                required
            />
        </div>
        <div>
            <label>
                Email
            </label>
        </div>
        <div>
            <input
                className='email-input'
                type="text"
                value={email}
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)}
                required
            />
        </div>
        <div>
            <label>
                Username
                <input
                type="text"
                value={username}
                placeholder='Username'
                onChange={(e) => setUsername(e.target.value)}
                required
                />
            </label>
        </div>
        <div>
            <label>
                Password
                <input
                type="password"
                value={password}
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
                required
                />
            </label>
        </div>
        <div>
            <label>
                Confirm Password
                <input
                type="password"
                value={confirmPassword}
                placeholder='Confirm Password'
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                />
            </label>
        </div>
        <button type="submit">Sign Up</button>
        </form>
      </div>
  );
}

export default SignupFormPage;
