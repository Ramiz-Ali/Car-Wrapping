import React from 'react'
import './ServicesData.css'
import { assets , serviceCards, serviceWork } from '../../assets/Images/assets'
const ServicesData = () => {
  return (
    <div className='servicesData-main'>
       <img src={assets.serviceCar} alt="" className='servicesData-img' />
       <h1>Our Services</h1>

       <div className="services-cards">
         {serviceCards.map((serviceCard , index) => (
            <div className='service-card1'>
                 <img src={serviceCard.image} alt="" className='service-card1-image' />
                 <p className='service-card1-title'>{serviceCard.title}</p>
                 <p className='service-card1-description'>{serviceCard.description}</p>
            </div>

         ))}
       </div>

       <h1>How We Work</h1>

       <div className="services-work-cards">
         {serviceWork.map((workCard , index) => (
            <div className='service-work-card1'>
                <img src={workCard.image} alt="" />
                <p className='service-work-card1-p1'>{workCard.title}</p>
                <p className='service-work-card1-p2'>{workCard.description}</p>
            </div>
         ))}
       </div>


    </div>
  )
}

export default ServicesData
