import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useDispatch} from 'react-redux'
import { singleProduct } from '../Feature/CounterSlice';


const CardData=({title,image,price,el})=>{

const dispatch = useDispatch()


const addToCartHandler=()=>{
  dispatch(singleProduct(el))
}

    return(
        <Card className='card_sty'>
      <Card.Img variant="top" src={image} width="220px" height="220px"/>
      <Card.Body>
        <Card.Title> <i><b>Title- </b></i>{title.slice(0,11)}...</Card.Title>
        <Card.Text>
        <i><b>Price- </b></i>
          ${price}
        </Card.Text>
        <div>
        <Button variant="danger" className='btnn' onClick={addToCartHandler}>Add to cart </Button>
        </div>
      </Card.Body>
    </Card>
    )
}
export default CardData