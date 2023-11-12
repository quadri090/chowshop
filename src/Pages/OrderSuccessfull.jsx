import React, { useContext } from 'react'
import { HomeContext } from "../context/HomeContext.jsx";
import successful from '../assets/successful.png'
import Btn from '../components/Btn'

export default function OrderSuccessfull() {
    const {
        clearCart
      } = useContext(HomeContext);

  return (
    <div className='flex flex-col items-center justify-center mt-[150px]  font-Poppins text-center'>
        <div className='w-[200px] h-[250px] py-auto'>
            <div>
                <img src={successful} alt="An Image" className=' w-[200px] h-[150px]' />
            </div>
            <div className=''>
                <p className='text-[20px] font-medium text-[#5EA304] '>Order Successful</p>
                <p className='text-[15px] text-primary-grey'>We have started <br /> processing your order.</p>
            </div>
            <div className='w-[200px] mt-6' onClick={() => clearCart()}>
                <Btn 
                    routte='/'
                    text='Home'
                />
            </div>
        </div>
    </div>
  )
}
