import React from 'react'
import './AnimatedCar2.css'
import { assets } from '../../assets/Images/assets'
const AnimatedCar2 = () => {
  return (
    <div className="animated-car2">
          <div className="animated-car2-text">
            <h2>FOOD TRUCK WRAPS</h2>
            <p>Investing in a full vehicle wrap for your food truck is a smart decision that offers numerous benefits. Unlike traditional paint jobs, vehicle wraps are faster and more cost-effective, making them an ideal choice for business owners looking to maximize their investment.</p>
          </div>

          <img src={assets.Redcarback2} alt="" className='red-car-back-2'/>
          <img src={assets.car2} alt="" className='animated-car2-car' />
       </div>
  )
}

export default AnimatedCar2
