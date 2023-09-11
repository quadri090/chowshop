import React from 'react'
import ServeSteps from './ServeSteps'
import map1 from '../assets/Map1.png'
import Fast from '../assets/fast food.png'
import scooter from '../assets/Scooter.png'


export default function HomeServe() {
  return (
    <div className='w-full sm:flex justify-between'>
        <ServeSteps 
            src={map1}
            head='Tell us where you are'
            desc="Select the location you want us to deliver."
        />
        <div className='border-b-[1px] sm:hidden'></div>
        <ServeSteps 
            src={Fast}
            head='Tell us what you want'
            desc="Browse the type of food that interest you."
        />
        <div className='border-b-[1px] sm:hidden'></div>
        <ServeSteps 
            src={scooter}
            head="We'll come running"
            desc="Your order will be delivered to you in no time."
        />
        <div className='border-b-[1px] sm:hidden'></div>
    </div>
  )
}
