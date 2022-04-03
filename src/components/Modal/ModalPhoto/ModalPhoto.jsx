import React from "react";
import { useSwipeable } from "react-swipeable";
import './ModalPhoto.scss'

const ModalPhoto = (props) => {
  let num, length
  const modalElement = React.useRef(null)
  const spinnerElement = React.useRef(null)
  const imgElement = React.useRef(null)

  if (props.isOpened) {
    num = props.number
    length = props.src.length
  }

  const closeModal = () => {
    modalElement.current.classList.add('fading')
    modalElement.current.ontransitionend = () => {
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
    img.src = props.src[num].url
    img.alt = props.src[num].alt
    img.onload = () => {
      spinnerElement.current.classList.add('hide')
      imgElement.current.classList.remove('hide')
    }
  }

  return (
    <div {...swipeClose} 
      onClick={modalClick} 
      ref={modalElement}
      className={"modal" + (props.isOpened ? " opened" : "")} >
      <div className="modal_photo_container">
        <img src="/img/tail-spin.svg" alt="Loading..." ref={spinnerElement} className="map_loading_spinner" />
        <img className="modal_photo_img hide" ref={imgElement} src={img.src} alt={img.alt} />
      </div>
      <button className={"gallery_switch_btn prev_btn" + (num === 0 ? " hide" : "")}></button>
      <button className={"gallery_switch_btn next_btn" + (length === num + 1 ? " hide" : "")}></button>
    </div>
  )
}

export default ModalPhoto