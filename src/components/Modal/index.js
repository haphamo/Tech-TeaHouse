import React from "react"
import { object, func } from "prop-types"
import { ModalOuterBody, ModalInnerBody } from "./css"
import { Button } from "../../theme/components"
function Modal({ children, closeModal }) {
  return (
    <ModalOuterBody onClick={closeModal}>
      <ModalInnerBody onClick={e => e.stopPropagation()}>
        {children}
        <Button onClick={closeModal}>Close</Button>
      </ModalInnerBody>
    </ModalOuterBody>
  )
}

Modal.propTypes = {
  children: object.isRequired,
  closeModal: func.isRequired,
}

export default Modal
