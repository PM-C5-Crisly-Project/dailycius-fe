import React from 'react';
import './styles/login.scss'

import googleIcon from '../assets/login/google.png'
import facebookIcon from '../assets/login/facebook.png'

function Login() {


return <>

  <section className="login">
    <section className="login__container">
      <h2>Sign-In</h2>
      <form className="login__container--form" >
        <label htmlFor='email'>
          E-mail
        </label>
        <input 
          name="email"
          className="input" 
          type="text" 
          placeholder="example@myemail.com"
        />
        <label htmlFor='email'>
          Password
        </label>
        <input 
        name="password"
          className="input" 
          type="password" 
          placeholder="Password"
        />

        <div className="button__container">
          <button className="button">
          Sign-In
          </button>
        </div>
      </form>

      <section className="login__container--social-media">
        <div><img src={googleIcon}/> </div>
        <div><img src={facebookIcon}/> </div>
      </section>
      <p className="login__container--register">New Here? {` `}  
        <a to="/register">
          Sign-Up
        </a>          
      </p>
    </section>
  </section>
</>
}

export default Login;