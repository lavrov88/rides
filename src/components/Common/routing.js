const parseUrl = (url, rides) => {

   const validUrls = rides.map(ride => ride.url)

   const checkUrlValidity = (url, variants) => {
      const index = variants.findIndex(item => item === url)
      if (index === -1) {
         return false
      } else {
         return true
      }
   }

   if (!checkUrlValidity(url, validUrls)) {
      return false
   } else {
      return true
   }
}

export default parseUrl