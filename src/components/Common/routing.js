import { Redirect } from "react-router"
import { checkUrlValidity } from "./utilites"


const parseUrl = (url, rides, dispatch) => {

   const validUrls = rides.map(ride => ride.url)

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
}

export default parseUrl