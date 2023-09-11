import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {

  return (
    <div className='w-screen fixed top-0 h-[48px] sm:h-[60px] px-[20px] sm:px-[40px] lg:px-[100px] mb-[22px] lg:mb-[42px] flex justify-between items-center bg-white text-[12px] sm:text-[16px] font-normal font-Poppins leading-normal'>
        <div className='w-[85px] sm:w-[90px] h-[24px] sm:h-[30px] text-[16px] sm:text-[20px] font-semibold flex items-center justify-center'>
            <Link to='/'> 
                <p>chow<span className='text-primary-red'>Chow</span></p>
            </Link>
        </div>
        <ul className='flex items-center justify-center gap-[20px] sm:gap-[30px] lg:gap-[50px]'>
            <Link to="/Cart">
                <li className='text-primary-grey'>
                    {/* <i class="fa fa-shopping-cart" aria-hidden="true"></i> */}
                    <i className="fa fa-shopping-cart text-[24px]" aria-hidden="true"></i>



                </li>
            </Link>
            <li className='text-primary-grey'>
                <a href="#login">Login</a>

            </li>
            <li className='w-[74px] sm:w-[92px] h-[32px] sm:h-[40px] flex items-center justify-center rounded-[5px] text-primary-red font-medium border border-primary-red'>
                <a href="#signup">Sign Up</a>

            </li>
        </ul>
    </div>
  )
}
