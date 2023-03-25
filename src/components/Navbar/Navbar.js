import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='nav-container'>
        <p>TechTime</p>

        <div className="subnav">
            <ul className="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">Courses</a></li>
                <li><a href="#">Community</a></li>
            
            </ul>    
            <button>Enroll Now</button>
        </div>

    </div>
  )
}

export default Navbar
