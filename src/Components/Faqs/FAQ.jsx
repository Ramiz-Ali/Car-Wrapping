import React, { useState } from 'react';
import './FAQ.css';  // Import the CSS file for styling

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(prevIndex => (prevIndex === index ? null : index));  // Toggle the active state
  };

  const faqData = [
    {
      question: "1. Can I remove the wrap if I need to sell my car? Will there be damage?",
      answer:
        "Make, model, year, current color, color you’d like to change to or design, if you’d like every painted surface wrapped, do the handles/mirrors/bumper need to be wrapped and any other helpful information. Please fill the form and include pictures. Thanks!"
    },
    {
      question: "2. How long does the car wrap last?",
      answer:
        "A well-maintained wrap can last 5 to 7 years depending on exposure to elements like UV rays and weather conditions. Proper care ensures a long lifespan."
    },
    {
      question: "3. Can I change the design of the wrap after it’s installed?",
      answer:
        "Yes, we offer re-wrapping services, allowing you to update or change the design as per your needs. This can be done without causing any damage to the underlying paint."
    },

    {
        question: "4. Can I remove the wrap if I need to sell my car? Will there be damage?",
        answer:
          "Start With An Online Course. An online tutorial is probably the best way to learn JavaScript. If you're serious about learning fast, efficiently, and without missing any important information, then you should consider enrolling in an online course."
      }

  ];

  return (
    <div className="faq-container">
        <h1 className='faqs-h1-1'>FAQ's</h1>
      {faqData.map((item, index) => (
        <div className={`faq-item ${activeIndex === index ? 'active' : ''}`} key={index}>
          <div
            className="faq-header"
            onClick={() => toggleFAQ(index)}  // Toggle active state
          >
            <h3>{item.question}</h3>
            <span className={`faq-icon ${activeIndex === index ? 'active' : ''}`}>+</span>
          </div>
          <div className={`faq-content ${activeIndex === index ? 'active' : ''}`}>
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
