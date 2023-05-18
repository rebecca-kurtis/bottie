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
    <div>
      <div className='cart-item'>
   
        <img className='cart-image' src={cartItem.product_drawing} />

        <div className='product_details col'>
          <h4>{cartItem?.product_name}</h4>
          <h5>${price}</h5>
        </div>

        <div className='product_details col'>
          <h4>Recipient</h4>
          <p className='canva_body'><b>Name:</b><br/>{cartItem?.rname}</p>
          <p className='canva_body'><b>Address:</b><br />
            {cartItem?.raddress}<br />
            {cartItem?.rcity}, {cartItem?.rstate} <br />
            {cartItem?.rpostal_code}
          </p>
        </div>
        
      </div>
      <div className="divider"></div>
    </div>
  )
}