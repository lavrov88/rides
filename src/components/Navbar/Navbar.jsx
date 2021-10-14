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
   const getSeparatorText = (currEl, prevEl, param) => {
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
               return currEl.distance < 50 ? '<50' : '>100'
            }
            if ((prevEl.distance < 50 && currEl.distance > 50) || (prevEl.distance > 100 && currEl.distance < 100)) {
               return '50-100'
            }
            if (prevEl.distance > 50 && currEl.distance < 50) {
               return '<50'
            }
            if (prevEl.distance < 100 && currEl.distance > 100) {
               return '>100'
            }
            break
         case 'speed':
            const currSpeed = currEl.distance / currEl.cleanTime * 1000 * 60 * 60
            const prevSpeed = prevEl ? prevEl.distance / prevEl.cleanTime * 1000 * 60 * 60 : null
            if (!prevEl) {
               return currSpeed < 15 ? '<15' : '>18'
            }
            if ((prevSpeed < 15 && currSpeed > 15) || (prevSpeed > 18 && currSpeed < 18)) {
               return '15-18'
            }
            if (prevSpeed > 15 && currSpeed < 15) {
               return '<15'
            }
            if (prevSpeed < 18 && currSpeed > 18) {
               return '>18'
            }
            break
         case 'time':
            const currTime = currEl.cleanTime / 1000 / 60 / 60
            const prevTime = prevEl ? prevEl.cleanTime / 1000 / 60 / 60 : null
            if (!prevEl) {
               return currTime < 4 ? '<4' : '>7'
            }
            if ((prevTime < 4 && currTime > 4) || (prevTime > 7 && currTime < 7)) {
               return '4-7'
            }
            if (prevTime > 4 && currTime < 4) {
               return '<4'
            }
            if (prevTime < 7 && currTime > 7) {
               return '>7'
            }
            break
         default:
            return null
      }
   }
   const getSeparatorUnit = (param) => {
      if (param === 'date') return null
      if (param === 'distance') return 'km'
      if (param === 'speed') return 'km/h'
      if (param === 'time') return 'h'
   }

   const separatorText = getSeparatorText(props.currEl, props.prevEl, props.sortParameter)
   const separatorUnit = getSeparatorUnit(props.sortParameter)
   if (separatorText) {
      return (
         <div className='rides_list_separator'>
            {separatorText} <span className="rides_list_separator__unit">{separatorUnit}</span>
         </div>
      )
   } else return null
}

const RidesListItems = (props) => {

   return props.state.processedRides
      .map((r, i, arr) => {
         return ( <li key={r.url}>
         <RidesListSeparator 
            currEl={r}
            prevEl={arr[i - 1]}
            sortParameter={props.state.navbar.output.sortParameter} />

         <RidesListItem 
            dispatch={props.dispatch}
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
         </li>)
      }
   )
}

const Navbar = (props) => {

   return (
      <div className="navbar">
         <Logo />
         <ManageList bikers={props.state.bikers} navbar={props.state.navbar} dispatch={props.dispatch} />
         <div className="riders_list_wrapper">
            <ul className="rides_list">
               <RidesListItems state={props.state} dispatch={props.dispatch} />
            </ul>
         </div>
         <div className="right_border"></div>
      </div>
   )
}

export default Navbar;