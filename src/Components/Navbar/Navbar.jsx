import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/frontend_assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'
function Navbar({setShowLogin}) {
// jis page p rahe wo underline ho jaaea 
    const [menu, setMenu] = React.useState("Home")

    const {getTotalCartAmount} = React.useContext(StoreContext);
  return (
    <div className='navbar'>
     <Link to="/"> <img src ="src\assets\frontend_assets\logo3.png"alt="logo" className='logo'/></Link>
      <ul className="navbar-menu">
       <li>
      <Link
        to="/"
        onClick={() => setMenu("Home")}
        className={menu === "Home" ? "active" : ""}
      >
        Home
      </Link>
    </li>
    <li>
      <a
        href="#explore-menu"
        onClick={() => setMenu("Menu")}
        className={menu === "Menu" ? "active" : ""}
      >
        Menu
      </a>
    </li>
    <li>
      <a
        href="#app-download"
        onClick={() => setMenu("Mobile-app")}
        className={menu === "Mobile-app" ? "active" : ""}
      >
        Mobile-app
      </a>
    </li>
    <li>
      <a
        href="#footer"
        onClick={() => setMenu("Contact-Us")}
        className={menu === "Contact-Us" ? "active" : ""}
      >
        Contact Us
      </a>
    </li>
  </ul>
     <div className="navbar-right">
  <img src={assets.search_icon} alt="search" />
  <div className="navbar-search-icon">
   <Link to='/Cart'> <img src={assets.basket_icon} alt="basket" /></Link>
    <div className={getTotalCartAmount()===0?"" : "dot"}></div>
  </div>
  <button onClick={()=>setShowLogin(true)}>Sign in</button>
</div>
</div>
  )
}

export default Navbar
