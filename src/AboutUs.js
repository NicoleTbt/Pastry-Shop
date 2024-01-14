import React, { useState } from "react"
import {Link} from 'react-router-dom'
import {OurGoals , OurHistory , OurPricing, AboutUsIntro} from './Elements/AboutUs-Elts'
import { AllImgArrays } from "./Elements/Gallery-Elts"
import './CSS/AboutUs.css'

const Head=()=>{
    return(
        <div className="AUbg">
            <p className="Title">About Us:</p>
        </div>
    )
}


const Goal=({section:{icon, goal, desc}})=>{
    const [hovered , setHovered]=useState(false)
    const toggleHover=()=>setHovered(!hovered)

    return(
        <div className="GoalBox" onMouseEnter={toggleHover} onMouseLeave={toggleHover}  >
            <img className="GoalImg"  src={icon} alt="goal" />
            <p className="GoalTitle" >{goal}</p>

            {hovered &&
            <p className="GoalDesc" >{desc}</p>
}
        </div>
    )
}

const Goals=()=>{
    return(
        <div className="GoalsC">
        <p className="GoalsCTitle" ><u>Our Goals:</u></p>
            <div className="GoalsCBox" >
            {OurGoals.map((goal,index)=>{return(<Goal key={index} section={goal}/>)}        ) }
            </div>
        </div>
    )
}

const Section=({img, title})=>{
    return(
        <Link to='/Gallery'>
        <div className='Section' >
            <div className="SectionImgContainer">
            <img className='SectionImg'  src={img} alt={title}/>
            </div>
            <p className='SectionTitle' >{title}</p>
        </div>
        </Link>
    )
}

const WeOffer =()=>{
    return(
        <div  className='WeOfferC'>
        <h1 ><b>Our Products:</b></h1>
        <div className='WeOfferCBox' >
            {AllImgArrays.map( (section , index)=>{return( <Section key={index} img={section.array[0]}  title={section.desc}/>)}         )}
        </div>
        </div>
    )
}


const AboutUs=()=>{
    return (
        <div className='ABContainer'>
            <Head/>
            <AboutUsIntro/>
            <OurHistory />
            <Goals/>
            <WeOffer/>
            <OurPricing/>
        </div>
    )
}

export default AboutUs
