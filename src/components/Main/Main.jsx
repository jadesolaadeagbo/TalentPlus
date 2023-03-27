import React from 'react'
import "./Main.css"
import MainImg1 from "../../assets/mainimg1.svg"
import MainImg2 from "../../assets/mainimg2.svg"
import audio from "../../assets/audio.svg"
import live from "../../assets/live.svg"
import recorded from "../../assets/recorded.svg"
import notes from "../../assets/notes.svg"

const Main = () => {
  return (
    <div className='main-container'>
        <div className="submain">
            <div className="text">
                <h1>High quality video, audio & live classes</h1>
                <p className='paragraph'>High definition video is video of higher resolution and quality than standard definition. While there is no standard meaning for high definition, generally any standard video image</p>
                <button className='view'>View Courses</button>
                <div className="card-container">
                    <button className="card">
                        <img src={audio}/>
                        <p>Audio Classes</p>
                        
                    </button>
                    <button className="card">
                        <img src={live}/>
                        <p>Live Classes</p>
                        
                    </button>  
                    <button className="card">
                        <img src={recorded}/>
                        <p>Recorded Classes</p>
                        
                    </button>  
                    <button className="card">
                        <img src={notes}/>
                        <p>50+ Notes</p>
                        
                    </button>                
                </div>


            </div>
            <div className="mainimages">
                <img src = {MainImg1} className="mainimg1" width="500px" height="400px"/>
                <img src = {MainImg2} className="mainimg2" width="300px" height="200px"/>                
            </div>

        </div>
    </div>
  )
}

export default Main
