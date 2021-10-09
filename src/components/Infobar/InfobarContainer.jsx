import Infobar from "./Infobar";
import { bikersFilter } from "../Common/utilites";

const InfobarContainer = (props) => {
   const activeRide = props.state.rides[props.state.activeRide]
   const membersNames = activeRide.members
   const allBikers = [...props.state.bikers]
   const members = bikersFilter(membersNames, allBikers)

   return <Infobar ride={activeRide} members={members} />
}

export default InfobarContainer;