import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Cart from './pages/Cart'

function Navbar(){
 return (

         <nav classNameName="navbar navbar-expand-lg navbar-dark bg-dark">
         <div className="container">
            <Link className="navbar-brand fw-bold " to="/"> 🛒 My Shop</Link>
           <div>
           <Link className="nav-link d-inline me-3 text-white" to="/">Home</Link>
           <Link className="nav-link d-inline text-white" to="/Cart">Cart</Link>
           </div>  
        </div>
    </nav>
    )
}

function App() {
 

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Cart' element={<Cart/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
