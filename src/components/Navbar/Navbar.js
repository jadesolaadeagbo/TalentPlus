import React from 'react'
import "./Navbar.css"
import TechTime from "../../assets/techtime.svg"

const Navbar = () => {
  return (
    <div className='nav-container'>
        <img src={TechTime}/>

        <div className="subnav">
            <ul className="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Courses</a></li>
                <li><a href="#">Testimonial</a></li>
                <li><a href="#">Community</a></li>
            
            </ul>    
            <button>Enroll Now</button>
        </div>

    </div>
  )
}

export default Navbar
