import React from "react";
import "./styles/login.scss";

import googleIcon from "../assets/login/google.png";
import facebookIcon from "../assets/login/facebook.png";
import { Link } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { startFacebookLogin, startGoogleLogin, startLoginEmailPassword } from "../actions/auth";

function Login() {

  const dispatch = useDispatch()

  const {loading} = useSelector(state => state.ui)

  const [ formValues, handleInputChange ] = useForm({
    email: 'prueba@gmail.com',
    password: '123456'
  })

  const {email, password} = formValues;

  const handleLogin = (e) => {
    e.preventDefault();

    dispatch(startLoginEmailPassword(email, password))
  }
  
  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin())
  }
  const handleFacebookLogin = () => {
    dispatch(startFacebookLogin())
  }

  return (
    <>
      <section className="login">
        <section className="login__container">
          <h2>Sign-In</h2>
          <form className="login__container--form" onSubmit={handleLogin}>
            <label htmlFor="email">E-mail</label>
            <input
              name="email"
              className="input"
              type="text"
              placeholder="example@myemail.com"
              value={email}
              onChange={handleInputChange}
            />
            <label htmlFor="email">Password</label>
            <input
              name="password"
              className="input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={handleInputChange}
            />

            <div className="button__container">
              <button
                type="submit"
                disabled={loading}
              >Sign-In</button>
            </div>
          </form>

          <section className="login__container--social-media">
            <div 
              onClick={handleGoogleLogin}
            >
              <img src={googleIcon} />{" "}
            </div>
            <div
              onClick={handleFacebookLogin}
            >            
              <img src={facebookIcon} />{" "}
            </div>
          </section>
          <p className="login__container--register">
            New Here? {` `}
            <Link to="/register">Sign-Up</Link>
          </p>
        </section>
      </section>
    </>
  );
}

export default Login;
