import React, { useState } from 'react'
import { RiCloseFill } from 'react-icons/ri';
import './extraServicesContact.css'
import * as emailjs from "emailjs-com";
import { toast } from 'react-toastify';


function ExtraServicesContact ({closeContact}) {

    const [formstate, setFormstate] = useState({});
    const [popup,setPopup]=useState(false);
    const changeHandler = (event) =>{
      setFormstate({...formstate, [event.target.name]:event.target.value});
    };
    const submitHandler = (event) => {
      event.preventDefault();
        if (Object.entries(formstate).length < 3 ){
          setPopup(true);
        }
        else if(Object.entries(formstate.name).length===0 ||Object.entries(formstate.phone).length===0 || Object.entries(formstate.email).length===0 ){
          setPopup(true);
        }
        else{
          var data = {
            from_name: formstate.name,
            reply_to: formstate.email,
            message:"",
            from_phone:formstate.phone,
            category:"Cab Rental",
          };
      
          console.log(formstate);
         
            emailjs.send("service_hyfb88d", "template_cgc0u1c", data, "tl0LfWD11lXvxIOob")
            .then((result) => {
                closeContact(false);
            }, (error) => {
              toast.error(error.text);
            });
          }
        }
  return (
    <>
    <div className="extra-contact-container">
      <div className={popup ?'alert-message':'alert-popup-message'}>
      <span className="alert-message-close popup-Close" onClick={()=>setPopup(false)}><RiCloseFill /></span>
        <div className='alert-message-body Content'>
          Please Fill the Contact Form Before Submitting
        </div>
      </div>
        <span className="extra-contact-popup-close popup-Close" onClick={()=>closeContact(false)}><RiCloseFill /></span>
        {/* <div className='extra-contact-popup-body'> */}
        <form name="contactform" id="contactform" className="extra-contact-form">
    <div className="cd-extra-popup-container">

      <div className="name">
        <input type="text" id="name" name="name" placeholder='Name'  value={formstate.name || ""} onChange={changeHandler}  pattern='^(?=.{3,16}$)[A-Z][a-z]+ [A-Z][a-z]+$'/>
        <span className='error-message'>Username should be 3-16 characters, should not contain special characters</span>
      </div>
      <div className="email">
        <input type="email" id="email" name="email" placeholder='Email' value={formstate.email || ""} onChange={changeHandler}  />
        <span className='error-message'>Invalid Email format</span>
      </div>
      <div className="phone">
        <input type="text" id="phone" name="phone" placeholder='Phone' value={formstate.phone || ""} onChange={changeHandler}  pattern='[0-9]{10}'/>
        <span className='error-message'>Phone Number should be 10 digts</span>
      </div>
      <br />
      <div className="extra-control">
        <div id="cancel" onClick={()=>closeContact(false)}>Cancel</div>
        <div id="send" onClick={submitHandler}>Submit</div>
      </div>
    </div>
  </form>
        {/* </div> */}
    </div>
    </>
  )
}

export default ExtraServicesContact