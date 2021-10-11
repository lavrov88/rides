import React from "react"
import './InfobarRideMembers.scss'

const RideMemberItem = (props) => {
   return (
      <div className="ride_member_item">
         <img src={props.photoSmall} alt={`Mr. ${props.name}`} className="ride_member_item__img" />
         <div className="ride_member_item__name">Mr. {props.name}</div>
      </div>
   )
}

const RideMembers = (props) => {
   const rideMembersItems = props.members.map(m => <RideMemberItem key={m.id} name={m.name} photoSmall={m.photoSmall} />)
   return (
      <div className="ride_members">
         <h3>Members:</h3>
         <ul className="ride_members_items">
            {rideMembersItems}
         </ul>
      </div>
   )
}

export default RideMembers