import bikers from "./bikers-data";
import rides from "./rides-data";
import { convertStrToDate, convertStrToMs } from "../components/Common/utilites";

const store = {
   _state: {
      rides: [],
      bikers: [],
      activeRide: null
   },

   getState() {
      return this._state
   },

   setActiveRide(input) {
      const index = this._state.rides.findIndex(el => el.id === input)
      if (index !== -1) {
         this._state.activeRide = index
      } else {
         this._state.activeRide = 0
      }
   },

   initState() {
      this._initBikers()
      this._initRides()
      if (!this._state.activeRide) {
         this._state.activeRide = 0
      }
   },

   _initBikers() {
      this._state.bikers.length = 0
      bikers.forEach(biker => {
         this._state.bikers = [...this._state.bikers, biker]
      })
      this._state.bikers.sort((a, b) => {
         if (a.id > b.id) {
            return 1
         } else return -1
      })
   },

   _initRides() {
      this._state.rides.length = 0
      rides.forEach(el => {
         let ride = {
            name: el.name,
            id: `${el.startDate}T${el.startTime}`.match(/[0-9]/gi).join(''),
            map: el.map,
            startDate: convertStrToDate(el.startDate, el.startTime),
            fullTime: convertStrToMs(el.fullTime),
            cleanTime: convertStrToMs(el.cleanTime),
            distance: el.distance,
            climb: el.climb,
            members: el.members,
            stravaLink: el.stravaLink,
            photos: [...el.photos]
         }

         this._state.rides = [...this._state.rides, ride]
      })
      this._state.rides.sort((a, b) => {
         if (a.id > b.id) {
            return -1
         } else return 1
      })
   }
}

export default store;
window.store = store;