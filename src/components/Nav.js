import React from "react";
import { Link } from "react-router-dom";
import "./styles/nav.scss";
import logo from "../assets/logo.png";
import car from "../assets/car.png";
import avatar from "../assets/avatar.png";
import search from "../assets/search.png";

const Nav = () => (
  <div className="header">
    <div className="header__container">
      <Link to="/">
        <img className="header__img" src={logo} alt="logo" />
      </Link>
      <div className="header__menu">
        <nav className="header__options">
          <ul className="header__options--ul">
            <li>
              <Link to="/home">
                <img src={search} />
              </Link>
            </li>
            <li>
              <a href="#">
                <img src={car} />
              </a>
            </li>
            <li>
              <a href="/login">
                <img src={avatar} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
);

export default Nav;
