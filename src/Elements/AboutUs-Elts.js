import React from "react";
import Hygiene from '../images/AboutUs/Hygiene.png'
import Affordable from '../images/AboutUs/Affordable.png'
import Welcoming  from '../images/AboutUs/Welcoming.png'
import Quality from '../images/AboutUs/Quality.png'

export const OurGoals=[
{
    icon:Hygiene,
    goal:'Hygiene and Environment',
    desc:'Our shop is maintained to the highest standards of cleanliness and adheres to all health and safety regulations.'
},
{
    icon:Quality,
    goal:'Food Quality',
    desc:'Our commitment to using the finest, freshest ingredients is unwavering. The quality of our pastries is reflected by what goes in their making.'
},
{
    icon:Welcoming,
    goal:'Welcoming Environment',
    desc:'Our shop provides a friendly and welcoming environment where friends and family can gather, share stories, and create lasting memories. '
},
{
    icon:Affordable,
    goal:'Affordability',
    desc:'We offer reasonably priced products that prove that everyone can savor good quality sweets witjout having to break the bank.'
},
]

export const AboutUsIntro =()=>{
    return(
        <div className="IntroC">
       
            <p className="IntroSlogan">At Pâtisserie Gatée,<br></br> we turn simple moments into extraordinary experiences through the art of pastry.</p> 
            <p className="IntroText"> With a passionate pastry chef in charge and an unwavering commitment to quality and affordability, Our small, family-owned pastry shop became a beloved fixture in the community.</p>
        </div>
        )
}


export const OurHistory=()=>{
    return(
<div className="HistoryC">
    <p className="HistoryTitle"><b>Our History:</b></p>
    
    <ul className="HistoryDesc">
        <li>In 2019, as Lebanon grappled with an economic crisis, we took a leap of faith and opened Gatée to share our love for pastries with the world. </li>
        <li>Our founder, Chef Elias Saba, brings over 15 years of rich culinary experience in the art of french and international pastry to every creation. </li>
        <li>Despite the challenges that our nation faced, we stood resilient, determined to bring a little sweetness into the lives of our fellow citizens.</li>
        Our story is one of unwavering dedication to our craft and a deep love for the people of our town.
        </ul>
        
        </div>
    )
}

export const OurPricing=()=>{
return(
<div className="PricingC" > 
<h1><b>Our Pricing:</b></h1>

<ul className="PricingUl1" >
Our pricing structure is designed with careful consideration of two key factors: 
<li>The quality of ingredients we use in our products</li>
<li>The ongoing economic instability in Lebanon</li>
</ul>

<ul className="PricingUl2" >
<b>The cost of our cakes is determined by a few factors:</b>
<li><b>Number of Servings:</b> <br></br>The size of the cake depends on the number of servings you require, ensuring that you pay only for what you need.</li>
<li> <b>Cake Design and Difficulty:</b> <br></br>The pricing changes according to the artistry demanded. We believe in rewarding the craftsmanship that goes into creating a stunning cake.</li>
<li> <b>Filling and Flavors:</b> <br></br>Different fillings and flavors can affect the overall cost of your cake. We offer a wide array of choices to cater to your preferences.</li>
</ul>
</div>

)

}
