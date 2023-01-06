import React from "react"

const StatPerYearString = ({ year, points, value, unit }) => {
  return (
    <li className="stats_per_year_item">
      <div className="stats_per_year_item__left">
        {year}
      </div>
      <div className="stats_per_year_item__right">
        <div
          className="stats_per_year_item__line"
          style={{ width: points + '%' }}
        ></div>
        <div className="stats_per_year_item__value">
          {value}
          <span className="stats_per_year_item__unit">{unit}</span>
        </div>
      </div>
    </li>
  )
}

const InfobarRiderCardDetailedStats = ({ name, rides, unit, getStats }) => {
  const activeYears = []
  const statsByYear = []
  const maxPoints = 45
  let getStatsFunc = null;
  let yearWithMaxResult = null;

  switch (name) {
    case 'Rides':
      getStatsFunc = getStats.totalRidesCount
      break;

    case 'Distance':
      getStatsFunc = getStats.totalDistance
      break;

    case 'Average speed':
      getStatsFunc = getStats.totalAverageSpeed.bind(getStats)
      break;
  
    default:
      break;
  }

  rides.forEach(r => {
    const rideYear = r.id.slice(0, 4)
    if (!activeYears.includes(rideYear)) {
      activeYears.push(rideYear)
    }
  })

  activeYears.forEach(year => {
    const ridesAtYear = rides.filter(r => r.id.slice(0, 4) === year)
    const statsObj = {
      year,
      value: getStatsFunc(ridesAtYear)
    }
    statsByYear.push(statsObj)
  })

  // find max result for years and give it points from maxPoints variable
  statsByYear.forEach(stats => {
    if (!yearWithMaxResult || +stats.value > +yearWithMaxResult.value) {
      yearWithMaxResult = stats
    }
  })
  if (yearWithMaxResult) {
    yearWithMaxResult.points = maxPoints
  }

  // give points to all other years
  statsByYear.forEach(stats => {
    if (!stats.points) {
      const currentValue = stats.value
      const maxValue = yearWithMaxResult.value
      stats.points = Math.round((currentValue / maxValue) * maxPoints)
    }
  })

  const yearsStatsList = statsByYear.map(stats => {
    return <StatPerYearString
      key={stats.year}
      year={stats.year}
      points={stats.points}
      value={stats.value}
      unit={unit}
    />
  })

  return (
    <ul className="stats_per_year">
        {yearsStatsList}
      </ul>
  )
}

export default InfobarRiderCardDetailedStats