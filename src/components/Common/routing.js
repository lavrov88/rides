const checkUrlValidity = (url, rides) => {
  const validUrls = rides.map(ride => ride.url)
  const index = validUrls.findIndex(item => item === url)
  if (index === -1) {
    return false
  } else {
    return true
  }
}

const routeWithUrl = (url, rides, dispatch) => {
  const urlValidity = checkUrlValidity(url, rides)
  if (urlValidity) {
    const action = {
      type: 'SET-ACTIVE-RIDE',
      url: url
    }
    dispatch(action)
  } else {
    return 'invalid'
  }
}

export default routeWithUrl