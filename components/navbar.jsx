import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav>
   <h1 className='violet'>Hitfit</h1>
        <ul>
          <li><a href="#home">Home</a></li>  
          <li><a href="#about">About</a></li>  
            <li><a href="#programs">Programs</a></li>
            <li><a href="#facilities">Facilities</a></li>
            <li><a href="#locations">Locations</a></li>
        </ul>

        <a className='class' href='#programs'>View Classes</a>
        <Outlet/>
    </nav>
  )
}
