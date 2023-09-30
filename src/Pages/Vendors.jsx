import React from 'react'
import { ITEMS } from '../items.js'
import Products from '../components/Products.jsx'
import ShopNav from '../components/ShopNav.jsx'
import kfc from '../assets/kfc.png'
import chickRep from '../assets/chickRep.png'

export default function Vendors() {

  const Vendor = (props) => {
    return (
      <div className='flex items-center mt-[30px] w-auto gap-[10px] text-[15px] font-medium'>
        <img src={props.src} alt="" className={`${props.imgProps}`} />
        <p className=''>{props.text}</p>
      </div> 
    )
  }

  return (
    <div className='mx-[20px] lg:mx-[100px] my-[80px] font-Poppins'>
      <ShopNav
            width='w-[115px]'
            displayVerification='hidden'
            displayCart ='hidden'
        />
      <p className='mt-[20px] text-base font-medium  leading-normal'>All Vendors</p>
      <Vendor
        src={kfc}
        imgProps='w-[30px] h-[30px]'
        text='KFC'
      />
      <div className=' flex flex-col gap-[20px] sm:flex-row justify-between items-center'>
      {ITEMS.map((item) => {
            if (item.id <= 3) {
              return <Products data={item} />
            }
          })}  
      </div>
      <div className='w-full flex justify-center mt-[55px] mb-[29px]'>

        <button className='text-primary-red font-medium text-base' onClick={ ()=> {alert('Products shipping soon')}}>View all</button>
      </div>

      <div className='border-b w-full'></div>
      
      <div className='mt-[70px]'>

      <Vendor
        src={chickRep}
        imgProps='w-[30px] h-[30px]'
        text='Chicken Republic'
      />
      </div>
      <div className='flex flex-col sm:flex-row justify-between items-center'>
          {ITEMS.map((item) => {
            if (item.id > 3) {
              return <Products data={item} />
            }
          })} 
      </div>
      <div className='w-full flex justify-center mt-[55px] mb-[29px]'>

        <button className='text-primary-red font-medium text-base' onClick={ ()=> {alert('Dang! you sure love a good treat :)')}}>View all</button>
      </div>
    </div>
  )
}
