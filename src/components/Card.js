import React from "react";
import imageCard from "../assets/home/imageCard.png";

const Card = (props) => {
  const { id, name, photos } = props;
  return (
    <div className="cards">
      <img className="cards__img" src={photos} alt={name} />
      <p className="cards__title">{name}</p>
      {/* <form className="cards__stars">
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
  );
};

export default Card;
