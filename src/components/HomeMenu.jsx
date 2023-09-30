import React from 'react'
import { useContext } from 'react'
import { HomeContext } from '../context/HomeContext'
import Interests from './Interests'
import HomeServe from './HomeServe.jsx'
import Locations from './Locations.jsx'
import { STREETS } from '../streets.js'
import ContactCard from './ContactCard'
import ff from '../assets/fast-food 1.png'
import hf from '../assets/healthy-food 1.png'
import drinks from '../assets/mai-thai 1.png'
import fork from '../assets/fork 1.png'
import LoginModal from '../Pages/LoginModal'
import LogIn from '../Pages/LogIn'

export default function HomeMenu() {
    const {addressInputOpen,
            addressInputClose,
            addressClick,
            visibility} = useContext(HomeContext);

  return (
    <>
        <div>
            <LoginModal open={visibility}>
                <LogIn></LogIn>
            </LoginModal>
        </div>
    
        <div className={`${visibility ? 'fixed' : "static" } font-Poppins text-primary-grey`}>
            <div className='sm:text-center'>
                <p className='text-[20px] sm:text-[28px] lg:text-[40px] font-semibold '>chowChow</p>
                <p className='text-[12px] sm:text-[15px] lg:text-[20px] font-normal'>Anything food, we got you covered.</p>
            </div>
            <div className='mt-[31px] lg:mt-[80px]' onMouseLeave={() => addressInputClose()}>
                <p className='text-[12px] sm:text-[16px] lg:text-[20px] font-medium text-black '>Where are you?</p>
                <div className='flex justify-between items-center w-full border-[1px] mt-[10px] rounded-[5px]'>

                    <input className='text-[12px] font-normal w-full h-[40px] lg:h-[60px] p-[10px]  sm:text-base lg:text-[20px] outline-none' placeholder='Enter your delivery address' id="inputAddress" onClick={() => addressInputOpen()}/>
                    
                    <i className={`${addressClick ? 'hidden' : 'block'} fa fa-chevron-down text-primary-red px-[8px] lg:px-[20px] w-auto`}></i>
                    <i className={`${addressClick ? 'block' : 'hidden'} fa fa-chevron-up text-primary-red px-[8px] lg:px-[20px] w-auto`}></i>
                </div>
                <div className={`${addressClick ? 'block' : 'hidden'} flex flex-col gap-[10px] mt-[10px] w-full text-left`}>
                    {STREETS.map((street) => {
                        return <Locations data={street} />
                    })}
                    
                </div>
            </div>

            <div className='my-[30px] lg:my-[42px]'>
                <p className='text-[12px] sm:text-[16px] lg:text-[20px]'>Pick an interest</p>
                <div className='flex flex-col sm:grid sm:grid-rows-2 sm:grid-cols-2 lg:flex lg:flex-row lg:justify-between mt-[10px] sm:mt-[20px] gap-[20px]'>
                    
                    <Interests
                        routte='/Vendors'
                        src={ff}
                        head='Fast food'
                        desc='All sorrows are less with bread.'
                    />

                    <div onClick={ () => {alert('Coming Soon')}}>
                        <Interests
                            src={hf}
                            head='Vegetables & Fruits'
                            desc='May not want it, but good for you.'
                        />
                    </div>

                    <div onClick={ () => {alert('Coming Soon')}}>
                        <Interests
                            src={drinks}
                            head='Drinks & Cocktails'
                            desc="I feel sad for those who don't drink."
                        />
                    </div>

                    <div onClick={ () => {alert('Coming Soon')}}>
                        <Interests
                            src={fork}
                            head='Restaurants'
                            desc='All sorrows are less with bread.'
                        />
                    </div>
                </div>

                <div className='border-b-[1px] mt-[30px]'></div>

                <div className='w-full text-center mt-[30px]'>
                    <p className='text-[20px] font-semibold text-primary-grey'>How we serve you</p>
                    <HomeServe />
                </div>
                <ContactCard />
            </div>
        </div>
    </>
  )
}
