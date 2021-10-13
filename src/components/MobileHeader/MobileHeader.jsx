import React from "react";
import { Logo } from "../Navbar/Navbar";
import './MobileHeader.scss';

const BurgerBtn = (props) => {
   
   const burgerOnClick = () => {
      props.dispatch({ type: 'TOGGLE-BURGER-BUTTON' })
   }

   return (
      <button onClick={burgerOnClick} className="burger_btn">
         <span className="burger_btn__span"></span>
      </button>
   )
}

const MobileHeader = (props) => {
   return (
      <div className="mobile_header">
         <BurgerBtn dispatch={props.dispatch} />
         <Logo />
      </div>
   )
}

export default MobileHeader