import React from 'react'
import unsuccessfull from '../assets/unsuccessful.png'
import Btn from '../components/Btn'

export default function OrderFailed() {
  return (
    <div className='flex flex-col items-center justify-center mt-[150px]  font-Poppins text-center'>
        <div className='w-[200px] h-[250px] py-auto'>
            <div>
                <img src={unsuccessfull} alt="An Image" className='w-[200px] h-[151px]' />
            </div>
             <div className=''>
                <p className='text-[20px] font-medium text-primary-red '>Order Unuccessful</p>
                <p className='text-[15px] text-primary-grey'>Your order has been <br /> cancelled.</p>
            </div>
            <div className='w-[200px] mt-6'>
                <Btn 
                    routte='/'
                    text='Home'
                />
            </div>
        </div>
    </div>
  )
}
