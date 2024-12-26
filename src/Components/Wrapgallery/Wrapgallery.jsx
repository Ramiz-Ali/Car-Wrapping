import React from 'react';
import './Wrapgallery.css';
import { assets, WrapData } from '../../assets/Images/assets';

const Wrapgallery = ({ search }) => {
  return (
    <div className="wrap-gallery-main">
      <img className="gallery-wrap-car1" src={assets.wrapCar} alt="Gallery Wrap" />

      <div className="wrap-second-text">
        <p>
          Discover our impressive collection of car wraps, food truck wraps, and paint protection film (PPF) projects! With years of experience, our team delivers high-quality, eye-catching designs that transform vehicles. Browse our gallery to see how we customize cars and trucks with various styles, colors, and materials.
        </p>
      </div>

      <div className="wrap-gallery-card">
        
        {WrapData.filter((wrapCard) =>
          wrapCard.title.toLowerCase().includes(search.toLowerCase())
        ).map((wrapCard, index) => (
          <div key={index} className="wrap-card1">
            <img src={wrapCard.image} alt={wrapCard.title} />
            <p>{wrapCard.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wrapgallery;
