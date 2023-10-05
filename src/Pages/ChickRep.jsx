import React from 'react'
import Products from '../components/Products'
import { ITEMS } from '../items.js'
import Vendor from '../components/Vendor'
import chickRepLogo from '../assets/chickRepLogo.png'
import ContactCard from '../components/ContactCard'

export default function ChickRep() {

  return (
    <div className='mt-[80px] mb-[40px] mx-[20px]'>
        <Vendor
            src={chickRepLogo}
            imgProps='w-[30px] h-[30px]'
            text='Chicken Republic'
        />
        <div className=' flex flex-col gap-[20px] sm:flex-row justify-between items-center'>
            {ITEMS.map((item) => {
                    if (item.id > 3) {
                    return <Products data={item} />
                    }
                })}  
        </div>
        <div className='border-b w-full mt-[40px]'></div>
        <ContactCard></ContactCard>
    </div>
  )
}
