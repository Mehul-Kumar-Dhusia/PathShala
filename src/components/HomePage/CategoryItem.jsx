import React from 'react'
import { styled } from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
    height: 300px;
    width: 300px;
`
const ImgSection = styled.div`
    margin-bottom: 5px;
    :hover{
        transition: all 0.5s ease 0.1s;
        transform: scale(1.05);
    }
`
const Image = styled.img`
    cursor: pointer;
`

const CategoryItem = ({item,setCategory}) => {
    const handleLinkClick = () => {
        setCategory(item.title)
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  return (
    <Link to='/course' style={{textDecoration:"none",color:"black"}}>
    <Container onClick={handleLinkClick}>
        <ImgSection>
            <Image src={item.url}></Image>
        </ImgSection>
        <div style={{fontWeight:"bolder"}}>{item.title}</div>
    </Container>
    </Link>
  )
}

export default CategoryItem
