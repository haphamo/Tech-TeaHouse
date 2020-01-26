import styled from "styled-components"
import { Button } from "../../theme/components"
import { colors, breakpoints } from "../../theme/constants"

const { tablet } = breakpoints
const { black } = colors

export const ModalOuterBody = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
`
export const ModalInnerBody = styled.div`
  color: ${black};
  background: #fff;

  width: 100%;
  height: 100%;
  margin: auto;
  padding: 32px;

  overflow-y: scroll;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: ${breakpoints}px) {
    width: 80%;
    height: 550px;
    padding: 96px;
  }
`

export const ModalButton = styled(Button)`
  margin-top: 24px;
  display: inline-block;
`
