import React from 'react'
import "./About.scss"
export const About = () => {
  return (
    <>
    <div className='about' id='about'>
        <div className='fitness'>
        <h1>FITNESS FOR <span className='violet'>HER</span></h1>
        <p>Natura was founded in 2014 by two women who were passionate about health and fitness. They wanted to create a safe space for women to workout, free from the judgment and harassment that they often experienced in traditional gyms.</p>
        <p>The gym has helped countless women improve their health and wellbeing, and it continues to be a place where women can come together to support and motivate each other.</p>
        <button className='boton'>Join natura</button>
        </div>
    </div>

<div className='about2'>
<div className='building'>
<h1>BUILDING <span className='violet'>CONFIDENCE</span>. BUILDING FITNESS.</h1>
<p>As a women-only gym, our main focus is to help women build confidence through working out and staying healthy. We offer a variety of classes and programs that are designed to help women of all fitness levels reach their goals.</p>
<p>With Natura you can gain access to a supportive community of women, improving your overall fitness, and increasing your self-confidence.</p>
<button className='boton'>See Locations</button>
</div>
</div>
  
  <div className='about3 d-flex'>
  <img src='/public/about3.png'/>
    <div className='perspire'>
    <h1>PERSPIRE TO <span>GREATNESS</span></h1>
    <p>With experienced and certified instructors, Natura is the perfect place to get started on your fitness journey or take your workout to the next level. We offer a variety of classes designed to help women of all shapes and sizes.</p>
    <p>Our classes include everything from yoga and pilates to kickboxing and strength & personal training, nutritional counseling, and massages plus workshops that focus on topics such as body image, self-care,</p>
    <button className='boton'>See Programs</button>
    </div>
 
  </div>
    
    </>
  )
}
