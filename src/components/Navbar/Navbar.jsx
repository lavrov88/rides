import React from "react"
import ManageList from "./ManageList/ManageList"
import './Navbar.scss'
import RidesListItem from "./RidesListItem/RidesListItem"

export const Logo = (props) => {
   return (
      <div className="header_logo">
         <h1>Rides history</h1>
      </div>
   )
}

const RidesListItems = (props) => {
   return props.state.processedRides
      .map((r, i) => <RidesListItem 
         id={r.id}
         url={r.url}
         key={r.id} 
         name={r.name}
         date={r.startDate}
         distance={r.distance}
         speed={r.averageSpeed}
         time={r.cleanTime}
         members={r.members}
         allBikers={props.state.bikers}
         sortParameter={props.state.navbar.output.sortParameter}
         active={props.state.activeRide === i ? true : false} />)
}

const Navbar = (props) => {
   const closeMobileNavbar = () => {
      const action = {
         type: 'TOGGLE-BURGER-BUTTON'
      }
      props.dispatch(action)
   }

   return (
      <div className="navbar">
         <Logo />
         <ManageList bikers={props.state.bikers} navbar={props.state.navbar} dispatch={props.dispatch} />
         <div className="riders_list_wrapper">
            <ul onClick={closeMobileNavbar} className="rides_list">
               <RidesListItems state={props.state} />
            </ul>
         </div>
         <div className="right_border"></div>
      </div>
   )
}

export default Navbar;