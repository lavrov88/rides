import React from "react";
import { useSwipeable } from "react-swipeable";
import './ModalPhoto.scss'

const ModalPhoto = (props) => {
   let num, length

   if (props.isOpened) {
      num = props.number
      length = props.src.length
   }

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

   const openPrev = () => {
      const action = {
         type: 'OPEN-MODAL-PHOTO',
         src: props.src,
         number: num - 1
      }
      props.dispatch(action)
   }

   const openNext = () => {
      const action = {
         type: 'OPEN-MODAL-PHOTO',
         src: props.src,
         number: num + 1
      }
      props.dispatch(action)
   }

   const modalClick = (e) => {
      if (e.target.classList.contains('gallery_switch_btn')) {
         e.target.classList.contains('prev_btn') ? openPrev() : openNext()
      } else {
         closeModal()
      }
   }

   const swipeClose = useSwipeable({
      onSwiped: (e) => {
         if (e.dir === 'Up' || e.dir === 'Down') {
            closeModal()
         } else if (e.dir === 'Right' && num > 0) {
            openPrev()
         } else if (e.dir === 'Left' && num < length - 1) {
            openNext()
         }
      },
      preventDefaultTouchmoveEvent: true
   })

   const img = new Image()
   if (props.isOpened) {
      const spinner = document.querySelector('.modal').querySelector('.map_loading_spinner')
      const imgEl = document.querySelector('.modal_photo_img')

      img.src = props.src[num].url
      img.alt = props.src[num].alt
      img.onload = () => {
         spinner.classList.add('hide')
         imgEl.classList.remove('hide')
      }
   }

   return (
      <div {...swipeClose} onClick={modalClick} className={"modal" + (props.isOpened ? " opened" : "")}>
         <div className="modal_photo_container">
            <img src="/img/tail-spin.svg" alt="Loading..." className="map_loading_spinner" />
            <img className="modal_photo_img hide" src={img.src} alt={img.alt} />
         </div>
         <button className={"gallery_switch_btn prev_btn" + (num === 0 ? " hide" : "")}></button>
         <button className={"gallery_switch_btn next_btn" + (length === num + 1 ? " hide" : "")}></button>
      </div>
   )
}

export default ModalPhoto