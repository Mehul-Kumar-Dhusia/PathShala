import React, { useEffect, useState } from 'react'
import { Routes , Route } from 'react-router-dom'

import Home from './pages/Home'
import SingleProductItem from './pages/SingleProductItem'
import CategoryWiseCourses from './pages/CategoryWiseCourses'
import Cart from './pages/Cart'
import Register from './pages/Register'
import Signin from './pages/Singin'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { app } from './Firebase'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const App = () => {

  const [singleData , setSingleData] = useState({})
  const [category , setCategory] = useState('Design') ;
  const [search , setSearch] = useState('')
  const [cart , setCart] = useState(0)
  const [cartData , setCartData] = useState([]);
  const [id,setId] = useState('')
  
  const db = getFirestore(app)
  const auth = getAuth(app)

  useEffect(() => {
    onAuthStateChanged(auth , (user) => {
      if(user != null){
        setId(user.email)
        async function fetchData(){
          const snap = await getDocs(collection(db,'users',user.email,'cartItem'))
          const array = []
          snap.forEach(data => array.push(data.data()))
          setCart(array.length)
          setCartData(array)
        }
       fetchData()
      }
      else{
        setCartData([])
        setCart(0)
      }
    })
  } , [auth,db])

  return (
    <div>
     <Routes>

        <Route 
          path='/' 
          element={
            <Home 
              setSingle = {setSingleData} 
              setCategory = {setCategory} 
              setSearch = {setSearch} 
              cart={cart}
            />
          } 
        />

        <Route  
          path='/course' 
          element={
            <CategoryWiseCourses 
              setSingle={setSingleData} 
              category = {category} 
              search = {search} 
              setSearch={setSearch} 
              cart={cart} 
            />
          }  
        />

        <Route 
          path='/product' 
          element=
          {
            <SingleProductItem 
              data = {singleData} 
              setSearch={setSearch} 
              setCart = {setCart} 
              cart={cart} 
              setCartData={setCartData}
              id={id}
            />
          }  
        />

        <Route 
          path='/cart' 
          element=
          {
            <Cart 
              cart={cart}
              cartData={cartData}
              setCart={setCart}
              setCartData={setCartData}
            />
          } 
        />

        <Route 
          path='/register' 
          element=
          {
            <Register
              setId={setId}
            />
          } 
        />

        <Route 
          path='/signIn' 
          element=
          {
            <Signin
              setId={setId}
            />
          } 
        />

     </Routes>
    </div>
  )
}

export default App

