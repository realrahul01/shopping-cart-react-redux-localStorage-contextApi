import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Product from './components/Product';
import Cart from './components/Cart';
import Login from './components/Login';
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
      <Header/>
      <Routes>
      <Route path='/' element={<Product/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App
