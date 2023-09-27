import React from 'react'
import { useContext } from 'react'
import { HomeContext } from '../context/HomeContext'

export default function Locations(props) {
    
    const {addressInputClose} = useContext(HomeContext);
    const {id, streetName} = props.data;
    const inputVal = document.getElementById('streetInput');
    // console.log(inputVal.innerHTML)
    
  return (
    <div className='' onClick={() => addressInputClose()}>
        <p className='text-[12px] ml-[10px] hover:cursor-pointer' id='streetInput'>{streetName}</p>
    </div>
  )
}
