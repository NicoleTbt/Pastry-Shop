import React from "react"
import {NavLink} from "react-router-dom"

import navLogo from './images/HomePage/logo.png'
import {Insta , Facebook , Maps} from './Elements/Footer-Elts'

import './CSS/NavBar.css'



function Navbar (){
return (
<header id='navbar'>
  <nav className="navBar">
      <Maps stlclass='Icon , socialsbox'/>

    <NavLink  className="links" to="/" >Home</NavLink>
    <NavLink className="links" to="/AboutUs">About Us</NavLink>
   
    <NavLink to="/"> <img className="logo" id='navLogo' src={navLogo} alt='logo' /> </NavLink>
    
    <NavLink className="links" to="/Gallery">Gallery</NavLink>
    <NavLink className="links" to="/ContactUs" >Contact Us</NavLink>
    
    
    <div className="socialsbox">
      <Insta stlclass='Icon'/>
      <Facebook stlclass='Icon' />
    </div>


  </nav>
</header>
)
}



export default Navbar