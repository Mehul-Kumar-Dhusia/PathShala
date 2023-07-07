import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import SingleProductItemHero from '../components/SingleProductPage/SingleProductItemHero'
import SingleProductDescription from '../components/SingleProductPage/SingleProductDescription'
import Footer from '../components/Footer'
import Modal from '../components/SingleProductPage/Modal'

const SingleProductItem = ({data,setSearch,setCart,cart,setCartData,id}) => {
  const [modal , setModal] = useState(false)
  return (
    <>
    <Modal modal={modal} data = {data} setModal={setModal} />
    <div className={modal}>
      <Navbar setSearch={setSearch} cart={cart} />
      <SingleProductItemHero data = {data} setCart={setCart} setCartData={setCartData} setModal = {setModal} id={id}  />
      <SingleProductDescription />
      <Footer />
    </div>
    </>
  )
}

export default SingleProductItem
