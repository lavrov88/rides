import React from "react";
import { Logo } from "../Navbar/Navbar";
import './MobileHeader.scss';

const BurgerBtn = (props) => {
   return (
      <button className="burger_btn">
         <span className="burger_btn__span"></span>
      </button>
   )
}

const MobileHeader = (props) => {

   const headerOnClick = () => {
      props.dispatch({ type: 'TOGGLE-MOBILE-MENU' })
   }

   return (
      <div className="mobile_header">
         <div onClick={headerOnClick} >
            <BurgerBtn />
         </div>
         <div onClick={headerOnClick} >
         <Logo />
         </div>
      </div>
   )
}

export default MobileHeader