import React from 'react'

const ShoppingCheckout = () => {
  return (
    <div>
      
        <p className='shoppinCart__checkout--title'>Order Summary</p>
        <ul className='shoppinCart__checkout--items'>
          <li>
            <p>
            items 2
            </p>
            <p>
              $ 450.50
            </p>
          </li>
          <li>
            <p>
            Taxes
            </p>
            <p>
              $ 45.5
            </p>
          </li>
          <li>
            <p>
            Shipping
            </p>
            <p>
              $ 15
            </p>
          </li>
          <li className='shoppinCart__checkout--items-total'>
            <p>
            Total
            </p>
            <p>
              $ 510.50
            </p>
          </li>
          <button className='shoppinCart__checkout--items-button'>
            checkout
          </button>
        </ul>
      
    </div>
  )
}

export default ShoppingCheckout;
