import React from 'react'
import { Link } from 'react-router-dom'
import { ITEMS } from '../items.js'
import Products from '../components/Products.jsx'
import ShopNav from '../components/ShopNav.jsx'
import Vendor from '../components/Vendor.jsx'
import kfc from '../assets/kfc.png'
import chickRepLogo from '../assets/chickRepLogo.png'
import ContactCard from '../components/ContactCard.jsx'

const ViewAll = (props) => {
  return (
    <Link to={props.routte}>
      <div className='w-full flex justify-center mt-[35px] mb-[29px]'>
          <button className='text-primary-red text-base font-semibold'>View all {props.vendorName}</button>
      </div>
    </Link>
  )
}


export default function Vendors() {

  return (
    <div className='mx-[20px] lg:mx-[100px] mt-[80px] mb-[40px] font-Poppins'>
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
            if (item.id === 1) {
              return <Products data={item} />
            }
          })}  
      </div>
      <ViewAll
        routte='/KFC'
      />

      <div className='border-b w-full'></div>
      
      <div className='mt-[40px]'>
      <Vendor
        src={chickRepLogo}
        imgProps='w-[30px] h-[30px]'
        text='Chicken Republic'
      />
      </div>
      <div className='flex flex-col sm:flex-row justify-between items-center'>
          {ITEMS.map((item) => {
            if (item.id === 4) {
              return <Products data={item} />
            }
          })} 
      </div>
      <ViewAll
         routte='/chickRep'
      />
       <div className='border-b w-full mt-[40px]'></div>
      <ContactCard></ContactCard>
    </div>
  )
}
