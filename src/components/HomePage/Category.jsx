import React from 'react'
import CategoryItem from './CategoryItem'
import {CategoryData} from '../../Data'
import { styled } from 'styled-components'
const Container = styled.div`
    margin-top: 100px;
    margin-bottom: 100px;
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
    grid-template-columns: auto auto auto auto;
    gap: 70px 30px;
`

const Category = ({setCategory}) => {
  return (
    <Container>
        <Heading>Top Categories</Heading>
        <Wrapper>
            {CategoryData.map((item) => (
                <CategoryItem item = {item} setCategory = {setCategory} />
            ))}
        </Wrapper>
    </Container>
  )
}

export default Category
