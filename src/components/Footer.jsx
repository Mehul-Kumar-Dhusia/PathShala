import { Facebook, Instagram, Pinterest, Twitter } from '@mui/icons-material'
import React from 'react'
import { styled } from 'styled-components'
const Container = styled.div`
    color: white;
    height: 50vh;
    display: flex;
    align-items: center;
    background-color: rgb(28 , 29 , 31);
`
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 85vw;
    margin: auto;
    padding: 10px;
`
const Left = styled.div`
`
const Logo = styled.h1`
    font-weight: bolder;
    margin-bottom: 20px;
`
const Desc = styled.div`
    width: 500px;
`
const Center = styled.div`
`
const Ul = styled.ul`
    list-style: none;
    cursor: pointer;
`
const Li = styled.li`
    margin-bottom: 20px;
`

const Right = styled.div`
    display: flex;
`
const Icon = styled.div`
    cursor: pointer;
    margin-left: 10px;
    width: 50px;
    height: 50px;
    border: 1px solid white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
`
const Footer = () => {
  return (
    <Container>
     <Wrapper>
        <Left>
            <Logo>PATHSHALA</Logo>
            <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolor modi harum quam iste excepturi, debitis ipsa possimus tenetur id quos quisquam magnam ut alias  </Desc>
        </Left>
        <Center>
            <Ul>
                <Li>Contact Us</Li>
                <Li>About Us</Li>
                <Li>Teach On PathShala</Li>
                <Li>Others</Li>
            </Ul>
        </Center>
        <Right>
            <Icon>
                <Facebook />
            </Icon>
            <Icon>
                <Instagram />
            </Icon>
            <Icon>
                <Twitter />
            </Icon>
            <Icon>
                <Pinterest />
            </Icon>
        </Right>
     </Wrapper>
    </Container>
  )
}

export default Footer
