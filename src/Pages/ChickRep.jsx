import React from 'react'
import Products from '../components/Products'
import { ITEMS } from '../items.js'
import Vendor from '../components/Vendor'
import chickRepLogo from '../assets/chickRepLogo.png'
import ContactCard from '../components/ContactCard'

export default function ChickRep() {

  return (
    <div className='mt-[80px] mb-[40px] mx-[20px] lg:mx-24'>
        <Vendor
            src={chickRepLogo}
            imgProps='w-[30px] h-[30px]'
            text='Chicken Republic'
        />
        <div className=' flex flex-col gap-[20px] sm:mt-[40px] sm:grid sm:grid-cols-2 lg:flex lg:flex-row justify-between sm:justify-items-center items-center'>
            {ITEMS.map((item) => {
                    if (item.id > 3) {
                    return <Products data={item} proClasses='p-4 sm:p-8 shadow-2xl rounded-2xl border'/>
                    }
                })}  
        </div>
        <div className='border-b w-full mt-[40px]'></div>
        <ContactCard></ContactCard>
    </div>
  )
}
