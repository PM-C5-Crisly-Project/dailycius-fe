import React from 'react'
import ShoppingCheckout from '../components/ShoppingCheckout';
import ShoppingProductData from '../components/ShoppingProductData';
import './styles/shoppingCart.scss'


const ShoppingCart = () => {

  const  cartFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('cart')) || []
  }

  const cartList = cartFromLocalStorage()

  console.log(cartList)



  return (
    <div className='shoppinCart__container'>
      <div className='shoppinCart__products'>
        <ul className='shoppinCart__products--header'>
          <li>Shopping Cart</li>
          <li>2 Items</li>
        </ul>
        <div className='shoppinCart__products--columnNames'>
          <ul className='shoppinCart__products--columnNamesL'>
            <li>Product Details</li>          
          </ul>

          <ul className='shoppinCart__products--columnNamesR'>          
            <li>Quantity</li>
            <li>Price</li>
            <li>Total</li>
          </ul>
        </div>
      
        <ShoppingProductData />
      
      </div>
      <div className='shoppinCart__checkout'>
        <ShoppingCheckout />
      </div>
    </div>
  )
}

export default ShoppingCart;
