import React from "react"
import InfobarRiderCard from "./InfobarRiderCard"

const InfobarRiderCardContainer = ({ allBikers, rides, riderCard, dispatch }) => {

  React.useEffect(() => {
    const infobarHeight = document.querySelector('.infobar .ride_header').offsetHeight
    const riderCardElement = document.querySelector('.rider_card')
    riderCardElement.style.top = (infobarHeight + 30) + 'px'

    const riderCardCloseHandler = ((e) => {
      if (!e.target.closest('.rider_card') && !e.target.closest('.modal') && isOpened) {
        closeRiderCard()
      }
    })

    document.addEventListener('click', riderCardCloseHandler)

    return () => {
      document.removeEventListener('click', riderCardCloseHandler)
    }
  })

  const closeRiderCard = () => {
    const action = {
      type: 'CLOSE-RIDER-CARD'
    }
    dispatch(action)
  }

  const isOpened = riderCard.isOpened
  const activeRiderId = riderCard.rider
  let activeRider = null
  let photoSmall = null
  let photoLarge = null
  let name = null
  let ridesWithThisRider = []
  let activeYears = []
  let firstAndLastActiveYears = []
  let totalDistance = 0
  let totalCleanTime = 0
  let averageSpeed = 0

  if (activeRiderId) {
    activeRider = allBikers.filter(b => b.id === activeRiderId)[0]
    photoSmall = activeRider.photoSmall
    photoLarge = activeRider.photoLarge
    name = activeRider.name 

    ridesWithThisRider = [...rides].filter(r => r.members.includes(name))
    activeYears = [...ridesWithThisRider].map(r => r.id.slice(0, 4)).sort()
    firstAndLastActiveYears = [activeYears[0], activeYears[activeYears.length - 1]]

    totalDistance = Math.round(ridesWithThisRider.reduce((sum, current) => sum + current.distance, 0))
    totalCleanTime = ridesWithThisRider.reduce((sum, current) => sum + current.cleanTime, 0) / 1000 / 60 / 60
    averageSpeed = (totalDistance / totalCleanTime).toFixed(1)
  }

  return (
    <InfobarRiderCard
      isOpened={isOpened}
      photoSmall={photoSmall}
      photoLarge={photoLarge}
      name={name}
      period={[firstAndLastActiveYears[0], firstAndLastActiveYears[1]]}
      ridesCount={ridesWithThisRider.length}
      totalDistance={totalDistance}
      averageSpeed={averageSpeed}
      closeRiderCard={closeRiderCard}
      dispatch={dispatch}
    />
  )
}

export default InfobarRiderCardContainer