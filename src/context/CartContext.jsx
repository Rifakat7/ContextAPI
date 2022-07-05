import React, { useContext, useState } from "react";
import { createContext } from "react";
import { AuthContext } from "./AuthContext";

export const CartContext = createContext();

export const CartProvider = ({children})=>{

    const {isAuthorized} = useContext(AuthContext); 
    const [count, setCount] =useState(0);
    const addToCart = ()=>{
        setCount(count+1);
    }

    const buy = ()=>{
        if(isAuthorized){
            console.log("can buy");
        }
        else{
            console.log("cant buy without login");
        }
    };

    return (          
      <CartContext.Provider value={{count,addToCart,buy}}>  
{/* what ever value we are passing from hewer we can receive anywhere ansd use. we are rcving thiese caliues in Cart and Wishlist  */}
          {children}               
          </CartContext.Provider>
    );
};
