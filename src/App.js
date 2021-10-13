import './App.scss';
import NavbarContainer from './components/Navbar/Navbar';
import InfobarContainer from './components/Infobar/InfobarContainer';
import MapContainer from './components/Map/MapContainer';
import CollapseInfobarBtn from './components/Infobar/InfobarCollapseBtn/InfobarCollapseBtn';
import parseUrl from './components/Common/routing';
import checkMobile from './components/Common/checkMobile';
import MobileHeader from './components/MobileHeader/MobileHeader';
import MobileNavbar from './components/MobileNavbar/MobileNavbar';


function App(props) {
   const state = props.store.getState()
   const dispatch = props.store.dispatch.bind(props.store)
   const url = props.location.pathname

   parseUrl(url, state.rides, dispatch)
   window.onresize = (() => checkMobile(state.layout.isMobile, dispatch))

   const activeRideIndex = state.activeRide
   const map = state.rides[activeRideIndex].map

   if (!state.layout.isMobile) {
      return (
         <div className="App">
            <div className="rides_menu_container">
               <NavbarContainer state={state} dispatch={dispatch} />
               <InfobarContainer state={state} />
               <CollapseInfobarBtn isCollapsed={state.infobar.isCollapsed} dispatch={dispatch} />
            </div>
               <MapContainer map={map} />
         </div>
      )
   } else {
      return (
         <div className="App mobile">
            <MobileHeader dispatch={dispatch} />
            <div className="mobile_main">
               <div className="mobile_map">
                  <MapContainer map={map} />
               </div>
               <div className={"mobile_infobar" + (state.infobar.isCollapsed ? ' collapsed' : '')}>
                  <InfobarContainer state={state} />
                  <CollapseInfobarBtn isCollapsed={state.infobar.isCollapsed} 
                     isMobile={true} dispatch={dispatch} />
               </div>
               <MobileNavbar state={state} dispatch={dispatch} />
            </div>
         </div>
      )
   }
}

export default App;