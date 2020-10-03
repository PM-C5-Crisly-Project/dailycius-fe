import React from "react";
import { Link } from "react-router-dom";

const CarrouselItem = ({ id, name, photos }) => (
  <>
    <Link to={"/product/" + id}>
      <li className="project1-container">
        <button className="project1 project">
          <img src={photos} className="project-img" alt={name} />
        </button>
        <p className="project__text">{name}</p>
      </li>
    </Link>
  </>
);

export default CarrouselItem;
