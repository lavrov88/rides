import React from "react"
import InfobarRiderCard from "./InfobarRiderCard"

const InfobarRiderCardContainer = ({ allBikers, rides, riderCard, dispatch }) => {

  const [isFading, setIsFading] = React.useState(false)
  const riderCardElement = React.useRef(null)

  React.useEffect(() => {
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

    setIsFading(true)
    riderCardElement.current.ontransitionend = (e) => {
      if (e.target === riderCardElement.current) {
        dispatch(action)
        setIsFading(false)
      }
    }
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

  if (activeRiderId) {
    activeRider = allBikers.filter(b => b.id === activeRiderId)[0]
    photoSmall = activeRider.photoSmall
    photoLarge = activeRider.photoLarge
    name = activeRider.name 

    ridesWithThisRider = [...rides].filter(r => r.members.includes(name))
    activeYears = [...ridesWithThisRider].map(r => r.id.slice(0, 4)).sort()
    firstAndLastActiveYears = [activeYears[0], activeYears[activeYears.length - 1]]
  }

  return (
    <InfobarRiderCard
      isOpened={isOpened}
      isFading={isFading}
      photoSmall={photoSmall}
      photoLarge={photoLarge}
      name={name}
      period={[firstAndLastActiveYears[0], firstAndLastActiveYears[1]]}
      ridesWithThisRider={ridesWithThisRider}
      closeRiderCard={closeRiderCard}
      dispatch={dispatch}
      riderCardElement={riderCardElement}
    />
  )
}

export default InfobarRiderCardContainer