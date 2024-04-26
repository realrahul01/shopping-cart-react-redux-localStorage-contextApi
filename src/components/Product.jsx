import { useEffect,useState } from "react";
import CardData from "./Card";
import axios from 'axios'
import {useDispatch,useSelector} from 'react-redux'
import { addcart } from "../Feature/CounterSlice";


const Product=()=>{
const dispatch = useDispatch()
const list = useSelector((state)=>state.counter.cart)
const bool = useSelector((state)=>state.counter.bool)

useEffect(()=>{
    axios.get('https://fakestoreapi.com/products')
    .then((res)=>{
        dispatch(addcart(res.data))
    })
},[dispatch])


const item = list.map((el,index)=>(
        <div key={index}>
            <CardData
                title = {el.title}
                image = {el.image}
                price = {el.price}
                el = {el}
            />
        </div>
))

    return (
        <div className="product_section">
            <h1 style={{fontStyle: 'italic',marginTop:'5px'}}>Shopping Cart</h1>
            <hr />
            <div className="main">
                {bool && (
                    item
                )}
            </div>
            {!bool && (
                        <h1 style={{color:'red'}}>Please Loggin before shopping...</h1>
                    )}
        </div>
    )
}

export default Product;