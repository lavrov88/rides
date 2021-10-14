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

const RidesListSeparator = (props) => {
   const getSeparator = (currEl, prevEl, param) => {
      switch (param) {
         case 'date':
            const currElDate = new Date(currEl.startDate)
            const prevElDate = prevEl ? new Date(prevEl.startDate) : null
            if (!prevElDate) {
               return currElDate.getFullYear()
            } else if (prevElDate.getFullYear() !== currElDate.getFullYear()) {
               return currElDate.getFullYear()
            }
            break
         case 'distance':
            if (!prevEl) {
               return currEl.distance < 50 ? '<50 km' : '>100 km'
            }
            if ((prevEl.distance < 50 && currEl.distance > 50) || (prevEl.distance > 100 && currEl.distance < 100)) {
               return '50 - 100 km'
            }
            if (prevEl.distance > 50 && currEl.distance < 50) {
               return '<50 km'
            }
            if (prevEl.distance < 100 && currEl.distance > 100) {
               return '>100 km'
            }
            break
         case 'speed':
            const currSpeed = currEl.distance / currEl.cleanTime * 1000 * 60 * 60
            const prevSpeed = prevEl ? prevEl.distance / prevEl.cleanTime * 1000 * 60 * 60 : null
            if (!prevEl) {
               return currSpeed < 15 ? '<15 km/h' : '>18 km/h'
            }
            if ((prevSpeed < 15 && currSpeed > 15) || (prevSpeed > 18 && currSpeed < 18)) {
               return '15-18 km/h'
            }
            if (prevSpeed > 15 && currSpeed < 15) {
               return '<15 km/h'
            }
            if (prevSpeed < 18 && currSpeed > 18) {
               return '>18 km/h'
            }
            break
         case 'time':
            const currTime = currEl.cleanTime / 1000 / 60 / 60
            const prevTime = prevEl ? prevEl.cleanTime / 1000 / 60 / 60 : null
            if (!prevEl) {
               return currTime < 4 ? '<4 h' : '>7 h'
            }
            if ((prevTime < 4 && currTime > 4) || (prevTime > 7 && currTime < 7)) {
               return '4-7 h'
            }
            if (prevTime > 4 && currTime < 4) {
               return '<4 h'
            }
            if (prevTime < 7 && currTime > 7) {
               return '>7 h'
            }
            break
         default:
            return null
      }
   }
   const separatorText = getSeparator(props.currEl, props.prevEl, props.sortParameter)
   
   return (
      <div className={separatorText ? 'rides_list_separator' : ''}>
         {separatorText}
      </div>
   )
}

const RidesListItems = (props) => {

   return props.state.processedRides
      .map((r, i, arr) => {
         return ( <div key={r.url}>
         <RidesListSeparator 
            currEl={r}
            prevEl={arr[i - 1]}
            sortParameter={props.state.navbar.output.sortParameter} />

         <RidesListItem 
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
            active={props.state.activeRide === i ? true : false} />
         </div>)
      }
   )
}

const Navbar = (props) => {
   const closeMobileNavbar = () => {
      const action = {
         type: 'TOGGLE-MOBILE-MENU'
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