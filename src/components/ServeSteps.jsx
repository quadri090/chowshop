import React from 'react'

export default function ServeSteps(props) {
  return (
    <div className='my-[30px] flex flex-col items-center'>
        <img src={props.src} alt="" className='w-[200px] h-[150px] lg:w-[300px] lg:h-[225px]'/>
        <p className="text-[15px] lg:text-[25px] mt-[20px] lg:mt-[40px] font-medium">{props.head}</p>
        <p className="text-[10px] lg:text-[20px] font-normal w-[150px] lg:w-[270px] lg:mt-[15px]">{props.desc}</p>
    </div>
  )
}
