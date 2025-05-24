import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import Footer from './Components/Footer/Footer'
import AppDownload from './Components/AppDownload/AppDownload'
import LoginPopup from './Components/LoginPopup/LoginPopup'
const App = () => {
  const[showLogin,setShowLogin]=React.useState(false)
  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='App'>
<Navbar setShowLogin={setShowLogin}/>     
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/cart' element={<Cart/>}/>
  <Route path='/order' element={<PlaceOrder/>}/>
</Routes>

<Footer/>
    </div>
    </>
  )
}

export default App
