import React from "react"
import './InfobarGallery.scss'

const GalleryPhoto = (props) => {
   return (
      <li className="photo_item">
         <div className="photo_item__photo">{props.url}</div>
      </li>
   )
}

const InfobarGallery = (props) => {
   const galleryItems = props.photos.map(p => <GalleryPhoto key={p} url={p} />)
   return (
      <div className="ride_gallery">
         <h3>Ride gallery</h3>
         <ul className="ride_gallery_items">
            {galleryItems}
         </ul>
      </div>
   )
}

export default InfobarGallery