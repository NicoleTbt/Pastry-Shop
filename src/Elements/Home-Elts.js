import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons'

import chefImg from '../images/HomePage/ChefImg.jpg'
import '../CSS/Home.css'


export const ChefDesc=()=>{ 
    return (
        <div className='Chef'>
            <img className='chefImg' src={chefImg} alt='chef'/>
            <p className='chefDesc'> 
                <b>Meet our Chef "Elias Saba":</b> 
                <br /> 
                Certified Pastry Chef 
                <br /> 
                With over 15 years of experience. 
                <br /> 
                Before opening Gatée worked as Head Chef at several high-end pastries 
            </p>
        </div> ) }


export const TestObj=[
    {review:"Their cakes are absolutely perfect, super moist and full of flavor! We order all the cakes for our family's special events from Gatée and we were never disappointed",
name:'Maha Abou Jawdeh',
desc:'Regular Customer'},
{review:'Super cute and cozy place with amazing pastries. The Chef and his wife are super nice and welcoming. I definitely recommend a visit!',
name:'Monie Kassouf',
desc:'food blogger'},
{review:'Great neighborhood pastry shop. Excellent selection of eclairs and tartes. If you want good quality yet affordable sweet treats, you need to visit.',
name:'Anthony Tabet',
desc:'Local Guide'}
]

export const Schedule=()=>{
return(
    <div>
<ul className='Schedule'> <b>Our Schedule:</b>
<li>Monday: Closed</li>
 <li>WeekDays: 9:00 AM Till 6:00 PM</li> 
 <li>WeekEnds: 9:00 AM Till 9:00 PM</li>
 <p>!Occational Closing Days Will Be Announced On Our Socials!</p>
</ul>

<h3>To Know More About Our Business Please Check: <Link to='./AboutUs' className='AUlink'>&#8594; About Us </Link> </h3>


</div>
)
} 


export const Location=()=>{
    return(
        <div >
<a href='https://maps.app.goo.gl/zKUm2JH5nmGTHyUv6'><FontAwesomeIcon icon={faMapLocationDot} className='MapsLogo' /></a>
</div>
)}