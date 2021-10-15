import React from "react";
import { useSwipeable } from "react-swipeable";
import './ModalPhoto.scss'

const ModalPhoto = (props) => {

   const closeModal = () => {
      const modal = document.querySelector('.modal')
      modal.classList.add('fading')
      modal.ontransitionend = () => {
         const action = {
            type: 'CLOSE-MODAL-PHOTO'
         }
         props.dispatch(action)
      }
   }

   const swipeClose = useSwipeable({
      onSwiped: (e) => {
         if (e.dir === 'Up' || e.dir === 'Down') {
            const action = {
               type: 'CLOSE-MODAL-PHOTO'
            }
            props.dispatch(action)
         }
      },
      preventDefaultTouchmoveEvent: true
   })
   
   if (props.isOpened) {
      const spinner = document.querySelector('.modal').querySelector('.map_loading_spinner')
      const imgEl = document.querySelector('.modal_photo_img')
      const img = new Image()
      img.src = props.src
      img.onload = () => {
         spinner.classList.add('hide')
         imgEl.classList.remove('hide')
      }
   }

   return (
      <div {...swipeClose} onClick={closeModal} className={"modal" + (props.isOpened ? " opened" : "")}>
         <div className="modal_photo_container">
            <img src="/img/tail-spin.svg" alt="Loading..." className="map_loading_spinner" />
            <img className="modal_photo_img hide" src={props.src} alt={props.alt} />
         </div>
      </div>
   )
}

export default ModalPhoto