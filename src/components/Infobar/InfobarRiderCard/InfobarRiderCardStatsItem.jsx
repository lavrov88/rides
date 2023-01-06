import React, { useState, useEffect } from "react"
import InfobarRiderCardDetailedStats from './InfobarRiderCardDetailedStats'

const InfobarRiderCardStatsItem = ({ name, rides, unit, cardIsOpened }) => {
  const [isOpened, setIsOpened] = useState(false)
  // if card was closed, also close per year stats
  useEffect(
    () => {
      if (!cardIsOpened) {
        setIsOpened(false)
      }
    },
    [ cardIsOpened ]
  )

  const getStats = {
    totalRidesCount(ridesArr) {
      return ridesArr.length
    },
    totalDistance(ridesArr) {
      let distance = 0

      ridesArr.forEach(r => {
        distance += r.distance
      })

      return distance.toFixed(0)
    },
    totalAverageSpeed(ridesArr) {
      const totalDistance = this.totalDistance(ridesArr)
      const totalCleanTime = ridesArr.reduce((sum, current) => sum + current.cleanTime, 0) / 1000 / 60 / 60

      return (totalDistance / totalCleanTime).toFixed(1)
    }
  }
  let totalValue = 0

  switch (name) {
    case 'Rides':
      totalValue = getStats.totalRidesCount(rides)
      break;

    case 'Distance':
      totalValue = getStats.totalDistance(rides)
      break;

    case 'Average speed':
      totalValue = getStats.totalAverageSpeed(rides)
      break;
  
    default:
      break;
  }

  return (
    <li className={'stats_item' + (isOpened ? ' opened' : '')}>
      <div
        onClick={() => {setIsOpened(!isOpened)}}
        className="stats_item_collapsed"
      >
        <div className="stats_item__item_name">
          {name}
        </div>
        <div className="stats_item__item_value">
          <div>
            {totalValue} <span className="stats_item__item_value_unit"> {unit}</span>
          </div>
        </div>
        <button
          className="stats_item__collapse_btn"
        >
          <div className="stats_item__collapse_arrow"></div>
        </button>
      </div>
      <div className="stats_item_opened" style={{ display: isOpened ? 'block' : 'none' }}>
        <InfobarRiderCardDetailedStats
          name={name}
          rides={rides}
          unit={unit}
          getStats={getStats}
        />
      </div>
    </li>
  )
}

export default InfobarRiderCardStatsItem