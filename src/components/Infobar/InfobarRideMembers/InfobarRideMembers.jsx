import React from "react"
import './InfobarRideMembers.scss'
import InfobarRiderCardContainer from '../InfobarRiderCard/InfobarRiderCardContainer'

const RideMemberItem = (props) => {
  const img = new Image()
  img.src = props.photoLarge
  return (
    <ul className="ride_member_item" data-name={props.name} >
      <div className="ride_member_item__photo">
        <img src={props.photoSmall} alt={`Mr. ${props.name}`} className="ride_member_item__photo_img" />
      </div>
      <div className="ride_member_item__name">Mr. {props.name}</div>
    </ul>
  )
}

const RideMembers = (props) => {
  const rideMembersItems = props.members
    .map(m => <RideMemberItem key={m.id} name={m.name}
      photoSmall={m.photoSmall} photoLarge={m.photoLarge} />)

  const openRiderCard = (e) => {
    if (!e.target.closest('.ride_member_item')) {
      return
    }

    const name = e.target.closest('.ride_member_item').dataset.name
    const action = {
      type: 'OPEN-RIDER-CARD',
      payload: name
    }
    props.dispatch(action)

  }

  return (
    <div onClick={openRiderCard} className="ride_members">
      <h3>Members:</h3>
      <ul className="ride_members_items">
        {rideMembersItems}
      </ul>
      <InfobarRiderCardContainer 
          rides={props.rides} 
          allBikers={props.allBikers}
          riderCard={props.riderCard}
          dispatch={props.dispatch} /> 
    </div>
  )
}

export default RideMembers