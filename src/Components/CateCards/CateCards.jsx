import React from 'react'
import './CateCards.css'
import { catagoriesData } from '../../assets/Images/assets'
const CateCards = () => {
  return (
    <div className='cate-cards-main'>
        {catagoriesData.map((card1, index)=>(
                <div key={index} className='maping-card1' >
                    <img src={card1.image} alt="Project.title" className='maping-card1-image' />
                        <p>{card1.title}</p>
                        <p>{card1.protection} </p>
                        <p>{card1.price} </p>
                        <p>{card1.percentage} </p>
                        </div>


            ))}
    </div>
  )
}

export default CateCards
