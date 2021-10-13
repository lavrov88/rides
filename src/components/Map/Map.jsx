import React from "react"
import './Map.scss'

const checkUrl = (url) => {
   if (url.match(/https:\/\/api-maps\.yandex\.ru.+scroll=true/gm)) {
      return true
   } else {
      return false
   }
}

const rerenderMap = (props) => {
   const appEl = document.querySelector('.map_container')
   const containerHeight = appEl.scrollHeight
   const mapWithHeight = props.map.replace(/height=\d+/gm, `height=${containerHeight}`)
   const mapUrl = mapWithHeight.replace(/.+src="|"><\/script>/gm, '')
   const mapEl = document.querySelector('.map')
   mapEl.innerHTML = ''

   if (checkUrl(mapUrl)) {
   // if (false) {
      const script = document.createElement('script')
      script.src = mapUrl
      script.async = true
      mapEl.appendChild(script)
   } else {
      const errorMessage = document.createElement('div')
      errorMessage.classList.add('map_error_wrapper')
      errorMessage.innerHTML = '<div>Map for this ride is not ready yet...</div>'
      mapEl.appendChild(errorMessage)
   }
}

class Map extends React.PureComponent {
   componentDidMount() {
      rerenderMap(this.props)
   }
   componentDidUpdate() {
      rerenderMap(this.props)
   }
   
   render() {
      return (
         <div className="map_container">
            <div className="map_left_gradient"></div>
            <div className="map"></div>
         </div>
      )
   }
   
}

export default Map;