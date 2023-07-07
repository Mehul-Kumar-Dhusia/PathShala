import React, { useState } from 'react'
import { Link,useNavigate} from 'react-router-dom'
import { styled} from 'styled-components'
import Navbar from '../components/Navbar'

import {app} from '../Firebase'
import { getAuth,signInWithEmailAndPassword} from 'firebase/auth'

const Container = styled.div``

const Wrapper = styled.div`
  width: 400px;
  margin: 90px auto;
`
const Form = styled.form`
  margin-top: 15px;
`
const Input = styled.input`
  padding: 15px;
  display: block;
  width: 90%;
  font-size: 1.07rem;
  margin: auto;
  margin-bottom: 15px;
  outline: none;
`
const Button = styled.div`
  padding: 15px;
  /* width: 353px; */
  font-size: 1.18rem;
  background-color: navy;
  color: white;
  font-weight: bolder;
  margin: auto 1px;
  text-align: center;
  border-radius: 3px;
  cursor: pointer;
  &:hover{
    background-color: rgb(0,0,150);
  }
`
const Signin = ({setId,setCartData}) => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [error,setError] = useState('')

  const Auth = getAuth(app)
  const navigate = useNavigate()

  console.log(email);

  function signInUser(){
    setId(email)
    signInWithEmailAndPassword(Auth , email , password).then(value => {
      if(value !== null){
       navigate('/')
      }
    }).catch(err => setError(err))
  }

  return (
    <Container>
      <Navbar />
      <Wrapper>

        <h3>Sign In</h3>

        <Form action="">
        
        <Input 
          type="email" 
          placeholder='Your Email' 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <Input
          type="password" 
          placeholder='Your Password' 
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p style={{color:"red"}}>{error.message}</p>}

        <p style={{fontSize:"14px",textAlign:"center",margin:"25px"}}>Not have an accout ? <span>
          <Link to='/register' style={{textDecoration:"none",fontWeight:"bolder"}}>
            Register
          </Link>
        </span></p>

        <Button onClick={signInUser}>Sign In</Button>

        </Form>
      </Wrapper>
    </Container>
  )
}

export default Signin

