import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import { Badge} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import {ShoppingCartOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'
import { onAuthStateChanged , getAuth, signOut} from 'firebase/auth';
import {app} from '../Firebase'
const Container = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  background-color: white;
  /* border-bottom: 0.5px solid lightgray; */
  box-shadow: 2px 1px 7px rgba(0, 0, 0, 0.2);
`
const Wrapper = styled.div`
   padding: 10px 20px ;
   display: flex;
   width: 90%;
   margin: auto;
   justify-content: space-between;
   align-items: center;
`
const Left = styled.div`
  /* flex: 1; */
  /* display: flex; */
  /* align-items: center; */
`
// const Language = styled.span`
//   font-size: 14px;
//   cursor: pointer;
// `
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 12px 15px;
  border-radius: 50px;
`
const Input = styled.input`
  margin-left: 10px;
  border: none;
  outline: none;
  width: 500px;
  font-size: 16px;
`
const Center = styled.div`
  /* flex: 1; */
  text-align: center;
`
const Logo = styled.h1`
  font-weight: bold;
`
const Right = styled.div`
  /* flex: 1;   */
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
const MenuItem = styled.div`
  font-size: 16px;
  cursor: pointer;
  margin-left: 25px;
  font-weight: 500;
  cursor: pointer;
`
const Profile = styled.div`
  color: white;
  background-color: navy;
  border-radius: 50%;
  font-size: 1.5rem;
  font-weight: bold;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Navbar = ({setSearch,cart}) => {
  const auth = getAuth(app)
  const [value , setValue] = useState('')
  const [user , setUser] = useState(null)
  const Navigate = useNavigate()

  function changeHandler(event){
    setValue(event.target.value)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    setSearch(value)
    Navigate('/course')
  }

  function signOutHandler(){
    signOut(auth)
  }

  useEffect(() => {
    onAuthStateChanged(auth , (user) => {
      setUser(user)
    })
  } , [auth])

  return (
    <Container>
        <Wrapper>
          <Left>
            <Link to='/' style={{textDecoration:"none",color:"black"}}>
            <Logo>PATHSHALA</Logo>
            </Link>
          </Left>
          <Center>
            {/* <Language>EN</Language> */}
            <SearchContainer>
               <SearchIcon style = {{color : "gray"}} />
               <form onSubmit={handleSearch}>
               <Input onChange={changeHandler} placeholder='Search anything'></Input>
               </form>
               
            </SearchContainer>
          </Center>
          <Right>
           {user === null ? 
            (<Link to='/register' style={{textDecoration:"none",color:"black"}}>
              <MenuItem>REGISTER</MenuItem>
            </Link>) : (
                <Profile>{user.email.charAt(0).toUpperCase()}</Profile>
            )

           }

           {user === null ?
            
            (<Link to='/signin' style={{textDecoration:"none",color:"black"}}>
              <MenuItem>SIGN IN</MenuItem>
            </Link>) : (
              <MenuItem onClick={signOutHandler}>SIGN OUT</MenuItem>
            )
            
            
            }
            <Link style={{textDecoration:"none",color:"black"}} to='/cart'>

            <MenuItem>
              <Badge badgeContent={cart} color='primary'>
                  <ShoppingCartOutlined />
              </Badge>
            </MenuItem>

            </Link>
          </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar
