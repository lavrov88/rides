import React, { useEffect, useState } from "react"
import InfobarRiderCardStatsItem from './InfobarRiderCardStatsItem.jsx'
import './InfobarRiderCard.scss'

const InfobarRiderCard = ({ isOpened, photoSmall, photoLarge, name,
                            period, riderCardElement, ridesWithThisRider,
                            isFading, closeRiderCard, dispatch } ) => {

  const [ maxCardHeight, setMaxCardHeight ] = useState(0)
  // eslint-disable-next-line
  useEffect(() => {
    const screenHeight = document.documentElement.clientHeight
    const membersElOffset = document.querySelector('.ride_members').offsetTop
    setMaxCardHeight(screenHeight - membersElOffset - 40)
  })

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
      className={"rider_card" + (isOpened ? " opened" : "") + (isFading ? " fading" : "")}
    >
      <div className="rider_card_inner" style={{ 'maxHeight': maxCardHeight + 'px' }}>
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
              rides={ridesWithThisRider}
              unit={null}
              cardIsOpened={isOpened}
            />
            <InfobarRiderCardStatsItem
              name={'Distance'}
              rides={ridesWithThisRider}
              unit={'km'}
              cardIsOpened={isOpened}
            />
            <InfobarRiderCardStatsItem
              name={'Average speed'}
              rides={ridesWithThisRider}
              unit={'km/h'}
              cardIsOpened={isOpened}
            />
          </ul>
        </div>
      </div>
      <button onClick={closeRiderCard} className="close_rider_card_btn"></button>
    </div>
  )
}

export default InfobarRiderCard