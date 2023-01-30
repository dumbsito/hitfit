import React from 'react'
import "./footer.scss"
export const Footer = () => {
  return (
    <footer>
         <div className='list d-flex'>
         <div className='links'>
          <div>
            <h1>Links</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Programs</li>
                <li>Facilities</li>
                <li>Locations</li>
            </ul>
        </div>
        <h1 className='social'>SOCIAL MEDIA</h1>
         <i className="fa-brands fa-2x fa-instagram"></i>
         <i className="fa-brands fa-2x fa-facebook"></i>
         <i className="fa-brands fa-2x fa-twitter"></i>
        </div>
        

        <div className='get'>
            <h1>GET IN TOUCH</h1>
            <div className='mail'>
                <label>Email</label>
                <label>Maddison Garden</label>
                <p>gymnaturamaddison@gmail.com</p>
                <label>Blairgrove</label>
                <p>gymnaturablairgrove@gmail.com</p>
            </div>
        </div>

        <div className='phone'>
        <label>Phone</label>
        <label>Maddison Garden</label>
        <p>1-548-743-6743</p>
                <label>Blairgrove</label>
                <p>1-235-325-2353</p>
        </div>
        </div>
        <div className='finalFooter'>
            <h1>HITFIT</h1>
            <p>Designed & Developed by LeandroDesign</p>
        </div>
    </footer>
  )
}
