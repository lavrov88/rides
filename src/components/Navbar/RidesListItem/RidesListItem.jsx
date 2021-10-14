import React from "react"
import './RidesListItem.scss'
import { addZero, bikersFilter, separateDecimal } from "../../Common/utilites"
import { Link } from "react-router-dom"


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
   } else if (members.length === 2) {
      membersPics = members.map(m => <MemberPic 
         key={m.name}
         photoSmall={m.photoSmall} 
         name={m.name} 
         long={true} />)
   } else {
      membersPics = members.map(m => <MemberPic 
         key={m.name}
         photoSmall={m.photoSmall} 
         name={m.name} />)
   }
   return membersPics
}

const RidesListItem = (props) => {
   const date = new Date(props.date)
   const dateString = `${addZero(date.getDate())}.${addZero(date.getMonth() + 1)}.${date.getFullYear()}`

   const returnAdditionalInfo = () => {
      let info = {}
      if (props.sortParameter === 'date' || props.sortParameter === 'distance') {
         info.value = Math.floor(props.distance)
         info.unit = 'km'
      } else if (props.sortParameter === 'speed') {
         info.value = separateDecimal(props.speed)[0] + '.'
         info.decimal = separateDecimal(props.speed)[1]
         info.unit = 'km/h'
      } else if (props.sortParameter === 'time') {
         info.decimal = separateDecimal(props.time / 1000 / 60 / 60)[1] > 5 ? 5 : ''
         info.value = Math.floor(props.time / 1000 / 60 / 60) + (info.decimal > 0 ? '.' : '')
         info.unit = 'h'
      }
      return info
   }

   return (
      <li className="rides_list_item">
         <Link to={props.url}>
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
                        {returnAdditionalInfo().value}<span className="decimal">{returnAdditionalInfo().decimal}</span>
                     </div>
                     <div className="rides_list_item__distance_unit">
                        {returnAdditionalInfo().unit}
                     </div>
                  </div>
               </div>
            </div>
         </Link>
      </li>
   )
}

export default RidesListItem