import bikers from "./bikers-data";
import rides from "./rides-data";
import { convertStrToDate, convertStrToMs } from "../components/Common/utilites";
import checkMobile from "../components/Common/checkMobile";

const store = {
   _state: {
      rides: [],
      processedRides: [],
      bikers: [],
      activeRide: null,
      infobar: {
         isCollapsed: false
      },
      navbar: {
         filterMenuIsOpened: false,
         sortMenuIsOpened: false,
         output: {
            sortParameter: 'date',
            sortFromBiggest: true,
            filteredBikers: []
         }
      },
      layout: {
         mobileNavbarIsOpen: false,
         isMobile: false
      }
   },

   _callSubscriber() {
   },

   subscribe(observer) {
      this._callSubscriber = observer
   },

   _processRides() {
      let tempArr = [...this._state.rides]
      const output = this._state.navbar.output

      // SORTING

      const sortRides = (parameter) => {
         if (output.sortFromBiggest) {
            tempArr.sort((a, b) => a[parameter] > b[parameter] ? -1 : 1)
         } else {
            tempArr.sort((a, b) => a[parameter] > b[parameter] ? 1 : -1)
         }
      }

      switch (output.sortParameter) {
         case 'date':
            sortRides('startDate')
            break
         case 'distance':
            sortRides('distance')
            break
         case 'time':
            sortRides('cleanTime')
            break
         case 'speed':
            sortRides('averageSpeed')
            break
         default:
            sortRides('startDate')
      }

      // FILTERING

      const checkBikers = (ride, bikers) => {
         for (let biker of bikers) {
            if (ride.members.find(member => member === biker)) {
               return true
            }
         }
         return false
      }
      tempArr = tempArr.filter(ride => checkBikers(ride, output.filteredBikers))
      this._state.processedRides = [...tempArr]
   },

   getState() {
      return this._state
   },

   dispatch(action) {
      switch (action.type) {
         case 'SET-ACTIVE-RIDE':
            const index = this._state.processedRides.findIndex(el => el.url === action.url)
            if (index !== -1) {
               this._state.activeRide = index
            } else {
               this._state.activeRide = 0
            }
            break
         case 'TOGGLE-MOBILE-LAYOUT':
            this._state.layout.isMobile = action.mobile
            this._callSubscriber()
            break
         case 'TOGGLE-FILTER-MENU':
            if (this._state.navbar.filterMenuIsOpened) {
               this._state.navbar.filterMenuIsOpened = false
            } else {
               this._state.navbar.sortMenuIsOpened = false
               this._state.navbar.filterMenuIsOpened = true
            }
            this._callSubscriber()
            break
         case 'TOGGLE-FILTERED-BIKER':
            const filteredBikers = this._state.navbar.output.filteredBikers
            const filterIndex = filteredBikers.findIndex(b => b === action.bikerId)
            if (filterIndex === -1) {
               filteredBikers.push(action.bikerId)
               filteredBikers.sort((a, b) => a > b ? 1 : -1)
            } else {
               if (filteredBikers.length > 1) {
                  filteredBikers.splice(filterIndex, 1)
               }
            }
            this._processRides()
            this._callSubscriber()
            break
         case 'TOGGLE-SORT-MENU':
            if (this._state.navbar.sortMenuIsOpened) {
               this._state.navbar.sortMenuIsOpened = false
            } else {
               this._state.navbar.filterMenuIsOpened = false
               this._state.navbar.sortMenuIsOpened = true
            }
            this._callSubscriber()
            break
         case 'TOGGLE-RIDES-SORT':
            this._state.navbar.output.sortParameter = action.sortParameter
            this._state.navbar.output.sortFromBiggest = action.sortFromBiggest
            this._state.navbar.sortMenuIsOpened = false
            this._processRides()
            this._callSubscriber()
            break
         case 'TOOGLE-INFOBAR-COLLAPSE':
            this._state.infobar.isCollapsed
               ? this._state.infobar.isCollapsed = false
               : this._state.infobar.isCollapsed = true
            document.querySelector('.infobar').scrollTop = 0
            this._callSubscriber()
            break
         case 'INFOBAR-HEADER-SWIPED':
            if (action.dir === 'Up') {
               if (this._state.infobar.isCollapsed) {
                  this._state.infobar.isCollapsed = false
               }
            }
            if (action.dir === 'Down') {
               if (!this._state.infobar.isCollapsed) {
                  this._state.infobar.isCollapsed = true
               }
            }
            document.querySelector('.infobar').scrollTop = 0
            this._callSubscriber()
            break
         case 'TOGGLE-MOBILE-MENU':
            this._state.layout.mobileNavbarIsOpen 
               ? this._state.layout.mobileNavbarIsOpen = false
               : this._state.layout.mobileNavbarIsOpen = true
            this._callSubscriber()
            break
         default:
            console.error(`unknown action type: ${action.type}`)
      }
   },

   initState() {
      initBikers.bind(this)()
      initRides.bind(this)()
      if (!this._state.activeRide) {
         this._state.activeRide = 0
      }
      checkMobile(this._state.layout.isMobile, this.dispatch.bind(this))
      if (this._state.layout.isMobile) {
         this._state.infobar.isCollapsed = true
      }

      function initBikers() {
         this._state.bikers.length = 0
         bikers.forEach(biker => {
            this._state.bikers = [...this._state.bikers, biker]
         })
         this._state.bikers.sort((a, b) => {
            if (a.id > b.id) {
               return 1
            } else return -1
         })
         this._state.navbar.output.filteredBikers = [...this._state.bikers.map(b => b.id)]
      }

      function initRides() {
         this._state.rides.length = 0
         rides.forEach(el => {
            let ride = {
               name: el.name,
               id: `${el.startDate}T${el.startTime}`.match(/[0-9]/gi).join(''),
               url: '/rides/' + el.startDate,
               map: el.map,
               startDate: convertStrToDate(el.startDate, el.startTime),
               fullTime: convertStrToMs(el.fullTime),
               cleanTime: convertStrToMs(el.cleanTime),
               distance: el.distance,
               climb: el.climb,
               averageSpeed: +(el.distance / convertStrToMs(el.cleanTime) * 1000 * 60 * 60).toFixed(1),
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
         this._state.processedRides = [...this._state.rides]
      }
   }
}

export default store
window.store = store
window.state = store.getState()