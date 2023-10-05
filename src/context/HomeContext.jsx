import React, { useState } from 'react'
import { createContext } from 'react'
import { ITEMS } from '../items';

export const HomeContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < ITEMS.length + 1; i++) {
    cart[i] = 0
  }
  return cart;
}


export default function HomeContextProvider(props) {
  
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [location, setLocation] = useState("");
  const [addressClick , setAddressClick] = useState(false);
  const [visibility, setVisibility] = useState(false);

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = ITEMS.find((x) => x.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const getTotalItemsCount = () => {
    let totalCount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalCount += cartItems[item] + 0;
      }
    }
    return totalCount;
    }


  const addToCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
  }

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
  }

  const clearItem = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] * 0}))
    }
    


//not working yet

  const clearAllItems = (itemId) => {
        console.log(itemId)
   
    setCartItems((prev) => ({...prev, [item]: prev[item] * 0}))
  }






  const addressInputOpen = () => {
    setAddressClick(true)
  };

  const addressInputClose = () => {
    setAddressClick(false)
  }

  const isVisible = () => {
    setVisibility(true)
  }

  const isNotVisible = () => {
    setVisibility(!visibility)
  }



  const contextValue = {
    cartItems, 
    getTotalCartAmount, 
    addToCart, 
    removeFromCart, 
    clearItem, 
    clearAllItems, 
    getTotalItemsCount,
    addressInputOpen,
    addressInputClose,
    addressClick,
    isVisible,
    isNotVisible,
    visibility
  }


  return (
    <HomeContext.Provider value={contextValue}>
      {props.children}
    </HomeContext.Provider>
  )
}
