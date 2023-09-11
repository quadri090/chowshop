import React from 'react'
import Btn from '../components/Btn'
import HomeMenu from '../components/HomeMenu'

export default function Home() {
  return (
    <div className='mt-[80px] lg:mt-[145px] mx-[20px] sm:mx-[40px] lg:mx-[100px]'>
      <HomeMenu />
      {/* <Btn 
       routte='/Vendors'
       text = 'Vendors'
      /> */}
    </div>
  )
}
