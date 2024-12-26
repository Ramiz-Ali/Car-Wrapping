import React from 'react'
import './Premium.css'
import {Check} from "lucide-react"
import { assets } from '../../assets/Images/assets'
import ChooseUs from '../ChooseUs/ChooseUs'
import AnimatedCar1 from '../AnimatedCar1/AnimatedCar1'
import AnimatedCar2 from '../AnimatedCar2/AnimatedCar2'
const Premium = () => {
  return (
    <div className='premium-main'>
      <div className="premium-main-data">
       <img src={assets.st1} alt="" />
       <div className="premium-text">
          <p>Drive with confidence</p>
          <div className="premium-text-wrap">
            <h1>Premium car </h1>
            <h1 className="premium-text-wrap-h1">Wrapping</h1>
          </div>
          <h1 className='premium-text-solution'>& Solutions </h1>
          </div>
       </div>

       <div className="how-it-works">
         <h1 className='works-text'>How It Works</h1>
         <div className="works-cards">
           <div className="work-card1">
               <img src={assets.logo1} alt="" className='work-card1-image1' />
               <h3>Choose a Design</h3>
               <div className="tick-text-div">
                <div className="tick-text">
                  <Check size={18}/>
                  <p>Plain Design</p>
                </div>
                <div className="tick-text">
                  <Check size={18}/>
                  <p>Stock Design</p>
                </div>
                <div className="tick-text">
                  <Check size={18}/>
                  <p>Custom Design</p>
                </div>
                </div>
           </div>

           <div className="work-card1">
               <img src={assets.logo2} alt="" className='work-card1-image1' />
               <h3>Choose a Design</h3>
               <div className="tick-text-div">
                <div className="tick-text">
                  <Check size={18}/>
                  <p>Matte Finish</p>
                </div>
                <div className="tick-text">
                  <Check size={18}/>
                  <p>Glossy Finish</p>
                </div>
                <div className="tick-text">
                  <Check size={18}/>
                  <p>Metallic Finish</p>
                </div>
                </div>
           </div>

           <div className="work-card1">
               <img src={assets.logo3} alt="" className='work-card1-image1' />
               <h3>Choose a Design</h3>
               <div className="tick-text-div">
                <div className="tick-text">
                  <Check size={18}/>
                  <p>Quality Printing</p>
                </div>
                <div className="tick-text">
                  <Check size={18}/>
                  <p>Good Colors</p>
                </div>
                <div className="tick-text">
                  <Check size={18}/>
                  <p>Reasonable</p>
                </div>
                </div>
           </div>

           <div className="work-card1">
               <img src={assets.logo4} alt="" className='work-card1-image1' />
               <h3>Choose a Design</h3>
               <div className="tick-text-div">
                <div className="tick-text">
                  <Check size={18}/>
                  <p>Expert Team</p>
                </div>
                <div className="tick-text">
                  <Check size={18}/>
                  <p>Quick Procedure</p>
                </div>
                <div className="tick-text">
                  <Check size={18}/>
                  <p>100% Satisfaction</p>
                </div>
                </div>
           </div>
         </div>
       </div>

       {/* Cars Wraps Animation */}

       <AnimatedCar1/>

       {/* <AnimatedCar2/> */}

       

       {/* Why Choose Us */}
        
        <ChooseUs/>
       


    </div>
  )
}

export default Premium
