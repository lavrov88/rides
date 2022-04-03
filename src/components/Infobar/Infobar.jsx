import React from "react"
import './Infobar.scss'
import { addZero } from "../Common/utilites"
import RideMembers from "./InfobarRideMembers/InfobarRideMembers"
import RideIndicators from "./InfobarRideIndicators/InfobarRideIndicators"
import InfobarGallery from "./InfobarGallery/InfobarGallery"
import { useSwipeable } from "react-swipeable"
import InfobarRiderCardContainer from "./InfobarRiderCard/InfobarRiderCardContainer"

export const RideHeader = (props) => {
  const date = new Date(props.date)
  const dateString = `${addZero(date.getDate())}.${addZero(date.getMonth() + 1)}.${date.getFullYear()}`

  const handlers = useSwipeable({
    onSwiped: (eventData) => {
      if (!props.isMobile) {
        return
      }
      const action = {
        type: 'INFOBAR-HEADER-SWIPED',
        dir: eventData.dir
      }
      props.dispatch(action)
    },
    preventDefaultTouchmoveEvent: true
  })

  const headerClicked = (e) => {
    if (e.target.closest('a') || !props.isMobile) {
      return
    }
    const action = {
      type: 'TOOGLE-INFOBAR-COLLAPSE',
    }
    props.dispatch(action)
  }

  return (
    <div {...handlers} onClick={headerClicked} className="ride_header" >
      <div className="ride_header__expand_btn"></div>
      <div className="ride_header__name">
        <h2>{props.name}</h2>
      </div>
      <div className="ride_header__subheader">
        <div className="ride_header_date">
          {dateString}
        </div>
        <a href={props.strava}
          target="_blank" rel="noreferrer"
          className={"strava_link" + (props.strava ? "" : " disabled")} >
          <img src="./img/strava.png" alt="strava" className="strava_logo" />
          <div className="strava_text">This ride in Strava</div>
        </a>
      </div>
    </div>
  )
}

const Infobar = (props) => {
  const isCollapsed = props.isCollapsed
  const infobarEl = document.querySelector('.infobar')
  const infobarSwipe = useSwipeable({
    onSwipeStart: (eventData) => {
      if (!props.isMobile || infobarEl.scrollTop > 0 || eventData.dir !== 'Down') {
        return
      }

      const action = {
        type: 'INFOBAR-HEADER-SWIPED',
        dir: 'Down'
      }
      props.dispatch(action)
    },
  })

  return (
    <>
      <RideHeader
        name={props.ride.name}
        date={props.ride.startDate}
        isMobile={props.isMobile}
        strava={props.ride.stravaLink}
        dispatch={props.dispatch} />
      <div {...infobarSwipe} className={'infobar' + (isCollapsed ? ' collapsed' : '')}>
        <RideHeader
          name={props.ride.name}
          date={props.ride.startDate}
          isMobile={props.isMobile}
          strava={props.ride.stravaLink}
          dispatch={props.dispatch} />
        <RideMembers
          dispatch={props.dispatch}
          members={props.members}
          rides={props.rides}
          allBikers={props.allBikers}
          riderCard={props.riderCard} />
        <RideIndicators ride={props.ride} />
        <InfobarGallery
          photos={props.ride.photos}
          dispatch={props.dispatch} />
      </div>
    </>
  )
}

export default Infobar;