import React from "react"
import './Map.scss'

class Map extends React.Component {
   componentDidMount() {
      // const appEl = document.querySelector('.App')
      // const mapEl = document.querySelector('.map')
      // const containerHeight = appEl.scrollHeight
      // const script = document.createElement('script')
      // script.src = `https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A1f2ac2f9095b3e0ec4d3dc7807579ade02592cb0805ff95d94ccad9cde969999&amp;width=100%25&amp;height=${containerHeight}&amp;lang=ru_RU&amp;scroll=true`
      // script.async = true
      // mapEl.appendChild(script)
   }
   
   render() {
      return (
         <div className="map_container">
            <div className="map">
               <div className="map_left_gradient"></div>
            </div>
         </div>
      )
   }
   
}

export default Map;