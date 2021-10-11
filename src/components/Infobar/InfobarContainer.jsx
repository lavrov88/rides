import Infobar from "./Infobar";
import { bikersFilter } from "../Common/utilites";

const InfobarContainer = (props) => {
   const activeRide = props.state.processedRides[props.state.activeRide]
   const membersNames = activeRide.members
   const allBikers = [...props.state.bikers]
   const members = bikersFilter(membersNames, allBikers)
   const isCollapsed = props.state.infobar.isCollapsed

   return <Infobar ride={activeRide} members={members} isCollapsed={isCollapsed} />
}

export default InfobarContainer;