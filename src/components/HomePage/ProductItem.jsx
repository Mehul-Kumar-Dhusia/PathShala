import React from 'react'
import { Star } from '@mui/icons-material'
import { styled } from 'styled-components'
import { Link } from 'react-router-dom'
const Container = styled.div`
    width: 310px ;
    margin: 10px;
    /* &:hover{
      background-color: rgba(0,0,0,0.5);
    } */
`
const ImgSection = styled.div`
    width: 100%;
    &.dark{
      width: 100%;
      position: relative;
      visibility: hidden;
    }
    &:hover{
      &.dark{
        visibility: visible;
        z-index: 1;
        background-color: rgba(0,0,0,0.4);
      }
    }
`

const Image = styled.img`
    width: 100%;
`
const InfoSection = styled.div``
const Title = styled.div`
    font-weight: bold;
    padding: 7px 0px;
    padding-right: 30px;

`
const Teacher = styled.div`
    font-size: 14px;
    color: gray;
`
const Review = styled.div`
    color: coral;
    display: flex;
    align-items: center;
    margin: 7px 0px;
`

const ProductItem = ({item,setSingle}) => {
  const handleLinkClick = () => {
    setSingle(item)
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <Link style={{textDecoration:"none",color:"black"}} to='/product'>
    <Container onClick={handleLinkClick}>
      <ImgSection>
         <div className='dark'></div>
         <Image src={item.url}></Image>
      </ImgSection>
      <InfoSection>
        <Title>{item.title}</Title>
        <Teacher>{item.teacher}</Teacher>
        <Review>
            <p style = {{fontSize : "18px" , fontWeight : "bolder" , marginRight : "5px"}}>{item.review}</p>
            <Star size = "small" style={{fontSize:"18px"}}/>
            <Star size = "small" style={{fontSize:"18px"}}/>
            <Star size = "small" style={{fontSize:"18px"}}/>
            <Star size = "small" style={{fontSize:"18px"}}/>
            <Star size = "small" style={{fontSize:"18px"}}/>
            <span style={{color:"gray",fontSize:"14px",marginLeft:"5px"}}>({item.courseTaken})</span>
        </Review>
        <div style={{fontWeight:"bolder"}}>&#x20B9;{item.price}</div>
      </InfoSection>
    </Container>
    </Link>
  )
}

export default ProductItem
