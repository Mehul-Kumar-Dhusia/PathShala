import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CourseList from '../components/CoursePage/CourseList'
import Filter from '../components/CoursePage/Filter'
const CategoryWiseCourses = ({setSingle,category,search,setSearch,cart}) => {

  const [subCategory , setSubCategory] = useState(''); 
  const [sorting , setSort] = useState('');

  return (
    <div>
      <Navbar setSearch={setSearch} cart={cart} />

      <h1 style={{margin:"80px 100px"}}>{category} Course</h1>

      <div style={{display:"flex",marginLeft:"100px",marginBottom:"100px"}}>

        <Filter 
            category = {category} 
            setSubCategory = {setSubCategory} 
            setSort = {setSort}
        />

        <CourseList 
            setSingle={setSingle} 
            category={category} 
            subCategory={subCategory} 
            sorting={sorting} 
            search={search}
        />

      </div>

      <Footer />

    </div>
  )
}

export default CategoryWiseCourses
