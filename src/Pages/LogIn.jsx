import React, { useContext } from 'react'
import InputArea from '../components/InputArea'
import Btn from '../components/Btn'
import { Link } from 'react-router-dom'
import { HomeContext } from '../context/HomeContext'

export default function LogIn() {
    const {isVisible} = useContext(HomeContext)

  return (
    <div className='sm:w-[500px] lg:w-[809px] sm:flex flex-col justify-center mt-[80px] mx-[20px] sm:mx-auto font-Poppins'>
        <div className='flex items-center justify-between'>
            <div>
                <p className="text-[20px] font-medium">Sign In</p>
                <p className='text-[12px] text-primary-very-light-grey'>Sign in to continue</p>
            </div>
            <Link to='/'>
                <div className='w-[25px] h-[25px] flex items-center justify-center outline rounded-full text-primary-red'>
                    <i className='fa fa-times' onClick={ () => {isVisible()}}></i>
                </div>
            </Link>
        </div>
        {/* <span className='text-primary-red'>Chow</span> */}
        <div>
            <div className='w-full sm:w-[500px] lg:w-[809px] h-[50px] sm:h-[60px] mt-[40px] flex items-center justify-center gap-[15px] rounded-[5px] sm:mx-auto bg-black text-white text-[14px]' onClick={ ()=> {alert('Coming soon')}}>

                    <i className='fa fa-github fa-2x'></i>
                <button className=''> Sign in with GitHub </button>
            </div>

            <div className='mt-[20px] w-full flex items-center text-center'>
                <div className='flex-grow border-b-[2px] h-[2px]'></div>
                <p className='w-[50px]'>Or</p>
                <div className='flex-grow border-b-[2px] h-[2px]'></div>
            </div>

            <div className='mt-[20px]'>
                <InputArea 
                    placeholder='Phone, Email, or Username'
                    inputprops='w-full h-[50px] sm:h-[60px]'
                />
            </div>

            <div className='mt-[12px]'>
                <InputArea 
                    type='password'
                    placeholder='Password'
                    inputprops='w-full h-[50px] sm:h-[60px]'
                />
            </div>
            <div className='mt-[10px]'>
                <button className='text-[14px]' onClick={ ()=> {alert('Coming soon')}}>Forgot password?</button>
            </div>

            <div className='mt-[20px]' onClick={ ()=> {alert('Coming soon')}}>
                <Btn 
                    text='Next'
                />
            </div>
            <div className='mt-[20px]'>
                <p className='text-[14px]'>Don't have an account? <span className='text-primary-red font-semibold'>Sign Up</span></p>
            </div>
        </div>
    </div>
  )
}
