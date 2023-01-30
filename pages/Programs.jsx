import React from 'react'
import "./Programs.scss"
export const Programs = () => {
  return (
    <div className='programs' id='programs'>
        <div className='our'>
        <h1>OUR PROGRAMS</h1>
        <p>No matter what your fitness level is, there is a program at Natura that is perfect for you</p>
        </div>

       <div className='card-container'>
       <div className='cards'>
        <img src="/public/card1.avif" alt="" />
         <h1>STRENGTH TRAINING</h1>
         <p>The perfect way for you to get toned, build confidence and get in shape.</p>
       </div>

       <div className='cards'>
        <img src="/public/card2.avif" alt="" />
         <h1>YOGA</h1>
         <p>Relax, unwind and improve your flexibility.</p>
       </div>

       <div className='cards'>
        <img src="/public/card3.avif" alt="" />
         <h1>HIIT</h1>
         <p>Get fit with HIIT. Get your heart rate up and burn some calories.</p>
       </div>

       <div className='cards'>
        <img src="/public/card4.avif" alt="" />
         <h1>WEIGHT LIFTING</h1>
         <p>Get in shape, build strong muscles and improve your strength.</p>
       </div>
       </div>
    </div>
  )
}
