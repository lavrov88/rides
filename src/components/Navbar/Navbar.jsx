import React from "react"
import { Link } from "react-router-dom"
import { addZero, bikersFilter } from "../Common/utilites"
import './Navbar.scss'

const Logo = (props) => {
   return (
      <div className="header_logo">
         <h1>Rides history</h1>
      </div>
   )
}

const MemberPic = (props) => {
   return (
      <img src={props.photoSmall} alt={props.name} 
         className={`rides_list_item__member_pic${props.long ? ' long' : ''}`} />
   )
}

const MembersPicFor3 = (props) => {
   const m = props.members
   return (
      <>
         <div>
            <MemberPic photoSmall={m[0].photoSmall} name={m[0].name} long={true} />
         </div>
         <div>
            <MemberPic photoSmall={m[1].photoSmall} name={m[1].name}/>
            <MemberPic photoSmall={m[2].photoSmall} name={m[2].name}/>
         </div>
      </>
   )
}

const RideListItemMembersPhotos = (props) => {
   const members = bikersFilter(props.members, props.allBikers)
   let membersPics
   if (members.length === 3) {
      return <MembersPicFor3 members={members} />
      //membersPics = members.map((m, i) => <MemberPic photoSmall={m.photoSmall} name={m.name} long={i === 0} />)
   } else if (members.length === 2) {
      membersPics = members.map(m => <MemberPic photoSmall={m.photoSmall} name={m.name} long={true} />)
   } else {
      membersPics = members.map(m => <MemberPic photoSmall={m.photoSmall} name={m.name} />)
   }
   return membersPics
}

const RidesListItem = (props) => {
   const date = new Date(props.date)
   const dateString = `${addZero(date.getDate())}.${addZero(date.getMonth() + 1)}`
   const flooredDistance = Math.floor(props.distance)
   return (
      <li className="rides_list_item">
         <Link to={'/' + props.id}>
            <div className={`rides_list_item__container ${props.active ? ' active' : ''}`}>
               <div className="rides_list_item__left">
                  <div className="rides_list_item__members">
                     <RideListItemMembersPhotos members={props.members} allBikers={props.allBikers} />
                  </div>
               </div>
               <div className="rides_list_item__center">
                  <div className="rides_list_item__name">{props.name}</div>
                  <div className="rides_list_item__date">{dateString}</div>
               </div>
               <div className="rides_list_item__right">
                  <div className="rides_list_item__distance">
                     <div className="rides_list_item__distance_num">
                        {flooredDistance}
                     </div>
                     <div className="rides_list_item__distance_unit">
                        km
                     </div>
                  </div>
               </div>
            </div>
         </Link>
      </li>
   )
}

const RidesListItems = (props) => {
   return props.state.rides
      .map((r, i) => <RidesListItem 
         id={r.id}
         key={r.id} 
         name={r.name}
         date={r.startDate}
         distance={r.distance}
         members={r.members}
         allBikers={props.state.bikers}
         active={props.state.activeRide === i ? true : false} />)
}

const Navbar = (props) => {
   return (
      <div className="navbar">
         <Logo />
         <div className="riders_list_wrapper">
            <ul className="rides_list">
               <RidesListItems state={props.state} />
            </ul>
         </div>
         
      </div>
   )
}

export default Navbar;