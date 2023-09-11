import React from 'react'
import { Link } from 'react-router-dom'

export default function Btn(props) {
  return (
    <Link to={props.routte}>
        <div className={` ${props.myClasses} w-full sm:w-[500px] lg:w-[809px] h-[50px] sm:h-[60px] flex items-center justify-center  rounded-[5px] sm:mx-auto bg-primary-red`}> 
            <button className='text-base font-semibold text-white'>{props.text}</button>    
        </div>
    </Link>
  )
}
