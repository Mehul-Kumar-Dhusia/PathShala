import React from 'react'
import { Star } from '@mui/icons-material'
import { styled } from 'styled-components'
import { Link } from 'react-router-dom'
const Container = styled.div`
    height: 23vh;
    width: 65vw;
    display: flex;
    border-bottom: 1px solid lightgray ;
    margin-bottom: 15px;
`
const ImgSection = styled.div`
    width: 35%;
`
const Image = styled.img`
    width: 100%;
    overflow-clip-margin: inherit;
`
const InfoSection = styled.div`
    display: flex;
    align-items: flex-start;
    margin-left: 20px;
`
const Title = styled.h3`
    font-weight: bold;
    padding-bottom: 7px;
    padding-right: 30px;

`
const Desc = styled.div`
    margin-bottom: 10px;
    font-size: 15px;
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

const Course = ({item , setSingle}) => {
    const handleLinkClick = () => {
        setSingle(item)
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  return (
    <Link to='/product' style={{textDecoration:"none",color:"black"}}>
    <Container onClick={handleLinkClick}>
      <ImgSection>
         <Image src={item.url}></Image>
      </ImgSection>
      <InfoSection>
        <div style={{marginRight:"100px"}}>
        <Title>{item.title}</Title>
        <Desc>{item.desc}</Desc>
        <Teacher>By - {item.teacher}</Teacher>
        <div style={{color:"gray",fontSize:"14px",marginTop:"5px"}}>Course Taken - {item.courseTaken}</div>
        <Review>
            <p style = {{fontSize : "18px" , fontWeight : "bolder" , marginRight : "5px"}}>{item.review}</p>
            <Star size = "small" style={{fontSize:"18px"}}/>
            <Star size = "small" style={{fontSize:"18px"}}/>
            <Star size = "small" style={{fontSize:"18px"}}/>
            <Star size = "small" style={{fontSize:"18px"}}/>
            <Star size = "small" style={{fontSize:"18px"}}/>
        </Review>
        </div>
        <div style={{fontWeight:"bolder"}}>&#x20B9;{item.price}</div>
      </InfoSection>
    </Container>
    </Link>
  )
}

export default Course
