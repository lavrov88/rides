const checkMobile = (isMobile, dispatch) => {

   const action = {
      type: 'TOGGLE-MOBILE-LAYOUT'
   }

   if (window.innerWidth < 960) {
      if (isMobile) return
      action.mobile = true
      dispatch(action)
   } else {
      if (!isMobile) return
      action.mobile = false
      dispatch(action)
   }
}

export default checkMobile