import React from "react"
import './Infobar.scss'
import { addZero } from "../Common/utilites"
import RideMembers from "./InfobarRideMembers/InfobarRideMembers"
import RideIndicators from "./InfobarRideIndicators/InfobarRideIndicators"
import InfobarGallery from "./InfobarGallery/InfobarGallery"

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
                  className="strava_link" >
                  <img src="/img/strava.png" alt="strava" className="strava_logo"/>
                  <div className="strava_text">This ride in Strava</div>
            </a>
         </div>
      </div>
   )
}

const Infobar = (props) => {
   const isCollapsed = props.isCollapsed
   return (
      <div className={'infobar' + (isCollapsed ? ' collapsed' : '')}>
         <RideHeader name={props.ride.name} date={props.ride.startDate} strava={props.ride.stravaLink} />
         <RideMembers members={props.members} />
         <RideIndicators ride={props.ride} />
         <InfobarGallery photos={props.ride.photos}/>
      </div>
   )
}

export default Infobar;