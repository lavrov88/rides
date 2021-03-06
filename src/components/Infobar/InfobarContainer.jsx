import Infobar from "./Infobar";
import { bikersFilter } from "../Common/utilites";

const InfobarContainer = (props) => {
  const activeRide = props.state.processedRides[props.state.activeRide]
  const membersNames = activeRide.members
  const allBikers = [...props.state.bikers]
  const members = bikersFilter(membersNames, allBikers)
  const isMobile = props.state.layout.isMobile
  const isCollapsed = props.state.infobar.isCollapsed
  const rides = props.state.rides
  const riderCard = props.state.infobar.riderCard

  return <Infobar
    ride={activeRide}
    allBikers={allBikers}
    members={members}
    rides={rides}
    riderCard={riderCard}
    dispatch={props.dispatch}
    isCollapsed={isCollapsed}
    isMobile={isMobile} />
}

export default InfobarContainer;