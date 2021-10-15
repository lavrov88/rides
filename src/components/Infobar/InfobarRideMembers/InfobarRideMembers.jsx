import React from "react"
import './InfobarRideMembers.scss'

const RideMemberItem = (props) => {
   const img = new Image()
   img.src = props.photoLarge
   return (
      <div className="ride_member_item">
         <img src={props.photoSmall} alt={`Mr. ${props.name}`} className="ride_member_item__img" />
         <div className="ride_member_item__name">Mr. {props.name}</div>
      </div>
   )
}



const RideMembers = (props) => {
   const rideMembersItems = props.members
      .map(m => <RideMemberItem key={m.id} name={m.name}
         photoSmall={m.photoSmall} photoLarge={m.photoLarge} />)
   const openMemberPhoto = (e) => {
      if (!e.target.classList.contains('ride_member_item__img')) {
         return
      }
      const alt = e.target.alt
      const memberId = alt.slice(4)
      const src = props.members.find(m => m.name === memberId).photoLarge

      const action = {
         type: 'OPEN-MODAL-PHOTO',
         src: src,
         alt: alt
      }
      props.dispatch(action)
   }
   
   return (
      <div onClick={openMemberPhoto} className="ride_members">
         <h3>Members:</h3>
         <ul className="ride_members_items">
            {rideMembersItems}
         </ul>
      </div>
   )
}

export default RideMembers