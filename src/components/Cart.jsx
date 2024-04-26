import {useSelector} from 'react-redux'
import Button from 'react-bootstrap/Button';
import { MdOutlineDeleteOutline } from "react-icons/md";
import {useDispatch} from 'react-redux'
import {decrement, increment, removeItem} from '../Feature/CounterSlice'

const Cart = ()=>{

const cartItem = useSelector((state)=>state.counter.product)
console.log(cartItem)

const dispatch = useDispatch()

const incrementHandler=(x,index)=>{
        dispatch(increment(index))
}
const decrementHandler=(x,index)=>{
        dispatch(decrement(index))
}


const removeHandler=(index)=>{
    dispatch(removeItem(index))
}


const totalAmount = cartItem.reduce((accumulator,currentValue)=>{
    return accumulator + (currentValue.price*currentValue.quantity)
},0)


const item = cartItem.map((x,index)=>(
    <div className='cart_main' key={index}>
        <div>
            <img src={x.image} alt="error"  width="100px" height="100px"/>
            <span className='tit_sty'>{x.title.slice(0,11)}...</span>
        </div>
        <div>
            <Button variant="primary" className='inc_btn' onClick={()=>incrementHandler(x,index)}>+</Button>
            <span className='qt_change'>{x.quantity}</span>
            <Button variant="primary" onClick={()=>decrementHandler(x,index)}>-</Button>
        </div>
        <div>
           $ {Math.floor(x.price * x.quantity)}
        </div>
        <div className='delete'>
            <MdOutlineDeleteOutline onClick={()=>removeHandler(index)}/>
        </div>
    </div>
))


    return(
        <div>
            <div className='cart_head'>
            <h2>Shopping Cart</h2>
            <h2>Total item - ({cartItem.length})</h2>
            </div>
            <hr />
            <div>
                {item}
            </div>
            <div className="checkout">
                <h2>Total Amount: ${Math.floor(totalAmount)}</h2>
                <button className='btn3'>Proceed to pay</button>
            </div>
        </div>
    )
}

export default Cart