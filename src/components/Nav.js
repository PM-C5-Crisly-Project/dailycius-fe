import React from "react";
import "./styles/nav.scss";
import logo from "../assets/logo.png";
import car from "../assets/car.png";
import avatar from "../assets/avatar.png";
import search from "../assets/search.png";

function Nav() {
  return (
    <div>
      <div className="header">
        <img className="header__img" src={logo} alt="logo" />
        <div className="header__menu">
          <nav className="header__options">
            <ul className="header__options--ul">
              <li>
                <a href="#">
                  <img src={search} />
                </a>
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
}

export default Nav;
