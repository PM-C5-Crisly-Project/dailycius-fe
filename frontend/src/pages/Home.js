import React from 'react';
import photo from '../assets/image-hero.png'

function Home() {

return <>

	<div className="hero">    	

		<div className="hero__panel">
			<h2>Oven Roasted Chicken Breasts </h2>
			<h3>suburban soap box</h3>
			<div className='hero__panel--data'>	
				<div className="hero__buttons-data">
					<ul>
						<li className='hero__buttons-data--qty'>4</li>
						<li className='hero__buttons-data--desc'>Ingredients</li>
					</ul>
				</div>
				<div className="hero__buttons-data">
					<ul>
						<li className='hero__buttons-data--qty'>300</li>
						<li className='hero__buttons-data--desc'>Calories</li>
					</ul>
				</div>
				<div className="hero__buttons-data">
					<ul>
						<li className='hero__buttons-data--qty'>33</li>
						<li className='hero__buttons-data--desc'>Minutes</li>
					</ul>
				</div>
			</div>
				<div className="hero__button">
					<button className="hero__button--add">Add to cart</button>
				</div>
				<div className='hero__nutritional--container'>
					<div class="hero__receipe-details--container">
						<div class="hero__receipe-details--inner">
							<ul class="hero__receipe-details--data">
								<li>200</li>
								<li>calories</li>
							</ul>
						</div>
					</div>
					
					<div class="hero__receipe-details--container">
						<div class="hero__receipe-details--inner">
							<ul class="hero__receipe-details--data">
								<li>200</li>
								<li>calories</li>
							</ul>
						</div>
					</div>
					
					<div class="hero__receipe-details--container">
						<div class="hero__receipe-details--inner">
							<ul class="hero__receipe-details--data">
								<li>200</li>
								<li>calories</li>
							</ul>
						</div>
					</div>
					
					<div class="hero__receipe-details--container">
						<div class="hero__receipe-details--inner">
							<ul class="hero__receipe-details--data">
								<li>200</li>
								<li>calories</li>
							</ul>
						</div>
					</div>
					
					<div class="hero__receipe-details--container">
						<div class="hero__receipe-details--inner">
							<ul class="hero__receipe-details--data">
								<li>200</li>
								<li>calories</li>
							</ul>
						</div>
					</div>
					
					<div class="hero__receipe-details--container">
						<div class="hero__receipe-details--inner">
							<ul class="hero__receipe-details--data">
								<li>200</li>
								<li>calories</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		<div className="hero__image">
			<img src={photo} alt='chicken receipe' />
		</div>
	</div>
		{/* INGREDIENTS  */}

		<div className='ingre'>
			<div className='ingre__tittle'>
				<h2>Ingredients</h2>
				 <p>4 Serv | Metric Standard</p>
			</div>

			<div className='ingre__list'>
				<ul>
						<li>
							<div className='ingre__list--plus'>
								<div>&#10010;</div>
							</div>
							<p>
							2 chicken breasts (bone-in skin-on)
							</p>
						</li>
						<li>
							<div className='ingre__list--plus'>
								<div>&#10010;</div>
							</div>
							<p>
							2 tablespoons olive oil
							</p>
						</li>
						<li>
							<div className='ingre__list--plus'>
								<div>&#10010;</div>
							</div>
							<p>
							2 tablespoons kosher salt
							</p>
						</li>
						<li>
							<div className='ingre__list--plus'>
								<div>&#10010;</div>
							</div>
							<p>
							2 tablespoons fresh ground pepper
							</p>
						</li>			
					</ul>						
			</div>
		</div>
	
</>
}

export default Home;