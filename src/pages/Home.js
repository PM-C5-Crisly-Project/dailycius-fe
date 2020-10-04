import React from "react";
import { connect } from "react-redux";
import "./styles/home.scss";
import chefImg from "../assets/home/chef.png";
import batidorHero from "../assets/home/batidor-hero.png";
import banner from "../assets/home/banner.png";
import CarrouselItem from "../components/CarrouselItem";
import Card from "../components/Card";
import FoodSection from "../components/FoodSection";

function Home({ recipes }) {
  const [query, setQuery] = React.useState("");
  const filteredRecipes = recipes.filter((recipe) => {
    return recipe.name.toLowerCase().includes(query.toLowerCase());
  });

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
            <input
              type="text"
              placeholder="Looking for something special?"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
              }}
            />
          </div>
        </section>
      </section>

      <section className="main_section">
        {/* CARRUSEL */}
        <div className="carousel">
          
          <div className="window">
            <ul className="project-container">
              {filteredRecipes.map((item) => (
                <CarrouselItem key={item.name} {...item} />
              ))}
            </ul>
          </div>
          
        </div>
        {/* END OF CARRUSEL */}
      </section>
      <FoodSection title="Today's Favorites">
        {recipes.map((item) => (
          <Card key={item.name} {...item} />
        ))}
      </FoodSection>

      <section className="banner">
        <img src={banner} alt="banner" />
        <p className="banner__text">Seasonals special´s</p>
      </section>

      {/* <FoodSection>
        {recipes.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </FoodSection> */}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,
  };
};

export default connect(mapStateToProps, null)(Home);
