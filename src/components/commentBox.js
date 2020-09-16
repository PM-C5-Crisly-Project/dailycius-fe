import React from "react";
import './styles/commentBox.scss'


function commentBox() {

  return <div className='commentBox'>
    <div className='commentBox__title'>comments</div>
    <div className='commentBox__items'>
      <span className='commentBox__items--comment'>
        <div>
          <img src='https://www.flaticon.com/svg/static/icons/svg/2922/2922510.svg' alt='profile photo' />
        </div>
        <p>nice recipe</p>
      </span>
      <span className='commentBox__items--comment'>
        <div>
          <img src='https://www.flaticon.com/svg/static/icons/svg/2922/2922510.svg' alt='profile photo' />
        </div>
        <p> A llittle complex to do, but grat to dinner with your friends.</p>
      </span>

      <div className='commentBox__input--container'>
        <input className='commentBox__input' type='text' placeholder='Add your comment'></input>
        <button className='commentBox__input--button'>
					<div>&#10010;</div>
				</button>
      </div>
    </div>
  </div>
  
}


export default commentBox;
