import React from "react";
import { Link } from "react-router-dom";

import './styles/notFound.scss';

const Error404 = () => (
  <div className='notfound__container '>
    <h2>La página que estas buscando, no existe</h2>
    <div className='notfound__button--container'>
      <button>
        <Link to='/' className='link'>Regresar</Link>
      </button>
    </div>
  </div>
);
export default Error404;
