import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import CartPage from './pages/CartPage'

import { CardProvider, useCart } from './context/CardContext'

function Navbar(){

  const { cart } = useCart()
 return (

         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
         <div className="container">
            <Link className="navbar-brand fw-bold " to="/"> 🛒 My Shop</Link>
           <div>
           <Link className="nav-link d-inline me-3 text-white" to="/">Home</Link>
           <Link className="nav-link d-inline text-white" to="/Cart">Cart({cart.length})</Link>
           </div>  
        </div>
    </nav>
    )
}

function App() {
 

  return (
    <CardProvider>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Cart' element={<CartPage/>} />
    </Routes>
    </BrowserRouter>
    </CardProvider>
  )
}

export default App
