import React from 'react';

interface CartItemProps {
  cartItem: {
    product_name: string;
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
    <div className='cartItem'>
      <div className='product_details'>
        <p>{cartItem?.product_name}</p>
        <p>${price}</p>
      </div>
      <div className='recipient_details'>
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