import React from "react";
import { connect } from "react-redux";
import "./styles/home.scss";
import chefImg from "../assets/home/chef.png";
import batidorHero from "../assets/home/batidor-hero.png";
import carouselImg from "../assets/home/carousel-images.png";
import banner from "../assets/home/banner.png";
import Card from "../components/Card";
import FoodSection from "../components/FoodSection";

function Home({ recipes }) {
  return (
    <>
      <section className="home-hero">
        <img className="hero__chef" src={chefImg} alt="chef-hero" />

        <section className="card-input">
          <div className="hero__card">
            <img className="hero__image" src={batidorHero} alt="batidor-hero" />
            <div className="hero__text">
              <p className="hero_questions">What do you want to eat?</p>
              <p>Just buy and cook!</p>
            </div>
          </div>

          <div className="hero__input-container">
            <span className="hero__search-icon"></span>
            <input type="text" placeholder="Looking for something special?" />
          </div>
        </section>
      </section>

      <section className="main_section">
        {/* CARRUSEL */}
        <div className="carousel">
          <button
            className="arrow arrow-left"
            aria-label="backward button"
          ></button>
          <div className="window">
            <ul className="project-container">
              <li className="project1-container">
                <button className="project1 project">
                  <img
                    src={carouselImg}
                    className="project-img"
                    alt="Mexican food"
                  />
                </button>
                <p className="project__text">Mexican food</p>
              </li>
            </ul>
          </div>
          <button
            className="arrow arrow-right"
            aria-label="forward button"
          ></button>
        </div>
        {/* END OF CARRUSEL */}
      </section>
      <FoodSection title="Today's Favorites">
        {recipes.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </FoodSection>

      <section className="banner">
        <img src={banner} alt="banner" />
        <p className="banner__text">Seasonals special´s</p>
      </section>

      <FoodSection>
        {recipes.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </FoodSection>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,
  };
};

export default connect(mapStateToProps, null)(Home);
