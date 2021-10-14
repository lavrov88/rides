import './App.scss';
import NavbarContainer from './components/Navbar/Navbar';
import InfobarContainer from './components/Infobar/InfobarContainer';
import CollapseInfobarBtn from './components/Infobar/InfobarCollapseBtn/InfobarCollapseBtn';
import parseUrl from './components/Common/routing';
import checkMobile from './components/Common/checkMobile';
import MobileHeader from './components/MobileHeader/MobileHeader';
import MobileNavbar from './components/MobileNavbar/MobileNavbar';
import Map from './components/Map/Map';
import { Redirect } from 'react-router';


function App(props) {
   const state = props.store.getState()
   const dispatch = props.store.dispatch.bind(props.store)
   const url = props.location.pathname
   const urlIsValid = parseUrl(url, state.rides, dispatch)
   
   if (!urlIsValid) {
      return <Redirect to={state.processedRides[0].url} />
   } else {
      const action = {
         type: 'SET-ACTIVE-RIDE',
         url: url
      }
      dispatch(action)
   }

   window.onresize = (() => checkMobile(state.layout.isMobile, dispatch))

   const activeRideIndex = state.activeRide
   const map = state.processedRides[activeRideIndex].map

   if (!state.layout.isMobile) {
      return (
         <div className="App">
            <div className="rides_menu_container">
               <NavbarContainer state={state} dispatch={dispatch} />
               <InfobarContainer state={state} />
               <CollapseInfobarBtn isCollapsed={state.infobar.isCollapsed} dispatch={dispatch} />
            </div>
               <Map map={map} />
         </div>
      )
   } else {
      return (
         <div className="App mobile">
            <MobileHeader navbarIsOpen={state.layout.mobileNavbarIsOpen} dispatch={dispatch} />
            <div className="mobile_main">
               <div className="mobile_map">
                  <Map map={map} />
               </div>
               <div className={"mobile_infobar" + (state.infobar.isCollapsed ? ' collapsed' : '')}>
                  <InfobarContainer state={state} dispatch={dispatch} />
               </div>
               <MobileNavbar state={state} dispatch={dispatch} />
            </div>
         </div>
      )
   }
}

export default App;