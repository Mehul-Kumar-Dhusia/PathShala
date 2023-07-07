import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Course from '../components/CoursePage/Course'
import { styled } from 'styled-components'
import { Delete, DeleteOutline } from '@mui/icons-material'

const Container = styled.div``
const Heading = styled.h2`
  margin: 40px 80px;
`
const Wrapper = styled.div`
  display: flex;
  /* border: 1px solid black; */
`
const Courses = styled.div`
  margin: 0px 80px;
  flex: 1;
`
const Summary = styled.div`
  flex: 1;
`
const CheckOut = styled.div`
  background-color: navy;
  width: 70%;
  color: white;
  padding: 15px 10px;
  text-align: center;
  cursor: pointer;
  font-size: 1.25rem;
  margin-top: 25px;
`
const DeleteIcon = styled.div`
  position: absolute;
  right: 0;
  bottom: 20px;
  cursor: pointer;
`
const Cart = ({cart,cartData,setCart,setCartData}) => {
  
  const [empty , setEmpty] = useState(true);
  const [dark,setDark] = useState(false)
  const [check,setCheck] = useState({})
  
  useEffect(() => {
    if(cartData.length > 0){
      setEmpty(false)
    }
    else{
      setEmpty(true)
    }
  },[cartData])

  const checkoutPrice = cartData.reduce((a , cur) => a + cur.price , 0)
  
  function deleteHandler(item){
    setCart(prev => prev - 1)
    const someData = cartData.filter(data => {
      return data !== item
    })
    setCartData(someData)
  }

  function mouseEnterHandler(item){
    setDark(true)
    setCheck(item)
  }
  function mouseLeaveHandler(){
    setDark(false)
    setCheck({})
  }

  return (
    <Container>
      <Navbar cart={cart} />
      <Heading>Shopping Cart</Heading>
      <Wrapper>
        <Courses>
            <div style={{color:"gray",fontWeight:"bold",marginBottom:"10px"}}>{cartData.length} course in cart</div>
            {cartData.map(item => (
              <div style={{position:"relative"}}>
                <Course item={item} setSingle={() => {}}/>
                <DeleteIcon onClick={() => deleteHandler(item)} onMouseEnter={()=>mouseEnterHandler(item)} onMouseLeave={mouseLeaveHandler}>
                {dark && check === item ? <Delete style={{fontSize:"20px",color:"red"}} /> : <DeleteOutline style={{fontSize:"20px"}} />}
                </DeleteIcon>
              </div>
            ))}
            
        </Courses>
        {empty === true ? (
          <div style={{flex:"2.5",height:"20vh",paddingTop:"100px",fontSize:"3rem",fontWeight:"bolder"}}>
          Your cart is empty
          </div>
        )
         : 

        <Summary>
          <div style={{color:"gray",fontWeight:"bolder"}}>Total:</div>
          <div style={{fontSize:"2.5rem",fontWeight:"bolder",margin:"10px 0px 5px 0px"}}>&#x20B9; {checkoutPrice}</div>
          <div style={{textDecoration:'line-through',color:"gray",fontWeight:"bold",margin:"0px 0px 5px 0px",fontSize:"1rem"}}>&#x20B9; {2*checkoutPrice}</div>
          <div>50% Off</div>
          {/* <Link to='/signin' style={{textDecoration:"none"}}> */}
          <CheckOut>CheckOut</CheckOut>
          {/* </Link> */}
        </Summary>
        }
      </Wrapper>
    </Container>
  )
}

export default Cart
