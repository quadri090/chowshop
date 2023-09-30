import React, {useContext} from 'react'
import { ITEMS } from '../items.js'
import { HomeContext } from '../context/HomeContext.jsx'
import CartItem from '../components/CartItem.jsx'
import ShopNav from '../components/ShopNav.jsx'
import Btn from '../components/Btn.jsx'


export default function Cart() {
    const clearAll = () => {
        for (const item in cartItems) {
          if (cartItems[item] > 0) {
            let itemInfo = cartItems[item];
            return itemInfo;
          }
        }
      };

    const { cartItems, getTotalCartAmount, clearAllItems, getTotalItemsCount} = useContext(HomeContext);
    const totalAmount = getTotalCartAmount();
    const totalItemCount = getTotalItemsCount();
    const ID = ITEMS.map((item) => {
        return cartItems[item.id]
    })
    // console.log(ID)
    
    const checkOut = () => {
        let routte = ''
        if (totalAmount > 0) {
            routte = '/verification';
        };
        return routte
    };

    const checkOutText = () => {
        let text = '';
        if (totalAmount > 0) {
            text = 'Checkout'
        } else {
            text = 'Cart is Empty'
        };
        return text
    }

    const emptyCart = () => {
        let text = '';
        if (totalAmount > 0) {
            text = 'Clear Cart'
        } else {
            text = 'Cart Is Empty'
        };
        return text
    }

  return (
    <div className="mt-[80px] mx-[20px] sm:mx-[30px] lg:mx-[100px] font-Poppins">
        <ShopNav
            width='w-[88px]'
            displayVerification='hidden'
            displayVendors='hidden'
        />
        <div className="flex items-center justify-between mt-[20px]">
            <div className="">
                <p className="text-[20px] sm:text-[30px] font-medium">Cart</p>
                <p className="text-[16px] text-primary-red font-normal lg:hidden">{totalItemCount} Items</p>
            </div>
            <div className="">
                <button className="text-[14px] text-primary-red font-semibold lg:hidden" onClick={() => clearAllItems(ID)}>{emptyCart()}</button>
            </div>
        </div>
        <div className='mt-[42px]'>

            {ITEMS.map((item) =>  {
          if (cartItems[item.id] !== 0) {
            return <CartItem data={item} />;
          }})}

        </div>
        <div className='flex justify-between mt-[20px]'>
            <p>Total</p>
            {totalAmount > 0 ?
            ( <p> #{totalAmount.toLocaleString("en-US")} </p> )
            : ( <p>#0</p> )
            }
        </div>
        <div className='flex justify-between items-center'>

        </div>
        <Btn 
            routte={checkOut()}
            text={checkOutText()}
            myClasses={`mt-[37px] mb-[20px] lg:mt-[60px] ${totalAmount <= 0 ? 'hidden' : 'block'}`}
        />
        <Btn 
            routte='/Vendors'
            text='Continue Shopping'
            myClasses={`mt-[37px] mb-[20px] lg:mt-[60px] ${totalAmount <= 0 ? 'block' : 'hidden'}`}
        />
    </div>
  )
}
