import React from 'react'
import Navbar from '../Navbar/Navbar'
import "./Home.css"
import bg from '../../assets/bg.svg'
import zoom from "../../assets/zoom.svg"
import stripe from "../../assets/stripe.svg"
import monday from "../../assets/monday.svg"
import slack from "../../assets/slack.svg"
import dropbox from "../../assets/dropbox.svg"

const Home = () => {
  return (
    <div className="home-container">
      <Navbar/>
      <div className="home-body">
        <img src={bg} className="images"/>
      </div>
        
      
      <div className="platforms">
        <img src={zoom}/>
        <img src={stripe}/>
        <img src={monday}/>
        <img src={slack}/>
        <img src={dropbox}/>
      </div>
    </div>
  )
}

export default Home
