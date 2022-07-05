import React from 'react'
import { AuthContext } from '../context/AuthContext';
import Wishlist from './Wishlist';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {
    const {isAuthorized,login,logout} = useContext(AuthContext); //recieving Authcontext properties
    const {buy} = useContext(CartContext); 
    const {isLight,toggleTheme} = useContext(ThemeContext);   
  return (
    <div>
        Navbar
        <button
         onClick={()=>{
            if(isAuthorized) logout();
            else login("R","Z");

        }}
        >
            {isAuthorized ? "Logout":"Login"}
            </button>
            <button onClick={buy}>Buy</button>
            <button onClick={toggleTheme}>{`Make ${isLight ? "Dark":"Light"}`}</button>
        {isAuthorized && <Wishlist/>}    
        {/* if user is logged in than only wishlist will appear. */}
    </div>
  );
};

export default Navbar;