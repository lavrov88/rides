import React from "react";
import { Logo } from "../Navbar/Navbar";
import './MobileHeader.scss';

const BurgerBtn = (props) => {
  return (
    <button className={"burger_btn" + (props.navbarIsOpen ? " active" : "")}>
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
        <BurgerBtn navbarIsOpen={props.navbarIsOpen} />
      </div>
      <div onClick={headerOnClick} >
        <Logo />
      </div>
    </div>
  )
}

export default MobileHeader