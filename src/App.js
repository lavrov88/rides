import './App.scss';
import NavbarContainer from './components/Navbar/Navbar';
import InfobarContainer from './components/Infobar/InfobarContainer';
import CollapseInfobarBtn from './components/Infobar/InfobarCollapseBtn/InfobarCollapseBtn';
import checkMobile from './components/Common/checkMobile';
import MobileHeader from './components/MobileHeader/MobileHeader';
import MobileNavbar from './components/MobileNavbar/MobileNavbar';
import Map from './components/Map/Map';
import { Redirect } from 'react-router';
import ModalPhoto from './components/Modal/ModalPhoto/ModalPhoto';
import routeWithUrl from './components/Common/routing';


function App(props) {
   const state = props.store.getState()
   const dispatch = props.store.dispatch.bind(props.store)
   const url = props.location.pathname

   const urlValidity = routeWithUrl(url, state.rides, dispatch, state.processedRides)
   if (urlValidity === 'invalid') {
      return <Redirect to={state.processedRides[0].url} />
   }

   const activeRideIndex = state.activeRide
   const map = state.processedRides[activeRideIndex].map
   window.onresize = (() => checkMobile(state.layout.isMobile, dispatch))

   if (!state.layout.isMobile) {
      return (
         <div className="App">
            <div className="rides_menu_container">
               <NavbarContainer state={state} dispatch={dispatch} />
               <InfobarContainer state={state} dispatch={dispatch} />
               <CollapseInfobarBtn isCollapsed={state.infobar.isCollapsed} dispatch={dispatch} />
            </div>
               <Map map={map} />
               <ModalPhoto src={state.layout.modal.src} number={state.layout.modal.number}
                  isOpened={state.layout.modal.isOpened} dispatch={dispatch} />
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
            <ModalPhoto src={state.layout.modal.src} number={state.layout.modal.number}
               isOpened={state.layout.modal.isOpened} dispatch={dispatch} />
         </div>
      )
   }
}

export default App;