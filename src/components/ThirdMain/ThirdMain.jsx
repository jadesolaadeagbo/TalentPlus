import React from 'react'
import "./ThirdMain.css"
import img1 from "../../assets/img1.svg"
import img2 from "../../assets/img2.svg"
import img3 from "../../assets/img3.svg"
import img4 from "../../assets/img4.svg"
import img5 from "../../assets/img5.svg"
import img6 from "../../assets/img6.svg"
import grade from "../../assets/grade.svg"
import book from "../../assets/book.svg"
import clock from "../../assets/clock.svg"
import leo from "../../assets/leo.svg"
import jeff from "../../assets/jeff.svg"
import claretta from "../../assets/claretta.svg"
import jessica from "../../assets/jessica.svg"
import samuel from "../../assets/samuel.svg"
import adam from "../../assets/adam.svg"

const data = [
    {
        img: img1,
        title:"Introduction to user research in UX Design",
        tag:"Design",
        rating:"(32.7k+)",
        time:"23hrs 50mins",
        lessons:"15 Lessons",
        profile:"Leonard Victor",
        profileImg:leo,
        amount:"$15.00"

    },
    {
        img: img2,
        title:"Introduction to new marketing audience",
        tag:"Marketing",
        rating:"(8.7k+)",
        time:"22hrs 30mins",
        lessons:"22 Lessons",
        profile:"Jeffrey Williams",
        profileImg:jeff,
        amount:"$32.00"

    },   {
        img: img3,
        title:"Introduction to HTML, CSS &Bootstrap",
        tag:"Development",
        rating:"(12.7k+)",
        time:"45hrs 50mins",
        lessons:"55 Lessons",
        profile:"Leonard Victor",
        profileImg:claretta,
        amount:"$55.00"

    },    {
        img: img4,
        title:"Introduction to javascript, Git & Github",
        tag:"Development",
        rating:"(32.7k+)",
        time:"30hrs 50mins",
        lessons:"22 Lessons",
        profile:"Jessica Duke",
        profileImg:jessica,
        amount:"$45.00"

    },    {
        img: img5,
        title:"Introduction to outroom marketing analysis",
        tag:"Marketing",
        rating:"(4.7k+)",
        time:"33hrs 50mins",
        lessons:"26 Lessons",
        profile:"Samuel Jacobs",
        profileImg:samuel,
        amount:"$25.00"

    },   {
        img: img6,
        title:"Introduction to live marketign analysis",
        tag:"Marketing",
        rating:"(16.7k+)",
        time:"10hrs 50mins",
        lessons:"32 Lessons",
        profile:"Adam Smith",
        profileImg:adam,
        amount:"$25.00"

    }
]

const ThirdMain = () => {
  return (
    <div className='thirdmaincontainer'>
        <h1>Browse Our Popular Courses</h1>
        <p className='p-text'>high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</p>

        <div className="main-nav">
            <ul>
                <li><button style={{color:'#004DB3', backgroundColor:'white'}}>All Categories</button></li>
                <li><button>Design</button></li>
                <li><button>Development</button></li>
                <li><button>Marketing</button></li>
            </ul>
        </div>

        <div className="image-container">
            {data.map((datum) => (
                
            
            <div className="image">
                <img src={datum.img} className='imgg'/>
                <div className="rating">
                    <button className='rating-button'>{datum.tag}</button>
                    <span>4.7k&nbsp;  
                        <img src={grade} />
                        &nbsp;
                    {datum.rating}</span>
                </div>
                <p>{datum.title}</p>
                <span className='moreinfo'>
                    <span className='item'><img src={clock}/>
                        <span>{datum.time}</span>
                    </span>
                    <span className='item'><img src={book}/>
                        {datum.lessons}
                    </span>      
                </span>

                <div className="lastrow">
                   <span className='left'>
                        <img src={datum.profileImg} alt="" />
                        {datum.profile}
                   </span> 
                   <span className="right">
                    {datum.amount}
                   </span>
                </div>
            </div>
           ))}
        </div>
        <div className="explorediv">
           <button className="explore">Explore All Courses</button> 
        </div>
        
    </div>
  )
}

export default ThirdMain
