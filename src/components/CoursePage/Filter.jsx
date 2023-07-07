import React, { useState } from 'react'
import { styled } from 'styled-components'
import { CategoryData } from '../../Data'
const Container = styled.div`
    margin-right: 100px;
`
const Sort = styled.div`
  margin-bottom: 30px;
`
const Select = styled.select`
  padding: 10px ;
  margin-top: 10px;
  outline: none;
  font-size: 16px;
  border-radius: 0;
`
const Option = styled.option`
`
const Button = styled.div`
  padding: 10px;
  background-color: darkmagenta;
  color: white;
  width: 100px;
  text-align: center;
  cursor: pointer;
`

const Filter = ({category,setSubCategory,setSort}) => {

  const [value , setValue] = useState('')
  const [value2 , setValue2] = useState('')

  const subCategories = CategoryData.filter(data => {
    return data.title === category
  })

  function changeHandler(event){
    setValue(event.target.value);
    setSubCategory(event.target.value) ;
  }

  function clearFilterHandler(){
    setValue('')
    setValue2('')
    setSubCategory('')
    setSort('')
  }

  function sortChangeHandler(event){
    setValue2(event.target.value)
    setSort(event.target.value)
  }

  return (
    <Container>
        <Sort>
          <h3>Sort By</h3>
          <Select value={value2} onChange={sortChangeHandler}>
            <Option value='' selected>Sort By</Option>
            <Option value='Most Popular'>Most Popular</Option>
            <Option value='Highest Rated'>Highest Rated</Option>
            <Option value='Lowest Price'>Lowest Price</Option>
          </Select>
        </Sort>
        <Sort>
          <h3>Sub category</h3>
          <Select value={value} onChange={changeHandler}>
            <Option value = '' selected>Select</Option>
            {subCategories[0].subCategory.map(sub => (
              <Option value={sub}>{sub}</Option>
            ))}
          </Select>
        </Sort>
        <Button onClick={clearFilterHandler}>Clear Filter</Button>
    </Container>
  )
}

export default Filter
