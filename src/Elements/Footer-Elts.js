import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot  } from "@fortawesome/free-solid-svg-icons"
import {faFacebookF} from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'

import '../CSS/Footer.css'

export const Insta=({stlclass})=>{
    return(
        <a href='https://www.instagram.com/patisseriegatee/?hl=en'  rel="noreferrer" target="_blank" >
            <FontAwesomeIcon icon={faInstagram} className={stlclass} />
            </a>
    )
        
}

export const Facebook=({stlclass})=>{
    return(
        <a href='https://www.facebook.com/patisseriegatee'  rel="noreferrer" target="_blank" >
            <FontAwesomeIcon icon={faFacebookF} className={stlclass} />
            </a>
    )
}


export const Maps=({stlclass})=>{
    return(
        <a href='https://maps.app.goo.gl/zKUm2JH5nmGTHyUv6' rel="noreferrer" target="_blank" > 
        <FontAwesomeIcon icon={faLocationDot} className={stlclass} /> 
        </a>)
}



export const Socials=()=>{
    return(
        <div className='socials'> 
            <h4>Check Our Social Media Accounts: </h4>
            <div className='Box'> 
                <Insta stlclass='Icons'/>
                <Facebook stlclass='Icons'/>
            </div>
        </div>
    )
}
 export const Phone=()=>{
    return(
        <div className='Box'>
            <FontAwesomeIcon icon={faPhone} className='Icons' />
            <h4>03 669 765</h4>
        </div>
    )
}

export const Copyright=()=>{
    return(
        <div className='CprBox'>
<FontAwesomeIcon icon={faCopyright} className='CprIcon'/>
<h5>Nicole Tabet 2023 / Pâtisserie Gatée</h5>
</div>
    )
}
