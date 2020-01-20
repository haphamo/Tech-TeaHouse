import React from "react"
import { object, func } from "prop-types"
import { ModalOuterBody, ModalInnerBody, ModalButton } from "./css"
function Modal({ children, closeModal }) {
  return (
    <ModalOuterBody onClick={closeModal}>
      <ModalInnerBody onClick={e => e.stopPropagation()}>
        {children}
        <ModalButton onClick={closeModal}>Close</ModalButton>
      </ModalInnerBody>
    </ModalOuterBody>
  )
}

Modal.propTypes = {
  children: object.isRequired,
  closeModal: func.isRequired,
}

export default Modal
