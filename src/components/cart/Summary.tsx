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
    <div></div>

      // <p className='cart-summary'>{cartItem.product_name} ${cartItem.product_price / 100}</p>
  )
};