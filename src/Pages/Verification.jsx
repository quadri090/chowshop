import React from 'react'
import { useState, useContext } from 'react';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import { HomeContext } from '../context/HomeContext.jsx'
import ShopNav from '../components/ShopNav'
import InputArea from '../components/InputArea';
import { useNavigate } from 'react-router-dom';

export default function Verification() {

    const [RegisteredAddress, setRegisteredAddress] = useState(true);
    const { getTotalCartAmount } = useContext(HomeContext);
    const navigate = useNavigate();
    const payableAmount = getTotalCartAmount();
    const KEY = 'FLWPUBK_TEST-d0838725990649edd81198e11c5b468f-X';

    const config = {
        public_key: KEY,
        tx_ref: Date.now(),
        amount: payableAmount,
        currency: 'NGN',
        payment_options: 'card,mobilemoney,ussd',
        redirect_url: useNavigate(),
        customer: {
          email: 'user@gmail.com',
          phone_number: '070********',
          name: 'John Doe',
        },
        customizations: {
          title: 'my Payment Title',
          description: 'Payment for items in cart',
          logo: '../src/assets/foodbag.png',
        },
      };
    
      const handleFlutterPayment = useFlutterwave(config);

  return (
    <div className='mx-[20px] lg:mx-[100px] mt-[80px] font-Poppins'>
        <ShopNav
            width='w-[178px]'
            textDisplay='text-primary-very-light-grey'
            displayVendors='hidden'
        />
        <div className='mt-[20px]'>
            <p className='text-[20px] lg:text-[30px] font-medium'>Verification</p>
            <p className='text-[14px] lg:text-base font-normal text-primary-red'>Confirm address & Phone Number</p>
        </div>
        <div className='mt-[42px] flex justify-between items-center'>
            <div className=''>
                <p className='text-sm sm:text-base lg:text-[20px] font-medium'>Delivery Address</p>
                <p className='text-[10px] sm:text-sm lg:text-[16px] font-normal text-primary-grey mt-[5px]'>Deliver to my registered address</p>
            </div>
            <div className='flex items-center justify-center w-[20px] h-[20px] outline outline-[2px] outline-primary-red rounded-[12px]'  onClick={() => setRegisteredAddress(!RegisteredAddress)}>
                <button className={`w-[14px] h-[14px] p-[3px] bg-primary-red rounded-[8px] ${RegisteredAddress ? "block" : "hidden"} `}></button>
            </div>
        </div>
        <div className={`${RegisteredAddress ? 'hidden' : 'block'}`}>

            <InputArea
                myProps='mt-[20px] lg:mt-[30px] w-full'
                head='Enter Delivery Address'
                placeholder='No 16, Allen Avenue'
                inputprops='w-full'     
            />
        </div>

        <InputArea
            myProps='mt-[20px] lg:mt-[30px] w-full'
            head='Phone Number'
            type='tel'
            mnlength='10'
            mxlength='11' 
            placeholder='+234'
            inputprops='w-full'
        />
        <InputArea
            myProps='mt-[20px] lg:mt-[30px] w-full'
            head='More Info'
            type='text'
            placeholder='Optional Info For Delivery Personnel'
            inputprops='w-full'
        />

        <div className='border-b-[1px] mt-[30px]'></div>

        <button onClick={() => {
                handleFlutterPayment({
                  callback: (response) => {
                    if (response.status === 'completed') {
                    }
                    console.log(response);
                    closePaymentModal()
                  },
                  onClose: () => {
                    navigate('/OrderSuccessfull')
                  },
                });
              }}
              className='w-full sm:w-[500px] lg:w-[809px] h-[50px] sm:h-[60px] flex items-center justify-center  rounded-[5px] sm:mx-auto mt-[49px] mb-[33px] lg:mt-[60px] text-base font-semibold text-white bg-primary-red'>Proceed to Payment</button>
        
    </div>
  )
}
