import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
  const productCartItems = useSelector((state) => state.product.cartItem);
  console.log(productCartItems);
  return (
    <div className='p-2 md:p-4'>
     <h2 className='text-lg md:text-2xl font-bold text-slate-600'>Your cart</h2>
     <div className=''>
        {/*Display cart items*/}
        <div className=''>

        </div>
        {/*total cart items*/}
        <div className=''>

        </div>
     </div>
    </div>
  )
}

export default Cart;