import React from 'react'
import './AboutData.css'
import { assets } from '../../assets/Images/assets'

const AboutData = () => {
  return (
  
    <div className='aboutData-main'>
      <img className='about-car-main' src={assets.aboutCar} alt="" />

      <div className="about-right">
         <div className="about-right-text">
          <img src={assets.abouticon} alt="" />
          <p>About</p>
         </div>
         <h1 className='about-text-h1'>Our Company Overview</h1>
         <p className='about-paragraph'>Welcome to Just Wrap, your top choice for amazing and high-quality car wraps. At Just Wrap, we think your car is more than just a way to get around – it's a way to show off your style and personality.</p>
         <div className="about-buttons">
          <button className='about-buttons-1'>Company</button>
          <button className='about-buttons-2'>Products</button>
          <button className='about-buttons-2'>Our Team</button>
         </div>
         <div className='about-line-div'></div>
         <h1 className='about-text-h1'>Our Story</h1>
         <p className='about-paragraph'>Just Wrap started with car lovers turning cars into art. Now, we're a top name in car wrapping with quality materials and a skilled team.</p>
         <div className="about-learn-btn-div"><button className='about-buttons-learn'>Learn More</button></div>
      </div>
    </div>
  )
}

export default AboutData
