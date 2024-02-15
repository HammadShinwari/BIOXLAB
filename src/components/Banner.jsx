import React from 'react'
import LogoIcon from '../assets/images/logo-icon.png'

function Banner() {
  return (
    <>
        <div className="banner-container">
            <img src={LogoIcon} className='banner-img'/>
            <h3>WELCOME TO BIOXLAB</h3>
            <h2>Laboratory & Science Research Wordpress Theme</h2>
            <div className="banner-button">
                <button className='button'>EXPLORE DEMO</button>
            </div>
        </div>
    </>
  )
}

export default Banner