import React, { useState } from 'react';
import './Contact.css'
import Header from '../../Components/Header/Header'
import Navbar from '../../Components/Navbar/Navbar'
import HomeGallery from '../../Components/Home_Gallery/Home_Gallery'
import Footer from'../../Components/Footer/Footer'
import { toast } from 'react-toastify';
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "bc16146c-6ba2-41cc-bc18-054f08e36954");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message)
      setResult("");
    }
  };
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className='contact-main'>
       <Header toggleMenu={toggleMenu}/>
       <Navbar menuOpen={menuOpen} toggleMenu={toggleMenu}/>
      <div className='contact-us-from'>
            <h1>Contact Us</h1>
          <div className="contact-us-inputs" >
        <form onSubmit={onSubmit} className='contact-form' autocomplete="off">
          <div className='contact-input-div'>
              Your Name 
              <input type="text" name='Name' required placeholder='Enter Your Name' />
            </div>

            <div className='contact-input-div'>
              Your Phone Number 
              <input type="text" name='Phone' required placeholder='Enter Your Phone Number' />
            </div>

            <div className='contact-input-div'>
              Email Address 
              <input type="Email" name='Email' required placeholder='Enter Your Email' />
            </div>

            <div className='contact-input-div'>
              Number Of Persons 
              <input type="Number" name='Number' required placeholder='Enter Total Persons' />
            </div>

            <div className='contact-input-div'>
            Your Requirement / Queries 
              <input type="Text" name='Queries' required placeholder=' Type Your Requirement / Queries' />
            </div>
           
          <div className="check-input-div">
          <div className='check-agree'>
            <input type="checkbox"  />
            <p>Agree to terms and conditions</p>
          </div>
          </div>
          <button className='btn-send-me'>{result ? result: "Send Me"}</button> </form>
          <button className='btn-learn-more' >Want To Learn More</button>
          <p className='contact-bottom-text'>Contact our experts to learn more about the advantage of vehicle marketing</p>
          <div className='contact-bottom-text1-div'>
               <h3>Address:</h3>
               <p>1146 Westport Crescent 1F Mississauga, Ontario L5T 1G1</p>
          </div>
          <div className='contact-bottom-text1-div'>
               <h3>WhatsApp:</h3>
               <p>+92 3072208866</p>
          </div>
          <div className='contact-bottom-text1-div'>
               <h3>Email:</h3>
               <p>info@carwaraps.com</p>
          </div>
          </div>
      </div>
      <HomeGallery/>
      <Footer/>
    </div>
  )
}

export default Contact
