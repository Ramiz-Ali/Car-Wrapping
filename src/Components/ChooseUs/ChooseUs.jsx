import React from 'react'
import './ChooseUs.css'
const ChooseUs = () => {
  return (
    <div className="choose-us-main">
        <div className="choose-us-text">
          <h1>WHY CHOOSE US.</h1>
          <p>We are innovators with a passion for design, delivering premium car wrap services you won't find anywhere else.</p>
        </div>

        <div className="choose-us-cards">
           <div className="choose-us-cards-line1">
              <div className="choose-us-card1">
                 <h1>01</h1>
                 <h2>Professional Team</h2>
                 <p>Our skilled technicians use advanced techniques and top materials, ensuring flawless results and attention to detail.</p>
              </div>

              <div className="choose-us-card1">
                 <h1>02</h1>
                 <h2>Top Rated & Trusted</h2>
                 <p>Our skilled technicians use advanced techniques and top materials, ensuring flawless results and attention to detail.</p>
              </div>

              <div className="choose-us-card1">
                 <h1>03</h1>
                 <h2>Laser Cut Installations</h2>
                 <p>Our skilled technicians use advanced techniques and top materials, ensuring flawless results and attention to detail.</p>
              </div>
              
           </div>

           <div className="choose-us-cards-line1">
              <div className="choose-us-card1">
                 <h1>04</h1>
                 <h2>Affordable Pricing</h2>
                 <p>Our skilled technicians use advanced techniques and top materials, ensuring flawless results and attention to detail.</p>
              </div>

              <div className="choose-us-card1">
                 <h1>05</h1>
                 <h2>Process That You Will Love</h2>
                 <p>Our skilled technicians use advanced techniques and top materials, ensuring flawless results and attention to detail.</p>
              </div>

              <div className="choose-us-contact-card">
                 <h2>Contact Us</h2>
                 <p>Our skilled technicians use advanced techniques and top materials, ensuring flawless results and attention to detail.</p>
                 <button className='choose-cards-contct-btn'>Talk To Us</button>
              </div>
              
           </div>
        </div>
       </div>
  )
}

export default ChooseUs
