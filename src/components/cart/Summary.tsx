import React from 'react';

interface SummaryProps {
  cartItem: {
    product_name: string;
    cart_item: number;
    product_price: number;
  };
}

export const Summary: React.FC<SummaryProps> = ({cartItem}) => {
  return(

      <li className='cart-summary'><span>{cartItem.product_name} $</span><span>{cartItem.product_price / 100}</span></li>
  )
};