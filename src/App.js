import './App.scss';
import NavbarContainer from './components/Navbar/Navbar';
import InfobarContainer from './components/Infobar/InfobarContainer';
import MapContainer from './components/Map/MapContainer';
import { checkUrlValidity } from './components/Common/utilites';
import { Redirect } from 'react-router';
import CollapseInfobarBtn from './components/Infobar/InfobarCollapseBtn/InfobarCollapseBtn';


function App(props) {
   const state = props.store.getState()
   const dispatch = props.store.dispatch.bind(props.store)

   const url = props.location.pathname
   const validUrls = state.rides.map(ride => ride.url)

   if (!checkUrlValidity(url, validUrls)) {
      return <Redirect to={validUrls[0]} />
   }

   const changeActiveRide = (url) => {
      const action = {
         type: 'SET-ACTIVE-RIDE',
         url: url
      }
      dispatch(action)
   }
   changeActiveRide(url)

   const activeRideIndex = state.activeRide
   const map = state.rides[activeRideIndex].map

   return (
         <div className="App">
            <div className="rides_menu_container">
               <NavbarContainer state={state} dispatch={dispatch} />
               <InfobarContainer state={state} />
               <CollapseInfobarBtn isCollapsed={state.infobar.isCollapsed} dispatch={dispatch} />
            </div>
               <MapContainer map={map} />
         </div>
   );
}

export default App;
 