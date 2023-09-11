import React from 'react'
import unsuccessfull from '../assets/unsuccessful.png'
import successful from '../assets/successful.png'

export default function OrderStatus() {
  return (
    <div className='flex flex-col items-center justify-center mt-[150px]  font-Poppins text-center'>
        <div className='w-[200px] h-[250px] py-auto'>
            <div>
                <img src={successful} alt="An Image" className=' w-[200px] h-[150px]' />
                <img src={unsuccessfull} alt="An Image" className='hidden w-[200px] h-[151px]' />
            </div>
            <div className=''>
                <p className='text-[20px] font-medium text-[#5EA304] '>Order Successful</p>
                <p className='text-[15px] text-primary-grey'>We have started <br /> processing your order.</p>
            </div>
            <div className='hidden'>
                <p className='text-[20px] font-medium text-primary-red '>Order Unuccessful</p>
                <p className='text-[15px] text-primary-grey'>Something is wrong with <br /> your order.</p>
            </div>
        </div>
    </div>
  )
}
