import React from "react";
import { useSwipeable } from "react-swipeable";
import Navbar from "../Navbar/Navbar";
import './MobileNavbar.scss';

const MobileNavbar = (props) => {
  const navbarIsOpened = props.state.layout.mobileNavbarIsOpen

  const handlers = useSwipeable({
    onSwipedLeft: (eventData) => {
      const action = {
        type: 'TOGGLE-MOBILE-MENU'
      }
      props.dispatch(action)
    }
  })

  return (
    <div {...handlers} className={"mobile_navbar" + (navbarIsOpened ? " opened" : "")}>
      <Navbar state={props.state} dispatch={props.dispatch} />
    </div>
  )
}

export default MobileNavbar