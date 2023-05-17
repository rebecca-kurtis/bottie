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
    
      <div key={cartItem.cart_item} className='row align-items-start'>
              <hr />
      <div className='cart-image col'>
      <div className='row align-items-start'>
          <div className='cart-image col'>
          <img src={cartItem.product_drawing} />
        </div>
        </div>
      </div>
        <div className='product_details col'>
          <p className='cart-description'>{cartItem?.product_name}<br/>
         ${price}</p>
        </div>

        <div className='recipient_details col'>
          <h5>Recipient</h5>
          <p className='cart-description'><b>Name:</b><br/>
          {cartItem?.rname}</p>
          <p className='cart-description'><b>Address:</b><br />
          {cartItem?.raddress}<br />
          {cartItem?.rcity}, {cartItem?.rstate} <br />
          {cartItem?.rpostal_code}
          </p>
        </div>
      </div>
  )
}