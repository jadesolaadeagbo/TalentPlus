import React from 'react'
import "./Footer.css"
import TechTime from "../../assets/techtime.svg"
import Facebook from "../../assets/facebook.svg"
import Twitter from "../../assets/twitter.svg"
import YouTube from "../../assets/youtube.svg"
import Instagram from "../../assets/instagram.svg"
import Discord from "../../assets/discord.svg"

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className="column1">
            <img src={TechTime} width="120px/" height="48px"/>
            <p>Reach out to us on any of our social media networks</p>
            <div className="icons">
                <img src={Facebook}/>
                <img src={Twitter}/>
                <img src={YouTube}/>
                <img src={Instagram}/>
                <img src={Discord}/>
            </div>
        </div>

        <div className="column2">
            <h1>Useful Links</h1>
            <ul className="footer-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Courses</a></li>
                <li><a href="#">Testimonial</a></li>
                <li><a href="#">Community</a></li>
            
            </ul>   
        </div>

        <div className="column3">
            <h1>Community</h1>
            <ul className="footer-links">
                <li><a href="#">Help Centers</a></li>
                <li><a href="#">Partners</a></li>
                <li><a href="#">Suggestion</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Newsletter</a></li>
            
            </ul>   
        </div>

        <div className="column4">
            <h1>Subscribe Us</h1>
            <input type="text" placeholder='nft123@gmail.com' className='searchinput' />
            <button className="send">Send Message</button>

        </div>
    </div>
  )
}

export default Footer
