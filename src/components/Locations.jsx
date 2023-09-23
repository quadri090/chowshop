import React from 'react'
import { useContext } from 'react'
import { HomeContext } from '../context/HomeContext'

export default function Locations(props) {
    
    const {addressInputClose} = useContext(HomeContext);
    const {id, streetName} = props.data;
    
  return (
    <div className='' onClick={() => addressInputClose()}>
        <p className='text-[12px] ml-[10px] hover:cursor-pointer'>{streetName}</p>
    </div>
  )
}
