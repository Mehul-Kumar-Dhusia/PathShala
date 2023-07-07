import {CheckCircle, CloseRounded} from '@mui/icons-material'
import React from 'react'
import { styled } from 'styled-components'
import ModalItem from './ModalItem'

const ModalContainer = styled.div`
  /* display: none; */
  position: fixed; 
  z-index: 1;
  padding-top: 100px; 
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.6);
`
const ModalContent = styled.div`
  position: relative;
  background-color: #fefefe;
  margin: auto;
  padding: 25px;
  border: 1px solid #888;
  width: 40%;
`
const Close = styled.div`
  position: absolute;
  right: 15px;
  top: 10px;
  color: #aaaaaa;
  font-size: 2rem;
  font-weight: bolder;
  cursor: pointer;
  :hover{
  color: #000;
  text-decoration: none;
}
`
const Modal = ({modal,data,setModal}) => {
  function cancelHandler(){
    setModal(false)
  }
  return (
    <>
    {modal && (
    <ModalContainer>
      <ModalContent>
        <div style={{display:"flex",alignItems:"center"}}>
          <h2 style={{marginRight:"10px"}}>Added to Cart</h2>
          <CheckCircle style={{color: 'rgb(45,144,127)',fontSize:"1.75rem"}} />
        </div>
        <ModalItem data={data} />
        <Close onClick={cancelHandler}><CloseRounded style={{fontWeight:"bolder",fontSize:"1.7rem"}} /></Close>
      </ModalContent>
    </ModalContainer>
    )}
    </>
    
  )
}

export default Modal
