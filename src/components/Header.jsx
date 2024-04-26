import {Container,Nav,Navbar} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modals from './Modals';
import {useEffect, useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {useNavigate,NavLink} from 'react-router-dom'
import { authentication, updateProfileName } from '../Feature/CounterSlice';

const Header=()=>{
const [isClose, setIsClose] = useState(false)
const profileName = useSelector((state)=>state.counter.profileDetail.name)
const navigate = useNavigate()
const dispatch = useDispatch()
const value = useSelector((state)=>state.counter.bool)


useEffect(()=>{
  let isUserLogin = localStorage.getItem('isLogin')
  if(isUserLogin){
    dispatch(authentication())
  }
  const storeProfileName = localStorage.getItem('profileName')
  if(storeProfileName){
    dispatch(updateProfileName(storeProfileName));
  }
},[dispatch])



const signUpHandler=()=>{
  setIsClose(true)
}

const handleClose=()=>{
  setIsClose(false)
}

const logoutHandler=()=>{
  navigate('/login')
  dispatch(authentication())
}




    return (
      <>
      {isClose && (
        <Modals handleClose={handleClose}/>
      )}
        <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
              <NavLink className={({isActive})=>isActive ? "active_sty":"nav_sty"} to='/'>Home</NavLink>
              <NavLink className={({isActive})=>isActive ? "active_sty":"nav_sty"} to='/Cart'>Cart</NavLink>
          </Nav>

          <Nav>
          {!value && (
            <Button className='btn-sm' variant="light" onClick={signUpHandler}>Sign Up</Button>  
          )}
          {value && (
            <>
            <div className="user">{`Welcome ${profileName}`}</div>
            <Button className='btn-sm' variant="light" onClick={logoutHandler}>Logout</Button>  
            </>
          )}
          </Nav>
        </Container>
      </Navbar>
      </>
    )
}

export default Header;