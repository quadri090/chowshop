import React, { useContext } from 'react'
import { HomeContext } from '../context/HomeContext.jsx';

export default function Products(props) {

    const {id, itemName, price, itemImage} = props.data;
    const {addToCart, cartItems} = useContext(HomeContext)
    const cartItemCount = cartItems[id];

    

  return (
    <div className='font-Poppins text-base font-semibold'>
        <div className='w-[320px] sm:w-[266px] h-[150px] mt-[35px]'>
            <img src={itemImage} alt="" />
        </div>
        <div className='flex justify-between mt-[15px]'>
            <p>{itemName}</p>
            <p className='text-primary-red'>#{price.toLocaleString("en-US")}</p>
        </div>
        <div>
            <button className='w-[138px] h-[40px] mt-[15px] font-medium text-primary-red border-[1px] border-primary-red rounded-[3px]' onClick={() => addToCart(id)}>
                Add to cart  {cartItemCount > 0 && <> ({cartItemCount})</>}
                </button>
        </div>
    </div>
  )
}
