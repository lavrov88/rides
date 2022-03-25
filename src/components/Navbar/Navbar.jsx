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
               return currEl.distance < 50 ? '<50' : (currEl.distance > 100 ? '>100' : '50-100')
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
               return currSpeed < 15 ? '<15' : ( currSpeed > 18 ? '>18' : '15-18')
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
               return currTime < 4 ? '<4' : (currTime > 7 ? '>7' : '4-7')
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

  const activeStatus = (i) => {
    if (props.state.activeRide !== i) return false

    if (props.state.layout.isMobile) {
      return props.state.layout.mobileNavbarWasTouched ? true : false
    } else {
      return true
    }
  }

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
            // active={props.state.activeRide === i ? true : false}
            active={activeStatus(i)}
         />
         </li>)
      }
   )
}

const ScrollButton = ({ direction, display, handleFunction }) => {
   return (
      <div className={`to_${direction}_btn_wrapper${display ? "" : " hide"}`}>
         <button onClick={handleFunction} className={`to_${direction}_btn`}></button>
      </div>
   )
}

const Navbar = (props) => {
   const [isTop, setIsTop] = React.useState(true)
   const [isBottom, setIsBottom] = React.useState(false)
   const isMobile = props.state.layout.isMobile
   const ridesListWrapper = React.useRef(null)
   const scrollHandler = (e) => {
      if (isMobile) return
      const checkTop = ridesListWrapper.current.scrollTop < 50
      const checkBottom = ridesListWrapper.current.scrollTop + ridesListWrapper.current.offsetHeight > ridesListWrapper.current.scrollHeight - 50
      checkTop ? setIsTop(true) : setIsTop(false)
      checkBottom ? setIsBottom(true) : setIsBottom(false)

   }

   const scrollUp = () => {
      if (ridesListWrapper.current.scrollTop < ridesListWrapper.current.offsetHeight) {
         ridesListWrapper.current.scrollTop = 0
      } else {
         ridesListWrapper.current.scrollTop = ridesListWrapper.current.scrollTop - ridesListWrapper.current.offsetHeight + 80
      }
   }
   const scrollDown = () => {
      if (ridesListWrapper.current.scrollTop + ridesListWrapper.current.offsetHeight > ridesListWrapper.current.scrollTopMax) {
         ridesListWrapper.current.scrollTop = ridesListWrapper.current.scrollTopMax
      } else {
         ridesListWrapper.current.scrollTop += ridesListWrapper.current.offsetHeight - 80
      }
   }

   const listClickHandler = (e) => {
     if (e.target.closest('.rides_list_item')) {
       const action = { type: 'TOGGLE-NAVBAR-TOUCHED' }
       props.dispatch(action)
     }
   }

   return (
      <div className="navbar">
         <Logo />
         <ManageList bikers={props.state.bikers} navbar={props.state.navbar} dispatch={props.dispatch} />
         <div onScroll={scrollHandler} ref={ridesListWrapper} className="riders_list_wrapper">
            <ScrollButton direction="top" display={!isTop && !isMobile} handleFunction={scrollUp} />
            <ul onClick={listClickHandler} className="rides_list">
               <RidesListItems state={props.state} dispatch={props.dispatch} />
            </ul>
         </div>
         <div className="right_border"></div>
         <ScrollButton direction="bottom" display={!isBottom && !isMobile} handleFunction={scrollDown} />
      </div>
   )
}

export default Navbar;