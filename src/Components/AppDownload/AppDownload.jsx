import React from 'react'
import { assets } from '../../assets/frontend_assets/assets'
import './AppDownload.css'
function AppDownload() {
  return (
    <div className='app-download' id='app-download'>
<p>Better Experience Download <br /> Foodsy</p>      
<div className='app-download-platforms'>
    <img src={assets.play_store} alt="play store" />
    <img src={assets.app_store} alt="app store" />
    </div>
    </div>
  )
}

export default AppDownload
