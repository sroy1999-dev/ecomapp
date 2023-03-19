import React from 'react';
import { useSelector } from 'react-redux';
import CartProduct from '../components/CartProduct';
import empty from '../assest/4496-empty-cart.gif';

const Cart = () => {
  const productCartItems = useSelector((state) => state.product.cartItem);
  console.log(productCartItems);

  const totalQty = productCartItems.reduce((acc, curr) => acc + parseInt(curr.qty), 0);

  const totalPrice = productCartItems.reduce((acc, curr) => acc + parseInt(curr.total), 0);

  return (
    <>
      <div className='p-2 md:p-4'>
        <h2 className='text-lg md:text-2xl font-bold text-slate-600'>Your cart</h2>
        {
          productCartItems[0] ?
          <div className='my-4 flex gap-4'>
            {/*Display cart items*/}
            <div className='w-full max-w-3xl'>
              {
                productCartItems.map(el => {
                  return (
                    <CartProduct
                      key={el._id}
                      id={el._id}
                      name={el.name}
                      image={el.image}
                      category={el.category}
                      qty={el.qty}
                      total={el.total}
                      price={el.price}
                    />
                  )
                })
              }
            </div>
            {/*total cart items*/}
            <div className='w-full max-w-sm ml-auto'>
              <h2 className='bg-blue-500 text-white p-2 text-lg'>Summary</h2>
              <div className='flex w-full py-2 text-lg border-b'>
                <p>Total quantity:</p>
                <p className='ml-auto w-32 font-bold'>{totalQty}</p>
              </div>
              <div className='flex w-full py-2 text-lg'>
                <p>Total price:</p>
                <p className='ml-auto w-32 font-bold'><span className='text-red-500'>₹</span>{totalPrice}</p>
              </div>
              <button className='bg-red-500 w-full text-lg font-bold py-2 text-white rounded hover:bg-red-600'>Proceed to pay</button>
            </div>
          </div>
          :
          <>
           <div className='flex w-full justify-center items-center flex-col'>
            <img src={empty} alt="" className='w-full max-w-sm bg-inherit' />
            <p className='text-slate-500 text-3xl font-bold'>Cart empty</p>
           </div>
          </>
        }
      </div>
    </>
  )
}

export default Cart;