import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { detailsVal } from '../Feature/CounterSlice';
import {useNavigate} from 'react-router-dom'

const Modals = ({handleClose})=>{
const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [confirmPassword, setConfirmPassword] = useState('')
const [nameError, setNameError] = useState('')
const [emailError, setEmailError] = useState('')
const [passwordError, setPasswordError] = useState('')
const [confirmPasswordError, setConfirmPasswordError] = useState('')

const isLogin = useSelector((state)=>state.counter.bool)



const dispatch = useDispatch()
const navigate = useNavigate()


const errorHandler1=()=>{
  setTimeout(()=>{
    setNameError('')
  },2000)
}
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
const errorHandler4=()=>{
  setTimeout(()=>{
    setConfirmPasswordError('')
  },2000)
}


const emailRegex = /^\S+@\S+\.\S+$/

const saveHandler=()=>{

if(!name){
  setNameError("*Please enter email")
  errorHandler1()
 return;
}
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

if(password !== confirmPassword){
  setConfirmPasswordError("*Password must be same")
  errorHandler4()
  return 
}






    let user = {
        name,
        email,
        password,
        confirmPassword
    }
    dispatch(detailsVal(user))
    alert(`Welcome ${user.name} you have successfully created your account`)
    navigate('/login')
    handleClose()
}



    return(
        <Modal show={true} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Account</Modal.Title>
        </Modal.Header>
        <Modal.Body className='signUp_sty'>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
                <div className='error'>{nameError}</div>
                
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <div className='error'>{emailError}</div>
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <div className='error'>{passwordError}</div>
            </div>
            <div>
                <label htmlFor="confirm password">Confirm Password:</label>
                <input type="password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
                <div className='error'>{confirmPasswordError}</div>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className='btn-sm' variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button className='btn-sm' variant="primary" onClick={saveHandler}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    )
}

export default Modals