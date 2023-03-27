import React from 'react'
import "./SecondMain.css"
import SecMainImg from "../../assets/secondmainimg.svg"
import mentors from "../../assets/mentors.svg" 
import meetings from "../../assets/meetings.svg" 
import meetings2 from "../../assets/meetings2.svg" 
import affordable from "../../assets/affordable.svg" 

const SecondMain = () => {
  return (
    <div className='secondmain-container'>
        <div className="leftcolumn">
          <div className="containertext">
            <h1>This is why we are the best from others</h1>
            <p className='paragraph'>High definition video is video of higher resolution and quality than standard definition. While there is no standard meaning for high definition, generally any standard video image</p>
 
          </div>
          <img src={SecMainImg} width="600px" height="375px"className='secmainimg'/>
          </div>

          <div className="rightcolumn">

              <div className="colcard">
                <img src={mentors}/>
                <p className='heading'>Experienced Mentors</p>
                <p className='body'>high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. </p>
              </div>
              <div className="colcard">
                <img src={meetings}/>
                <p className='heading'>One-On-One Meetings</p>
                <p className='body'>high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. </p>
              </div>
              <div className="colcard">
                <img src={meetings2}/>
                <p className='heading'>One-on-One Meetings</p>
                <p className='body'>high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. </p>
              </div>
              <div className="colcard">
                <img src={affordable}/>
                <p className='heading'>Affordable Prices</p>
                <p className='body'>high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. </p>
              </div>
        </div>
        
        

    </div>
  )
}

export default SecondMain
