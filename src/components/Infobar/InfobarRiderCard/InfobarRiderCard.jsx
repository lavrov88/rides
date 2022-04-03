import React from "react"
import './InfobarRiderCard.scss'

const InfobarRiderCardStatsItem = ({ name, value, unit }) => {
  return (
    <li className="stats_item">
      <div className="stats_item__item_name">
        {name}
      </div>
      <div className="stats_item__item_value">
        <div>
          {value} <span className="stats_item__item_value_unit"> {unit}</span>
        </div>
      </div>
    </li>
  )
}

const InfobarRiderCard = ({ isOpened, photoSmall, photoLarge, name,
                           period, riderCardElement, ridesCount, totalDistance,
                           isFading, averageSpeed, closeRiderCard, dispatch } ) => {

  let outputPeriod = null
  if (period[0] === period[1]) {
    outputPeriod = `of ${period[0]}`
  } else {
    outputPeriod = `${period[0]}-${period[1]}`
  }

  const openLargePhoto = () => {
    const action = {
      type: 'OPEN-MODAL-PHOTO',
      src: [{
        url: photoLarge,
        alt: name
      }]
    }
    dispatch(action)
  }

  return (
    <div 
      ref={riderCardElement} 
      className={"rider_card" + (isOpened ? " opened" : "") + (isFading ? " fading" : "")} >
      <div className="rider_card_header">
        <div onClick={openLargePhoto} className="rider_card_header_photo">
          <img src={photoSmall} alt={`Mr. ${name}`} className="rider_card_header_photo__img" />
          <img src="./img/zoom_in.svg" alt="zoom_in" className="rider_card_header_photo__img_zoom" />
        </div>
        <div className="rider_card_header__name">
          <h3>Mr. {name}</h3>
        </div>
      </div>
      <div className="rider_card_main">
        <h4 className="rider_card_stats_title">Total in the period {outputPeriod}:</h4>
        <ul className="stats">
          <InfobarRiderCardStatsItem
            name={'Rides'}
            value={ridesCount} />
          <InfobarRiderCardStatsItem
            name={'Distance'}
            value={totalDistance}
            unit={'km'} />
          <InfobarRiderCardStatsItem
            name={'Average speed'}
            value={averageSpeed}
            unit={'km/h'} />
        </ul>
      </div>
      <button onClick={closeRiderCard} className="close_rider_card_btn"></button>
    </div>
  )
}

export default InfobarRiderCard