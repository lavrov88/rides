import React from "react";
import './ModalPhoto.scss'

const ModalPhoto = (props) => {

   const closeModal = () => {
      document.querySelector('.modal').classList.add('fading')

      setTimeout(() => {
         const action = {
            type: 'CLOSE-MODAL-PHOTO'
         }
         props.dispatch(action)
      }, 500);
   }

   return (
      <div onClick={closeModal} className={"modal" + (props.isOpened ? " opened" : "")}>
         <div className="modal_photo_container">
            <img className="modal_photo_img" src={props.src} alt={props.alt} />
         </div>
      </div>
   )
}

export default ModalPhoto