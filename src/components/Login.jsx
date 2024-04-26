import Button from 'react-bootstrap/Button';
import { authentication } from '../Feature/CounterSlice';
import {useDispatch,useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { useState } from 'react';

const Login=()=>{    
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [emailError, setEmailError] = useState('')
const [passwordError, setPasswordError] = useState('')



const signupEmail = useSelector((state)=>state.counter.profileDetail)
const dispatch = useDispatch()
const navigate = useNavigate()



  const errorHandler2=()=>{
    setTimeout(()=>{
      setEmailError('')
    },2000)
  }

  const errorHandler3=()=>{
    setTimeout(()=>{
      setPasswordError('')
    },2000)
  }

  const emailRegex = /^\S+@\S+\.\S+$/


const loginhandler=()=>{

    if(!email){
        setEmailError("*Please enter email")
        errorHandler2()
        return 
      }
      if(!emailRegex.test(email)){
        setEmailError("Please enter valid email")
        errorHandler2()
        return 
      }
      if(!password){
        setPasswordError("*Please enter password")
        errorHandler3()                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
        return 
      }
      if(password.length < 5){
        setPasswordError("*Password must contain atLeat 5 character")
        errorHandler3() 
        return 
      }
      if(signupEmail.email !== email){
        alert("User not Found")
        return 
      }else{
          alert('You have successfully signed in')   
          dispatch(authentication())
          localStorage.setItem("isLogin", true);
          localStorage.setItem('profileName', signupEmail.name)
          navigate('/')
      }


    
}

    return (
        <div className="login">
            <h1>Login</h1>
            <div className="inp_main">
                <label htmlFor="email">Email</label>
            <div>
                <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <div className='error'>{emailError}</div>
            </div>
            </div>

            <div className="inp_main">
                <label htmlFor="password">Password</label>
            <div>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <div className='error'>{passwordError}</div>
            </div>
            <Button className='btn1' variant="primary" onClick={loginhandler}>Login</Button>
            </div>
        </div>
    )
}

export default Login;