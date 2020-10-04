import React from "react";
import validator from 'validator';
import { Link } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { removeError, setError } from "../actions/ui";
import { useDispatch, useSelector } from "react-redux";
import { startRegisterWithEmailPasswordName } from "../actions/auth";

import "./styles/register.scss";

function Register() {

  const dispatch = useDispatch();

  const {msgError} = useSelector(state => state.ui)

  const [ formValues, handleInputChange ] = useForm({
    name: 'Test User',
    email: 'prueba@gmail.com',
    password: '123456',
    password2: '123456'
  })

  const {name, email, password, password2} = formValues;

  const handleRegister = (e) => {
    e.preventDefault()

    if (isFormValid() ) {
      dispatch(startRegisterWithEmailPasswordName(email, password, name))
    }

  }

  const isFormValid = () => {
    if (name.trim().length === 0 ){
      dispatch(setError('Name required'))
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError('Invalid email'))
      return false;
    } else if (password !== password2 || password.length < 6 ) {
      dispatch(setError('Password should be at least 6 characters and match each other'))
      return false;
    }
    dispatch(removeError())
    return true
  }

  return (
    <>
      <section className="register">
        <section className="register__container">
          <h2>Sign-Up</h2>
          <form className="register__container--form" onSubmit={handleRegister}>
            
            {
              (msgError)&&
                <div className='auth__alert-error'>
                  {msgError}
                </div>
            }
            
            <label htmlFor="name">Name</label>
            <input
              name="name"
              className="input"
              type="text"
              placeholder="Your name"
              value={name}
              onChange={handleInputChange}
            />
            <label htmlFor="email">E-mail</label>
            <input
              name="email"
              className="input"
              type="text"
              placeholder="example@myemail.com"
              value={email}
              onChange={handleInputChange}
            />
            <label htmlFor="password">Password</label>
            <input
              name="password"
              className="input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={handleInputChange}
            />

            <label htmlFor="password2">Repeat Password</label>
            <input
              name="password2"
              className="input"
              type="password"
              placeholder="Password"
              value={password2}
              onChange={handleInputChange}
            />

            <div className="button__container">
              <button className="button">Sign-Up</button>
            </div>
          </form>

          
          <p className="register__container--register">
            I have an account {` `}
            <Link to="/login">Sign-In</Link>
          </p>
        </section>
      </section>
    </>
  );
}

export default Register;
