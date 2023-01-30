import React from 'react'
import './Locations.scss'
export const Locations = () => {
  return (
    <>
  <div className='enterEmail' id='locations'>
<div className='convenient'>
    <h1>CONVENIENT. <span>SAFE.</span> AFFORDABLE.</h1>
    <p>If you're looking for a luxury gym that's dedicated to helping women of all shapes and sizes, look no further than Natura. With tons of programs to choose from, you can find the perfect one for your fitness level and goals</p>
    <p>Plus, the supportive community of women at Natura will make you feel right at home. So what are you waiting for? Sign up today and start reaching your fitness goals!

</p>

    <div className='enter'>
        <input type="email" placeholder='Enter your mail'/>
        <button>Join Natura</button>
    </div>
</div>
<div className='images'>
    <img src="/public/womanDumbells1.png" alt="" />
    <img src="/public/womanDumbells2.png" alt="" />
</div>
    </div>

        <div className='location'>
          <div className='bepart'>
            <h1>BE PART OF THE ELITE</h1>
            <p>Whether you're just starting out on your fitness journey or you're a seasoned pro, we have something for everyone.</p>
          </div>

           <div className='location-container'>

            <div className='cards'>
                <img src="/public/location1.avif" alt="" />
                <h1>MADDISON GARDEN</h1>
                <p>Our Maddison Garden location is ideal for women who want to get outdoors and enjoy some fresh air while they work out.</p>
            </div>

            <div className='cards'>
                <img src="/public/location2.avif" alt="" />
                <h1>BLAIRGROVE</h1>
                <p>The Blairgrove location is perfect for women who want to feel pampered while they exercise.</p>
            </div>
           </div>
             
        </div>

    </>
  )
}
