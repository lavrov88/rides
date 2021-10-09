import './App.scss';
import NavbarContainer from './components/Navbar/Navbar';
import InfobarContainer from './components/Infobar/InfobarContainer';
import MapContainer from './components/Map/MapContainer';
import store from './store/store';


function App(props) {
   const activeRideUrl =  props.match.params.number
   const state = store.getState()
   store.setActiveRide(activeRideUrl)

   return (
         <div className="App">
            <div className="rides_menu_container">
               <NavbarContainer state={state} />
               <InfobarContainer state={state} />
            </div>
               <MapContainer state={state} />
         </div>
   );
}

export default App;
 