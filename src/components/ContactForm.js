import React from 'react';
import './css/ContactForm.css'

const ContactForm = (props) => {
   return (

   <div className="container">
      <form onSubmit={props.onHandleSubmit} >
         <h1 className="grow" style={{textAlign: 'center',fontSize: '40px'}}>Contact Form</h1>

         <label htmlFor="lname" style={{fontSize:'25px'}}>
            Name
            <span style={{color:'#DE0208'}}>*</span>
         </label>
         <input
            type="text"
            id="lname"
            name="name"
            placeholder="Your name.."
            value={props.name}
            onChange={props.onNameChange}
            required
            />

         <label htmlFor="fname" style={{fontSize:'25px'}}>
            Email
            <span style={{color:'#DE0208'}}>*</span>
         </label>
         <input
            type="email"
            id="femail"
            name="email"
            placeholder="Your email.."
            value = {props.email}
            onChange = {props.onEmailChange}
            required
            />

         <label htmlFor="subject" style={{fontSize:'25px'}}>
            Subject
            <span style={{color:'#DE0208'}}>*</span>
         </label>
         <textarea
            id="subject"
            name="subject"
            placeholder="Message.."
            style={{height: '200px'}}
            value={props.message}
            onChange={props.onMessageChange}
            required
            >
         </textarea>

         <input type="submit" value="Submit" />

      </form>
   </div>
   )
}

export default ContactForm;
