import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import Footer from './Components/Footer/Footer'
import AppDownload from './Components/AppDownload/AppDownload'
import LoginPopup from './Components/LoginPopup/LoginPopup'
import Chatbot from './Components/Chatbot/Chatbot'
import "./App.css"
import Moodboat from './Components/MoodBoat/Moodboat'
import Foodspred from './Components/OtherServices/Foodspred'
 
import LiquidFoodCursor from './Components/Cursor/SplashCursor'
import FoodsyCursor from './Components/Cursor/SplashCursor'
import LiquidSplashCursor from './Components/Cursor/SplashCursor'
import FoodEmojiCursor from './Components/Cursor/SplashCursor'
import MoodCursor from './Components/Cursor/SplashCursor'
import LiquidCursor from './Components/Cursor/SplashCursor'
 

const App = () => {
  const[showLogin,setShowLogin]=React.useState(false)
  return (
    <>
< LiquidCursor/>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='App'>
      
<Navbar setShowLogin={setShowLogin}/>     
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/cart' element={<Cart/>}/>
  <Route path='/order' element={<PlaceOrder/>}/>
</Routes>
<Chatbot/>
<Moodboat/>
<Foodspred/>
<Footer/>

    </div>
    </>
  )
}

export default App
