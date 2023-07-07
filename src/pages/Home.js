import React from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/HomePage/Slider'
import Product from '../components/HomePage/Product'
import Category from '../components/HomePage/Category'
import Footer from '../components/Footer'

const Home = ({setSingle,setCategory,setSearch,cart}) => {

  return (
    <div>
      <Navbar setSearch = {setSearch} cart={cart} />
      <Slider />
      <Product setSingle = {setSingle} courseSortBasis = 'Courses for You' />
      <Product setSingle = {setSingle} courseSortBasis = 'Popular Courses' />
      <Category setCategory = {setCategory} />
      <Footer />
    </div>
  )
}

export default Home
