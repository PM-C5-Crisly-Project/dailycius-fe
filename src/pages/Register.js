import React from 'react';
import './styles/register.scss'

import googleIcon from '../assets/login/google.png'
import facebookIcon from '../assets/login/facebook.png'

function Register() {

    


return <>

<section className="register">
        <section className="register__container">
          <h2>Sign-Up</h2>
          <form className="register__container--form" >
            <label htmlFor='name'>
              Name
            </label>
            <input 
              name="name"
              className="input" 
              type="text" 
              placeholder="Your name"
            />
            <label htmlFor='email'>
              E-mail
            </label>
            <input 
              name="email"
              className="input" 
              type="text" 
              placeholder="example@myemail.com"
            />
            <label htmlFor='password'>
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
              Sign-Up
              </button>
            </div>
          </form>

        

          <section className="register__container--social-media">
            <div><img src={googleIcon}/> </div>
            <div><img src={facebookIcon}/> </div>
          </section>
          <p className="register__container--register">I have an account {` `}  
            <a to="/sign-in">
              Sign-In
            </a>          
          </p>
        </section>
    </section>
</>
}

export default Register;