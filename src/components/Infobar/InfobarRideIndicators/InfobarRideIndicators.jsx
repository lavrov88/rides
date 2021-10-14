import React from "react";
import { addZero, convertMsToStr, separateDecimal } from "../../Common/utilites";
import './InfobarRideIndicators.scss'

const RideIndicatorItem = (props) => {
   let integer, decimal
   if (props.decimal) {
      integer = separateDecimal(props.value, props.decimal)[0] + '.'
      decimal = separateDecimal(props.value, props.decimal)[1]
   } else {
      integer = props.value
      decimal = ''
   }
   
   return (
      <li className="ride_indicators_item">
         <div className="ride_indicators_item__value">
            {integer}<span className="decimal">{decimal}</span>
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
   const startTime = `${date.getHours()}:${addZero(date.getMinutes())}`

   return (
      <div className="ride_indicators">
         <ul className="ride_indicators__group group_1">
            <RideIndicatorItem value={props.ride.distance}
               decimal={2}
               unit={'km'}
               name={'Total distance'}/>
            <RideIndicatorItem value={props.ride.climb}
               unit={'m'}
               name={'Climb'} />
            <RideIndicatorItem value={props.ride.averageSpeed}
               decimal={1}
               unit={'km/h'}
               name={'Average speed'} />
         </ul>
         <ul className="ride_indicators__group group_2">
            <RideIndicatorItem value={startTime}
               name={'Start time'} />
            <RideIndicatorItem value={convertMsToStr(props.ride.fullTime)}
               name={'Full race time'} />
            <RideIndicatorItem value={convertMsToStr(props.ride.cleanTime)}
               name={'Net riding time'} />
         </ul>
      </div>
   )
}

export default RideIndicators