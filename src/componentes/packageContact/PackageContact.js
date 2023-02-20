import React, { useState } from 'react'
import {RiCloseFill} from "react-icons/ri";
import './packageContact.css'
import * as emailjs from "emailjs-com";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function PackageContact ({closeContact, packgname}) {

  const [formstate, setFormstate] = useState({});
  const [popup,setPopup]=useState(false);
  const changeHandler = (event) =>{
    setFormstate({...formstate, [event.target.name]:event.target.value});
  };
  const submitHandler = (event) => {
    event.preventDefault();
      if (Object.entries(formstate).length < 6 ){
        setPopup(true);
      }
      else if(Object.entries(formstate.name).length===0 ||Object.entries(formstate.phone).length===0 || Object.entries(formstate.message).length===0 || Object.entries(formstate.email).length===0 || Object.entries(formstate.members).length===0 || Object.entries(formstate.tripdate).length===0){
        setPopup(true);
      }
    else{
    var data = {
      from_name: formstate.name,
      reply_to: formstate.email,
      message:formstate.message,
      from_phone:formstate.phone,
      package_name:packgname,
      start_date:formstate.tripdate,
      members_expected:formstate.members,

    };

      emailjs.send("service_hyfb88d", "template_yu84o8s", data, "tl0LfWD11lXvxIOob")
      .then((result) => {
          console.log(result.text);
          toast.success("Email Sent Successfully");
          closeContact(false);
      }, (error) => {
        toast.error(error.text);
      });
    }
  };
  
  return (
    <div className="package-contact-container">
      <ToastContainer position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"/>
      <div className={popup ?'alert-message':'alert-popup-message'}>
      <span className="alert-message-close popup-Close" onClick={()=>setPopup(false)}><RiCloseFill /></span>
        <div className='alert-message-body Content'>
          Please Fill the Contact Form Before Submitting
        </div>
      </div>
        <span className="package-contact-popup-close popup-Close" onClick={()=>closeContact(false)}><RiCloseFill /></span>
        <div className='package-contact-popup-body'>
        <form name="contactform" id="contactform" className="contact-form">
    <div className="cd-popup-container">

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
      <div className="packagename">
        <div className='package-input' readOnly>Package - {packgname}</div>
      </div>
      <div className='tripdate'>
        <input type="date" id="tripdate" name="tripdate" placeholder='Expected Date' value = {formstate.tripdate || ""} onChange={changeHandler}  onFocus={(e) => (e.target.type = "date")}/>
      </div>
      <div className="members">
        <input type="text" id="members" name="members" placeholder='Expected Members' value={formstate.members || ""} onChange={changeHandler}  pattern='[0-9]{1,2}'/>
        <span className='error-message'>Value should be in digits</span>
      </div>
      <div className="message">
        <textarea name="message" id="message" placeholder='Message'value={formstate.message || ""} 
                                onChange={changeHandler}></textarea>
        <span className='error-message'>Query should not be empty</span>
      </div>
      <div className="control">
        <div id="cancel" onClick={()=>closeContact(false)}>Cancel</div>
        <div id="send" onClick={submitHandler}>Submit</div>
      </div>
    </div>
  </form>
        </div>
    </div>
  )
}

  
export default PackageContact