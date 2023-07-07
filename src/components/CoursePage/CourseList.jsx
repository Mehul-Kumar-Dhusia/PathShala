import React from 'react'
import {ProductItemData} from '../../Data'
import Course from './Course'
const CourseList = ({setSingle,category,subCategory,sorting,search}) => {

  const categoryFilterdData = ProductItemData.filter(data => {
    let item = [...ProductItemData]
    item = data.category === category;
    if(subCategory !== ''){
      item = data.subCategory.toLowerCase() === subCategory.toLowerCase()
    }
    return item;
  })
  
  if(sorting === 'Most Popular'){
    categoryFilterdData.sort((a,b) => {
      return b.courseTaken-a.courseTaken; 
    })
  }
  if(sorting === 'Highest Rated'){
    categoryFilterdData.sort((a,b) => {
      return b.review-a.review; 
    })
  }
  if(sorting === 'Lowest Price'){
    categoryFilterdData.sort((a,b) => {
      return a.price-b.price; 
    })
  }


  return (
    <div style={{width:"65vw"}}>
      {categoryFilterdData.map(item => (
        <Course item = {item} setSingle = {setSingle} />
      ))}
    </div>
  )
}

export default CourseList
