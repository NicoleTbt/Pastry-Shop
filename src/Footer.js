import React from "react";
import {Link} from 'react-router-dom'
import {Socials , Phone , Copyright} from './Elements/Footer-Elts'

import './CSS/Footer.css'


export const Footer =()=>{
    return(
        <footer>
            <Socials/>
            <Phone/>
            <p className="Contact">
                Leave A Direct Message:
                <Link to='./ContactUs' className='CULink'>&#8594; Contact Us</Link>         
            </p>
            <Copyright/>
        </footer>
    )

}


export default Footer