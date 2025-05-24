import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'
function Footer() {
  return (
    <div className='footer'id='footer'>
<div className='footer-content'>
    <div className="footer-content-left">
        <img src= "src\assets\frontend_assets\logo5.png" alt=''/>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum earum harum quaerat. Cumque optio aperiam in odio magnam praesentium minima non libero eveniet ut consectetur commodi beatae, sit ab voluptatibus.</p>
        <div className='footer-social-icons'>
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
        </div>
    </div>
      <div className='footer-content-center'>
<h2>COMPANY</h2>
<ul>
    <li>Home</li>
    <li>About us</li>
    <li>Delivery</li>
    <li>Privacy policy</li>
</ul>
      </div>
      
      <div className='footer-content-right'>
<h2>GET IN TOUCH</h2>
<ul>
    <li>+91-8709-85-4462</li>
    <li>Contact@foodsy.com</li>
</ul>
      </div>
    </div>
<hr/>
<p className="footer-copyright">Copyright © 2025 Foodsy. All rights reserved.</p>

    </div>
  )
}
 

export default Footer
