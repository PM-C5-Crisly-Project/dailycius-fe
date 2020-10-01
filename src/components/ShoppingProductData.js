import React from 'react'

const ShoppingProductData = () => {
  return (
    <div className='shoppinCart__products--data'>
      <ul className='shoppinCart__products--dataL'>
        <li className='data__shoppingDetails'>
          <img src='https://res.cloudinary.com/djcsouoma/image/upload/v1600200830/receipes/rec-1/glliD45sT2YTxTYtGrHX_0S9A0257_ljywnk.jpg' alt='recipe photo'/> 
          <p> Semi-Homemade Meals are Just a Smart Idea </p>
        </li>
        </ul> 
        <ul  className='shoppinCart__products--dataR'>
          <li className='data__qty'>
            <button>-</button>
            
            <div>
              2
            </div>

            <button>+</button>
          </li>
        <li className='data__price'>
        $  250.56
        </li>
        <li className='data__total'>
          $ 250.56
        </li>
      </ul>
    </div>
  )
}

export default ShoppingProductData;