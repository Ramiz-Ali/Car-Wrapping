import React from 'react'
import './AnimatedCar1.css'
import { assets } from '../../assets/Images/assets'
const AnimatedCar1 = () => {
  return (
    <div className="animated-car1">
          <img className='red-back-car' src={assets.Redcarback} alt="" />
          <img src={assets.Car1} alt=""className='animated-car1-car'/>
          <div className="animated-car1-text">
             <h2>Car Wraps</h2>
             <p>Protect your vehicle, preserve the value of your fleet while promoting your business with a full vehicle wrap. Faster and more cost effective than a paint job, you can easily remove or change the wrap with your next campaign.</p>
          </div>
       </div>
  )
}

export default AnimatedCar1
