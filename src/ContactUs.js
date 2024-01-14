import React, { useState } from "react"
import './CSS/ContactUs.css'

const ContactUs=()=>{

       const [firstName, setFirstName] = useState("")
       const [lastName, setLastName] = useState("")
       const [email, setEmail] = useState("")
       const [phoneNumber, setPhoneNumber] = useState("")
       const [subject, setSubject] = useState("")
       const [message, setMessage] = useState("")
       const [showPopup, setShowPopup] = useState(false)
       const [showConfirmation, setShowConfirmation] = useState(false)

      const Submit = (e) => {
        e.preventDefault()
      
        if (!firstName || !lastName || !email || !phoneNumber ||!subject || !message) {
            alert("Please fill out all fields")
            return
        }

        setShowConfirmation(true)

      }
      
      const Send = () => {
        setFirstName("")
        setLastName("")
        setEmail("")
        setPhoneNumber("")
        setSubject("")
        setMessage("")

        setShowConfirmation(false)
        setShowPopup(false)
      }

      const Cancel = () => {
        setShowConfirmation(false)      
      }      
      
 return (
  <div className="ContactUs"> 
    {!showConfirmation &&
        <form className="Form" onSubmit={Submit} >

          <div className="FN"> 
            <label > First Name: </label>
          <input maxLength={30} type="text" required  value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </div>

          <div className="LN"><label > Last Name: </label>
          <input maxLength={30} type="text" required  value={lastName} onChange={(e) => setLastName(e.target.value)} /></div>

          <div className="Phone"><label > Phone: </label>
          <input maxLength={20}  type="tel" required  value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} /></div>

          <div className="Email"><label > Email: </label>
          <input size={50}   type="Email" required  value={email} onChange={(e) => setEmail(e.target.value)} /></div>

          
          
          <div className="Message">
          <select   className="Subject" onChange={(e) => setSubject(e.target.value)}>
            <option value=''>Select Subject</option>
            <option value='AddInfo'>Additional Information</option>
            <option value='Order'>Order</option>
            <option value='Custom order'>Custom Order</option>
            <option value='Review'>Review</option>
            <option value='Complaint'>Complaint</option>
            <option value='Other'>Other</option>
          </select>

          <textarea rows="8"  className="Text"  value={message} onChange={(e) => setMessage(e.target.value)}   >Please write your message: </textarea> 
          </div>
          <div className="FormBtns">
          
          <button onClick={Send}> Reset </button>
          <button type="submit"> Submit </button>

          </div>

        </form>
} 

   {showConfirmation && 
   
    <div className="SendMessage">

    {!showPopup &&
    <div>
      <div className="PersonalInfos">
     <p>Name: {firstName} {lastName}<br/>
     Email: {email}<br/>
     Phone number: {phoneNumber}<br/> Subject: {subject}</p>

     <p className="YMessage">Your Message: <br/> {message}</p>
     </div>

     


     <div className="FormBtns">

     <button onClick={Cancel} > Cancel </button>
     <button onClick={()=>setShowPopup(true)}> Send </button>
    
     </div>
     </div>
}
{showPopup &&
      <div className="popup"> 
       <p style={{fontSize:60 , margin:0 , marginRight:'-90%'}} onClick={Send}>&#x2715;</p>
         <p>Pâtisserie Gatée <br/> Thanks You For Your Message</p>
      
      </div>

    }
    </div>
}


   


  </div>
    )
   
}

export default ContactUs