import React from 'react'
import './Home_Gallery.css'
import { assets } from '../../assets/Images/assets'
import { Clock10, Mail, MapPin, Phone } from 'lucide-react'
const Home_Gallery = () => {
  return (
    <div className='home-gallery-main'>
       <div className="home-gallery-card1">
        <h1>Gallery</h1>
        <div className="home-gallery-images">
             <div className="home-gallery-images-line1">
                 <img src={assets.bluetwo} alt="" />
                 <img src={assets.redone} alt="" />
                 <img src={assets.darkred} alt="" />
             </div>

             <div className="home-gallery-images-line1">
                 <img src={assets.blueone} alt="" />
                 <img src={assets.bus} alt="" />
                 <img src={assets.train} alt="" />
             </div>
        </div>
       </div>

       <div className="home-gallery-card2">
             <h1>Contact</h1>
             <div className="home-gallery-card2-data">
                 <div className="card2-data-first">
                    <Phone/>
                    <p>123-456-7890</p>
                 </div>
                 <div className="card2-data-first">
                    <Mail/>
                    <p>admin@gmail.com</p>
                 </div>
                 <div className="card2-data-first">
                    <MapPin/>
                    <p>Rahim Yar Khan</p>
                 </div>
                 <div className="card2-data-first">
                    <Clock10/>
                    <p>Mon to Fri 9:00AM to 6:00PM</p>
                 </div>
             </div>
       </div>

       <div className="home-gallery-card2">
             <h1>Contact</h1>
             <div className="home-gallery-card2-data2">
                    <p>Partial Wraps</p>
                    <p>Full Wraps</p>
                    <p>Car Wraps</p>
                    <p>Food Truck Wraps</p>

             </div>
       </div>
    </div>
  )
}

export default Home_Gallery
