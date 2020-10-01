import React from "react";
<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
import {Link} from 'react-router-dom'
//import data from '../../mock';
>>>>>>> 123e6cf578d4d9dc09c3348379b0755c6002dae8

const Card = ({id, name, photos}) => {
  
  return (
<<<<<<< HEAD
    <Link to="/product">
      <div className="cards">
        <img className="cards__img" src={photos} alt={name} />
        <p className="cards__title">{name}</p>
        {/* <form className="cards__stars">
=======
    <div className="cards">
      <Link to={'/product/' + id}>
        <img className="cards__img" src={photos} alt={name} />
        <p className="cards__title">{name}</p>
      </Link>
      {/* <form className="cards__stars">
>>>>>>> 123e6cf578d4d9dc09c3348379b0755c6002dae8
      <p className="clasificacion">
        <input id="star1" type="star" name="star" readOnly="5" />
        <label htmlFor="star1">★</label>
        <input id="star2" type="star" name="star" readOnly="4" />
        <label htmlFor="star2">★</label>
        <input id="star3" type="star" name="star" readOnly="3" />
        <label htmlFor="star3">★</label>
        <input id="star4" type="star" name="star" readOnly="2" />
        <label htmlFor="star4">★</label>
        <input id="star5" type="star" name="star" readOnly="1" />
        <label htmlFor="star5">★</label>
      </p>
    </form> */}
      </div>
    </Link>
  );
};

export default Card;
