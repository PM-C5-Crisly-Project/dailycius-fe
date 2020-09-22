import React from 'react';
import './styles/home.scss';
import chefImg from '../assets/home/chef.png'
import batidorHero from '../assets/home/batidor-hero.png'
import carouselImg from '../assets/home/carousel-images.png'
import imageCard from '../assets/home/imageCard.png'
import banner from '../assets/home/banner.png'

function Home() {

return <>
	<section className="home-hero">
		<img className="hero__chef" src={chefImg} alt="chef-hero" />
    
			<section className="card-input">
				<div className="hero__card">
					<img className="hero__image" src={batidorHero} alt="batidor-hero" />
					<div className="hero__text">
						<p className="hero_questions">
						What do you want to eat?</p>
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
			<div className="carousel">
				<button className="arrow arrow-left" aria-label="backward button"></button>
					<div className="window">
						<ul className="project-container">
							<li className="project1-container">
								<button className="project1 project" >
									<img src={carouselImg} className="project-img" alt="Mexican food"/>
								</button>
								<p className="project__text">
									Mexican food
								</p>
							</li>

						</ul>

					</div>
				<button className="arrow arrow-right" aria-label="forward button"></button>
			</div>

			<section className="main__directions-title">
				<h3>Today's Favorites</h3>
			</section>

			<div className="foods">
				<div className="cards">
					<img className="cards__img" src={imageCard} alt="breast" />
					<p className="cards__title">
						Semi-Homemade Meals are Just a Smart Idea
					</p>
					{/* <form className="cards__stars">
						<p className="clasificacion">
							<input id="star1" type="star" name="star" value="5" />
							<label htmlFor="star1">★</label>
							<input id="star2" type="star" name="star" value="4" />
							<label htmlFor="star2">★</label>
							<input id="star3" type="star" name="star" value="3" />
							<label htmlFor="star3">★</label>
							<input id="star4" type="star" name="star" value="2" />
							<label htmlFor="star4">★</label>
							<input id="star5" type="star" name="star" value="1" />
							<label htmlFor="star5">★</label>
						</p>
					</form> */}
				</div>                
			</div>

    </section>

    <section className="banner">
            <img src={banner} alt="banner" />
						<p className="banner__text">Seasonals
                special´s</p>        
    </section>

    <section className="foods">
			<div className="cards">
            <img className="cards__img" src={imageCard} alt="breast" />
            <p className="cards__title">Semi-Homemade Meals are Just a Smart Idea</p>
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
    </section>

	</>
}

export default Home;