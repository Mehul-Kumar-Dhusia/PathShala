import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
const Container = styled.div`
    display: flex;
    width: 80%;
    margin-right: 10px;
`
const ImgSection = styled.div`
    width: 25%;
    margin-right: 15px;
`
const Image = styled.img`
    width: 100%;
`
const InfoSection = styled.div`

`
const Button = styled.button`
    padding: 7px;
    font-size: 1.01rem;
    height: 44px;
    width: 120px;
    background-color: black;
    color: white;
    cursor: pointer;
    &:hover{
        background-color: rgb(40,40,40);
    }

`

const ModalItem = ({data}) => {
  return (
    <div style={{display:"flex",justifyContent:"space-between",marginTop:"30px"}}>
    <Container>
        <ImgSection>
            <Image src={data.url}></Image>
        </ImgSection>
        <InfoSection>
           <h4>{data.title}</h4>
           <div style={{fontSize:"13px",color:"gray",marginTop:"5px"}}>{data.teacher}</div>
           
        </InfoSection>
    </Container>
    <Link to='/cart' style={{textDecoration:"none"}}>
    <Button>Go to cart</Button>
    </Link>
    </div>
  )
}

export default ModalItem
