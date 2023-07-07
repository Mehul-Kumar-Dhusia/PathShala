import React, { useState } from 'react'
import {app} from '../Firebase'
import {getAuth,createUserWithEmailAndPassword} from 'firebase/auth'
import {getFirestore,doc,setDoc} from 'firebase/firestore'
import { Link, useNavigate } from 'react-router-dom'
import { styled} from 'styled-components'
import Navbar from '../components/Navbar'

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

const Register = ({setId}) => {

  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [error,setError] = useState('')

  const Auth = getAuth(app)
  const db = getFirestore(app)

  const navigate = useNavigate()

  const createUser = async () => {
    setId(email)
    createUserWithEmailAndPassword(Auth , email , password).then(value => 
    {
      if(value !== null){
        setDoc(doc(db , 'users' , email), {
          name : name ,
          email : email
        })
        navigate('/')
      }
    }).catch(err => setError(err))
  }


  
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <h3>Register and start learning</h3>
        <Form>
        
          <Input type="text" placeholder='Your Full Name' onChange={(e) => setName(e.target.value)} />

          <Input 
            type="email" 
            placeholder='Enter your Email' 
            onChange={(e) => setEmail(e.target.value)} 
            value={email}
          />

          <Input 
            type="passowrd" 
            placeholder='Enter your password' 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />

          
          {error && <p style={{color:"red"}}>{error.message}</p>}

          <p style={{fontSize:"14px",textAlign:"center",margin:"25px"}}>
            Already have an accout ? 
            <span>
              <Link to='/signin' style={{textDecoration:"none",fontWeight:"bolder"}}>
                Log in
              </Link>
            </span>
          </p>

          <Button onClick={createUser}>Register</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register
