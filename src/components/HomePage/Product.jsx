import React from 'react'
import ProductItem from './ProductItem'
import { styled } from 'styled-components'
import {ProductItemData} from '../../Data'
import { useRef } from 'react'
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material'

const Container = styled.div`
  /* border: 1px solid black; */
`
const Heading = styled.h2`
    font-weight: 400;
    margin-bottom: 20px;
    width: 84vw;
    margin: 25px auto;
`
const Wrapper = styled.div`
    width: 85vw;
    margin: auto;
    display: grid;
    grid-auto-flow: column;
    overflow-x: auto;
    scroll-behavior: smooth;
    /* border: 1px solid blue; */
    /* transition: all 2s ease 2s; */
`

const ArrowButton = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  padding: 5px;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  opacity: 0.55;
  top: 80px;
  /* left: 90px; */
  &.left{
    left: 100px;
  }
  &.right{
    right: 95px;
  }
  &:hover{
    opacity: 0.6;
  }
`
const Product = ({setSingle,courseSortBasis}) => { 
  const containerRef = useRef(null)
  let populardata = [...ProductItemData]
  if(courseSortBasis === 'Popular Courses'){
    populardata.sort((a,b) =>{
      return b.courseTaken - a.courseTaken
    })
  }
  function sliderHandlerRight(){
    containerRef.current.scrollLeft += 1320
  }
  function sliderHandlerLeft(){
    containerRef.current.scrollLeft -= 1320
  }
  
  return (
    <>
    <Container>
        <Heading>{courseSortBasis}</Heading>
      <div style={{position:"relative"}}>
      <ArrowButton className='left' onClick={sliderHandlerLeft}> <ArrowBackIos style={{marginLeft:"10px"}} /> </ArrowButton>
      <ArrowButton className='right' onClick={sliderHandlerRight}> <ArrowForwardIos /> </ArrowButton>
      <Wrapper ref={containerRef}>
        {populardata.map((item) => (
            <ProductItem item = {item} setSingle = {setSingle}/>
        ))}
      </Wrapper>
      </div>
      
    </Container>
    </>
  )
}

export default Product
