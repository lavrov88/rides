import React from "react";
import Navbar from "../Navbar/Navbar";
import './MobileNavbar.scss';

const MobileNavbar = (props) => {
   const navbarIsOpened = props.state.layout.mobileNavbarIsOpen
   return (
      <div className={"mobile_navbar" + (navbarIsOpened ? " opened" : "")}>
         <Navbar state={props.state} dispatch={props.dispatch} />
      </div>
   )
}

export default MobileNavbar