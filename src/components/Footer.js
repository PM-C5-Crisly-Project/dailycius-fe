import React from "react";
import footerLogo from '../static/Dailycius-logo/SVG/dailycius-logo-Horz-gray50.svg'
import {Link} from 'react-router-dom'

import './styles/footer.scss'

const Footer = () => (
  <div className='footer'>
    <div className='footer__container'> 
      <Link to='/'>
        <img src={footerLogo} alt='Dailycius Footer Logo'></img>
      </Link>
      <p> Dailycius all rights reserved. </p>
    </div>
  </div>
);

export default Footer;
