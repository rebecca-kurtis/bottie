import React from 'react';
import './Cart_Item.css';

interface CartItemProps {
  cartItem: {
    product_name: string;
    product_drawing: string;
    cart_item: number;
    product_price: number;
    user_name: string;
    rname:string;
    rcity:string;
    raddress:string;
    rstate: string;
    rpostal_code:string;
  };

}

export const CartItem: React.FC<CartItemProps> = ({cartItem}) => {
  const price = (cartItem.product_price/100).toString();
  return (
    <div className='row align-items-start'>
      <h4>My Cart</h4>
      <hr />
      <div className='cart-image col'>
        <img src={cartItem.product_drawing} />
      </div>
    
      <div className='product_details col'>
        <p>{cartItem?.product_name}</p>
        <p>${price}</p>
      </div>

      <div className='recipient_details col'>
        <h4>Recipient</h4>
        <p>Name: {cartItem?.rname}</p>
        <p>Address:<br />
        {cartItem?.raddress}<br />
        {cartItem?.rcity}, {cartItem?.rstate} <br />
        {cartItem?.rpostal_code}
        </p>
      </div>
    </div>
  )
}