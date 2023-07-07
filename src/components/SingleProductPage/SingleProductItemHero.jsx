import { AccessTime,  Star } from '@mui/icons-material'
import React from 'react'
import { styled } from 'styled-components'
import {app} from '../../Firebase'
import {getFirestore,collection,addDoc} from 'firebase/firestore'

const Container = styled.div`
    width: 100vw;
    height: 23vw;
    background-color: rgb(28,28,31);
    color: white;
    display: flex;
    padding-top: 40px;
    margin-top: 10px;
`
const Wrapper = styled.div`
  width: 50vw;
  margin-left: 175px;
  margin-right: 75px;
`
const Heading = styled.h1`
  margin-bottom: 20px;
  font-size: 2.5rem;
`
const Desc = styled.h4`
  margin-bottom: 10px;
  font-weight: 300;
`
const Review = styled.div`
    color: gold;
    display: flex;
    align-items: center;
    margin: 7px 0px;
`
const Teacher = styled.div`
  margin: 20px 0px;
`

const PriceSection = styled.div`
  height: 60vh;
  width: 340px;
  background-color: white;
  box-shadow: 0 0 10px 4px rgba(0, 0, 0, 0.1);
`

const ImgSection = styled.div`
  width: 100%;
`
const Image = styled.img`
  width: 100%;
`
const InfoSection = styled.div`
  color: black;
  padding: 20px;
`

const Price = styled.div`
  font-size: 18px;
  margin-bottom: 12px ;
  margin-left: 4px;
`
const Time = styled.div`
  color: rgb(194,68,94);
  display: flex;
  align-items: center;
  margin-left: 4px;
`
const Button = styled.div`
  background-color: navy;
  width: 90%;
  color: white;
  padding: 15px 10px;
  text-align: center;
  margin: 15px  auto;
  margin-bottom: 20px;
  cursor: pointer;
  &:hover{
    background-color: rgb(0,0,120);
  }
`
const SingleProductItemHero = ({data,setCart,setCartData,setModal,id}) => {
  const item = data;
  const db = getFirestore(app)
  function cartHandler(){
    setCart((prev) => prev + 1)
    setCartData((prev) => [item, ...prev])
    setModal(true)
    if(id !== ''){
      addDoc(collection(db , 'users/' + id + '/cartItem'),item)
    }
  }

  return (
    <Container>
     <Wrapper>
      <Heading>{item.title}</Heading>
      <Desc>{item.desc}</Desc>
      <Review>
            <p style = {{fontSize : "18px" , fontWeight : "bolder" , marginRight : "5px"}}>{item.review}</p>
            <Star size = "small" style={{fontSize:"18px"}}/>
            <Star size = "small" style={{fontSize:"18px"}}/>
            <Star size = "small" style={{fontSize:"18px"}}/>
            <Star size = "small" style={{fontSize:"18px"}}/>
            <Star size = "small" style={{fontSize:"18px"}}/>
            <span style={{color:"white",fontSize:"16px",marginLeft:"5px"}}>{item.courseTaken} students</span>
        </Review>
        <Teacher>Created by - {item.teacher}</Teacher>
        <div>Last Updated - 20/05/2023</div>
        </Wrapper>
        <PriceSection>
          <ImgSection>
            <Image src = {item.url}></Image>
          </ImgSection>
          <InfoSection>
            <Price>
              <span style={{fontSize:"1.7rem",fontWeight:"bolder"}}>&#x20B9;{item.price}</span>
              <span style={{textDecoration:"line-through",margin:"0px 10px",color:"gray"}}>&#x20B9;3199</span>
              <span style={{fontSize:"16px"}}>80% off</span>
            </Price>
            <Time>
              <AccessTime style={{fontSize:"16px",marginRight:"5px"}} /><span style={{fontSize:"14px",fontWeight:"500"}}><span style={{fontWeight:"bolder"}}> 11 hours</span> left at this price!</span>
            </Time>
            <Button onClick={cartHandler}>Add to Cart</Button>
            
            <div style={{fontSize:"14px",color:"gray",textAlign:"center"}}>
            <div style={{margin:"9px 0px"}}>30-Day Money-Back Guarantee</div>
            <div>Full Lifetime Access</div>
            </div>
          </InfoSection>
        </PriceSection>
    </Container>
  )
}

export default SingleProductItemHero
