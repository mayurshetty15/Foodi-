import React from 'react'
import './AppDownloade.css'
import { assets } from '../../assets/assets'
const AppDownloade = () => {
  return (
    <div className='app-download' id = 'app-download'>
        <p>For Better Experience Download<br/>Foodi App</p>
        <div className="app-download-platforms">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />

        </div>

      
    </div>
  )
}

export default AppDownloade
