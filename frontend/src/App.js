import React from "react";
import './App.scss'
import foto from '../src/static/Dailycius-logo/SVG/dailycius-logo-app.svg';
import Nav from './components/Nav'

const App = () => (
  <div>
    <Nav />
    <h1 className='wow' >Hello, react</h1>
    <img className='wow-img' src={foto} alt="here is an fan img"/>
  </div>
);

export default App;
