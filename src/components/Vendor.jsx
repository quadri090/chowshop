import React from 'react'

 const Vendor = (props) => {
    return (
      <div className='flex items-center mt-[30px] w-auto gap-[10px] text-[15px] font-medium'>
        <img src={props.src} alt="" className={`${props.imgProps}`} />
        <p className=''>{props.text}</p>
      </div> 
    )
  }

  export default Vendor
