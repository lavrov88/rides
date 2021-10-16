import React from "react"
import './InfobarGallery.scss'

const GalleryPhoto = (props) => {
   return (
      <li className="photo_item">
         <img src={props.url} alt={props.alt} data-number={props.i} className="photo_item__photo" />
      </li>
   )
}

const InfobarGallery = (props) => {
   if (props.photos.length === 0) {
      return null
   }

   const galleryItems = props.photos
      .map((p, i) => <GalleryPhoto key={p.url} url={p.url} alt={p.alt} i={i} />)

   const openPhoto = (e) => {
      if (!e.target.classList.contains('photo_item__photo')) {
         return
      }

      const action = {
         type: 'OPEN-MODAL-PHOTO',
         src: props.photos,
         number: +e.target.dataset.number
      }
      props.dispatch(action)
   }

   return (
      <div className="ride_gallery">
         <h3>Ride gallery</h3>
         <ul onClick={openPhoto} className="ride_gallery_items">
            {galleryItems}
         </ul>
      </div>
   )
}

export default InfobarGallery