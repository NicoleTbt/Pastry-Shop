import React, { useState, useEffect } from "react";
import Vitrine from './images/HomePage/VitrineHimg.jpg'
import IceCream from './images/HomePage/IceCream-Himg.jpg'
import { ChefDesc, TestObj,  Schedule, Location} from "./Elements/Home-Elts";
import './CSS/Home.css'

function HomeImg({ Img, Desc }) {
  return (
    <div className="homeImg">
      <p className="homeImgDesc"> {Desc}</p>
      <img className="homeImgImg" src={Img} alt='Main' />
    </div>
  )
}
  
  function HomeImgSlide() {
    const slides = [
      { img: Vitrine, desc:"Pâtisserie Gatée: Where Sweetness and Artistry Combine!" },
      { img: IceCream, desc: 'Enjoy Our Merry Cream On Hot Summery Days!' },
     
    ];
  
    const [currentSlide, setCurrentSlide] = useState(0);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentSlide((currentSlide + 1) % slides.length);
      }, 5000);
  
      return () => clearInterval(intervalId);
    }, );
  
    return (
      <HomeImg Img={slides[currentSlide].img} Desc={slides[currentSlide].desc} />
    );
}
  

function Chef (){
  return(
  <div className="H2">
      <p className="Slogan">Welcome To Pâtisserie Gatée <br></br> Satisfy Your Cravings With Our High Quality Deserts!</p>
      <ChefDesc/>
  </div> ) 
}

function Guide (){
  return(
      <div className="guide"> 
          <p>Find Us At:</p>
        <div className="guideFlex">
        <Location/>
        <p>Jouret El Ballout</p>
        </div>
        <Schedule/>
      </div>
  )
}


function Testimonial ({test:{review , name , desc}}){
  return(
  <div className="testimonial">
      <div className="testimonialReview">{review}</div>
      <div><h2 className="testimonialName">{name}</h2> <p className="testimonialDesc"> {desc} </p> </div>
  </div>
  )
}



function TestimonialSlide (){
  const [testimonial , setTestimonial]=useState(TestObj[0])
  const length=TestObj.length
  const [slide , setSlide]=useState(0)

  function PrevTest (){
    const newslide=slide===0? length-1 : slide-1
   
      setSlide( newslide)
      setTestimonial(TestObj[newslide])
  }

  function NextTest (){
    const newslide=slide===length-1 ? 0 : slide+1
   
      setSlide( newslide)
      setTestimonial(TestObj[newslide])
  }

  return(
      <div className="testimonialC">
      <h1>Testimonials</h1>
  <div className="testimonialSlide">
  <div className="testimonialSlideBtn" onClick={PrevTest}>{String.fromCharCode(0x276e)}</div>
 <Testimonial test={testimonial} />
 <div className="testimonialSlideBtn" onClick={NextTest}>{String.fromCharCode(0x276f)}</div>
  </div>
  </div>
  )
}



 function HomeIntro(){
    return (
        <div id='home'>
            <HomeImgSlide />
            <Chef/>
            <Guide />
            <TestimonialSlide/>
        </div>
    )
}

export default HomeIntro