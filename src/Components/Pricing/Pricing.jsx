import React from 'react'
import './Pricing.css'

import { assets } from '../../assets/Images/assets'


import { ArrowRight, Check , MoveUpRight } from 'lucide-react'
const Pricing = () => {
  return (
    <div className='pricing-main'>
        <div className="pricings">
        <div className="pricing-text">
            <h1>SIMPLE, TRANSPARENT</h1>
            <h1 className='pricing-text-heading2'>PRICING</h1>
        </div>
        <div className="car-truck-wrap">
            <div className="car-truck-wrap-btn">
                <button className="car-truck-wrap-btn1">Car Wrap</button>
                <button className="car-truck-wrap-btn2">Truck Wrap</button>
            </div>
            <p>Enjoy high-quality services at competitive prices without compromising on excellence.</p>
        </div>

        <div className="pricing-cards">
            <div className="pricing-card1">
                 <div className="pricing-card-top">
                    <div className="pricing-card-top-image">
                    <img src={assets.Group1} alt="" />
                    </div>
                    <div className="pricing-card-top-text">
                        <p>Partial Wrap</p>
                        <h2>Silver Package</h2>
                    </div>
                 </div>
                 <p className='pricing-card-p1'>Lorem ipsum dolor sit amet doloroli sitol conse ctetur adipiscing elit.</p>
                 <p className='card1-price'>$99</p>
                 <p>What's Included</p>

                 <div className="card-properties">
                    <div className="card1-first-property">
                        <div className="card1-property-icon">
                             <Check size={18} color='#fff'/>
                        </div>
                        <p>18” Hood & Fenders</p>
                    </div>
                    <div className="card1-first-property">
                        <div className="card1-property-icon">
                             <Check size={18} color='#fff'/>
                        </div>
                        <p>Side View Mirrors/ or Headlights</p>
                    </div>
                    <div className="card1-first-property">
                        <div className="card1-property-icon">
                             <Check size={18} color='#fff'/>
                        </div>
                        <p>4 Door Cups</p>
                    </div>
                    <div className="card1-first-property">
                        <div className="card1-property-icon">
                             <Check size={18} color='#fff'/>
                        </div>
                        <p>Trunk Stripe</p>
                    </div>
                    <div className="card1-first-property">
                        <div className="card1-property-icon">
                             <Check size={18} color='#fff'/>
                        </div>
                        <p>Full Front Bumper</p>
                    </div>
                 </div>
                 <button>Get Started</button>
            </div>
{/* Card2 */}
            <div className="pricing-card2">
                 <div className="pricing-card-top">
                    <div className="pricing-card-top-image">
                    <img src={assets.Group2} alt="" />
                    </div>
                    <div className="pricing-card-top-text">
                        <p>Partial Wrap</p>
                        <h2>Silver Package</h2>
                    </div>
                 </div>
                 <p className='pricing-card-p1'>Lorem ipsum dolor sit amet doloroli sitol conse ctetur adipiscing elit.</p>
                 <p className='card1-price'>$199</p>
                 <p>What's Included</p>

                 <div className="card-properties">
                    <div className="card1-first-property">
                        <div className="card2-property-icon">
                             <Check size={18} color='#C21A1A'/>
                        </div>
                        <p>Full Front & Rear Bumper</p>
                    </div>
                    <div className="card1-first-property">
                        <div className="card2-property-icon">
                             <Check size={18} color='#C21A1A'/>
                        </div>
                        <p>Full Hood, Roof & Trunk</p>
                    </div>
                    <div className="card1-first-property">
                        <div className="card2-property-icon">
                             <Check size={18} color='#C21A1A'/>
                        </div>
                        <p>Full Driver & Passenger Side</p>
                    </div>
                    <div className="card1-first-property">
                        <div className="card2-property-icon">
                             <Check size={18} color='#C21A1A'/>
                        </div>
                        <p>Side Mirrors & Headlights</p>
                    </div>
                    <div className="card1-first-property">
                        <div className="card2-property-icon">
                             <Check size={18} color='#C21A1A'/>
                        </div>
                        <p>Full Quarter & Rocker Panels</p>
                    </div>
                 </div>
                 <button>Get Started</button>
            </div>

            <div className="pricing-card1">
                 <div className="pricing-card-top">
                    <div className="pricing-card-top-image">
                    <img src={assets.Group3} alt="" />
                    </div>
                    <div className="pricing-card-top-text">
                        <p>Partial Wrap</p>
                        <h2>Silver Package</h2>
                    </div>
                 </div>
                 <p className='pricing-card-p1'>Lorem ipsum dolor sit amet doloroli sitol conse ctetur adipiscing elit.</p>
                 <p className='card1-price'>$399</p>
                 <p>What's Included</p>

                 <div className="card-properties">
                    <div className="card1-first-property">
                        <div className="card1-property-icon">
                             <Check size={18} color='#fff'/>
                        </div>
                        <p>18” Hood & Fenders</p>
                    </div>
                    <div className="card1-first-property">
                        <div className="card1-property-icon">
                             <Check size={18} color='#fff'/>
                        </div>
                        <p>Side View Mirrors/ or Headlights</p>
                    </div>
                    <div className="card1-first-property">
                        <div className="card1-property-icon">
                             <Check size={18} color='#fff'/>
                        </div>
                        <p>4 Door Cups</p>
                    </div>
                    <div className="card1-first-property">
                        <div className="card1-property-icon">
                             <Check size={18} color='#fff'/>
                        </div>
                        <p>Trunk Stripe</p>
                    </div>
                    <div className="card1-first-property">
                        <div className="card1-property-icon">
                             <Check size={18} color='#fff'/>
                        </div>
                        <p>Full Front Bumper</p>
                    </div>
                 </div>
                 <button>Get Started</button>
            </div>
            </div>
        </div>

        <div className="background-image1">
            <img src={assets.Background1} alt="" />
        </div>

        {/* How to make this easy */}

        <div className="make-it-easy">
            <div className="make-it-easy-top">
                <h1>HOW WE MAKE THIS EASY?</h1>
                <p>Whether you’re looking to give your ride an eye-catching new look with a full vehicle wrap or just want to add some flair with a partial car wrap, our team can help you find the perfect solution for your vehicle.</p>
            </div>
            <div className="make-it-cards">
                <div className="make-it-card1">
                    <img src={assets.book1} alt="" />
                    <h3>Request An Estimate</h3>
                    <p>Start with a simple phone call, email or conversation.</p>
                </div>

                <div className="make-it-card1">
                    <img src={assets.book2} alt="" />
                    <h3>Gather More Information</h3>
                    <p>Our office will reach out to get a better understanding of your project needs in terms of design, project size and timeline.</p>
                </div>

                <div className="make-it-card1">
                    <img src={assets.book3} alt="" />
                    <h3>We Create a Precise Quote</h3>
                    <p>We’ll take the time to create a fantastic scope of work according to your budget.</p>
                </div>

                <div className="make-it-card1">
                    <img src={assets.book4} alt="" />
                    <h3>Print and Install</h3>
                    <p>Our veteran installation team will help your automobile look fantastic with the wrap that you will love to drive.</p>
                </div>
            </div>
            <button>Request An Estimate Now</button>
        </div>
        {/* Car Wraps Truck Wraps Paint Shields */}

        <div className="wraps-types">
            <img src={assets.Rectangle1} className='wrap-types-image' alt="" />
          <div className="wraps-types-main">
            <div className="wraps-type1">
                <div className="wrap-type1-top">
                 <div className="car-wraps-text">
                    <h1>Car</h1>
                    <h1>Wraps</h1>
                 </div>
                 <div className="moveup-icon">
                    <MoveUpRight color='#fff' size={25}/>
                 </div>
                 </div>
                 <p>Custom car wraps and & vehicle graphics that looks better than paint.Custom car wraps and & vehicle graphics that looks better than paint.</p>
            </div>

            <div className="wraps-type1">
                <div className="wrap-type1-top">
                 <div className="car-wraps-text">
                    <h1>Truck</h1>
                    <h1>Wraps</h1>
                 </div>
                 <div className="moveup-icon">
                    <MoveUpRight color='#fff' size={25}/>
                 </div>
                 </div>
                 <p>Custom car wraps and & vehicle graphics that looks better than paint.Custom car wraps and & vehicle graphics that looks better than paint.</p>
            </div>

            <div className="wraps-type1">
                <div className="wrap-type1-top">
                 <div className="car-wraps-text">
                    <h1>Paint</h1>
                    <h1>Shields</h1>
                 </div>
                 <div className="moveup-icon">
                    <MoveUpRight color='#fff' size={25}/>
                 </div>
                 </div>
                 <p>Custom car wraps and & vehicle graphics that looks better than paint.Custom car wraps and & vehicle graphics that looks better than paint.</p>
            </div>
            </div>
        </div>

        {/* Reviews Sections */}

        {/* <div className="review-section">
            <div className="review-section1">
                 <div className="medal-text">
                    <img src={assets.Medal} alt="" />
                    <p>OUR HAPPY CUSTOMERS</p>
                 </div>
                 <div className="review-section-images">
                    <img src={assets.avatar1} alt="" />
                 </div>
                 <p className='review-section-p1'>We are committed to delivering the same high-quality of service that we have provided to so many clients throughout the years. See our outstanding reviews on Google.</p>
                 <div className="p2-arrow-right">
                    <p>Join Our List of Happy Customers</p>
                    <ArrowRight color='black'/>
                 </div>
            </div>

            <div className="review-section2">
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur adipiscing elit, Consectrtur.</p>
                 <p>I would recommend them to friends and family without hesitation.</p>
                 <p>Sherri M.</p>
                 
            </div>
            
        </div> */}

       
   

    </div>
  )
}

export default Pricing
