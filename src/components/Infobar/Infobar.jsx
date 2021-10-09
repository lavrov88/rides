import React from "react"
import './Infobar.scss'
import { addZero, convertMsToStr } from "../Common/utilites"

const RideHeader = (props) => {
   const date = new Date(props.date)
   const dateString = `${addZero(date.getDate())}.${addZero(date.getMonth() + 1)}.${date.getFullYear()}`
   return (
      <div className="ride_header">
         <div className="ride_header__name">
            <h2>{props.name}</h2>
         </div>
         <div className="ride_header__subheader">
            <div className="ride_header_date">
               {dateString}
            </div>
            <a href={props.strava}
                  target="_blank" rel="noreferrer"
                  className="ride_indicators__strava_link" >
                  <img src="/img/strava.png" alt="strava" className="strava_logo"/>
                  <div className="strava_text">This ride in Strava</div>
            </a>
         </div>
      </div>
   )
}

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

const RideIndicatorItem = (props) => {
   return (
      <li className="ride_indicators_item">
         <div className="ride_indicators_item__value">
         {props.value}
         <span className="ride_indicators_item__unit">
            {props.unit ? (' ' + props.unit) : ''}
         </span>
         </div>
         <div className="ride_indicators_item__name">
            {props.name}
         </div>
      </li>
   )
}

const RideIndicators = (props) => {
   const date = new Date(props.ride.startDate)
   const startTime = `${date.getHours()}:${date.getMinutes()}`

   return (
      <div className="ride_indicators">
         <ul className="ride_indicators__group group_1">
            <RideIndicatorItem value={props.ride.distance}
               unit={'km'}
               name={'Total distance'}/>
            <RideIndicatorItem value={props.ride.climb}
               unit={'m'}
               name={'Climb'} />
         </ul>
         <ul className="ride_indicators__group group_2">
            <RideIndicatorItem value={startTime}
               name={'Start time'} />
            <RideIndicatorItem value={convertMsToStr(props.ride.fullTime)}
               name={'Full race time'} />
            <RideIndicatorItem value={convertMsToStr(props.ride.cleanTime)}
               name={'Only riding time'} />
         </ul>
      </div>
   )
}

const GalleryPhoto = (props) => {
   return (
      <li className="photo_item">
         <div className="photo_item__photo">{props.url}</div>
      </li>
   )
}

const RideGallery = (props) => {
   const galleryItems = props.photos.map(p => <GalleryPhoto key={p} url={p} />)
   return (
      <div className="ride_gallery">
         <h3>Ride gallery</h3>
         <ul className="ride_gallery_items">
            {galleryItems}
         </ul>
      </div>
   )
}

const Infobar = (props) => {
   return (
      <div className="infobar">
         <RideHeader name={props.ride.name} date={props.ride.startDate} strava={props.ride.stravaLink} />
         <RideMembers members={props.members} />
         <RideIndicators ride={props.ride} />
         <RideGallery photos={props.ride.photos}/>
      </div>
   )
}

export default Infobar;