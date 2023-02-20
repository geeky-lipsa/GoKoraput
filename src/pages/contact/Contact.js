import React, { useState } from 'react'
import './contact.css'
import { Footer, Header } from '../../componentes'
import * as emailjs from "emailjs-com";
import { Helmet } from 'react-helmet-async';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RiCloseFill } from 'react-icons/ri';

const Contact = () => {
  const [formstate, setFormstate] = useState({});
  const [popup,setPopup]=useState(false);
  const changeHandler = (event) =>{
    setFormstate({...formstate, [event.target.name]:event.target.value});
  };
  function submitHandler(e){
    e.preventDefault(); 
    if (Object.entries(formstate).length < 4 ){
      setPopup(true);
    }
    else if(Object.entries(formstate.name).length===0 ||Object.entries(formstate.phone).length===0 || Object.entries(formstate.message).length===0 || Object.entries(formstate.email).length===0){
      setPopup(true);
    }
    else{
    var data = {
      from_name: formstate.name,
      reply_to: formstate.email,
      message:formstate.message,
      from_phone:formstate.phone,
      category:"Packages",
      
    };

    console.log(formstate);
    console.log(data);
      emailjs.send("service_hyfb88d", "template_cgc0u1c", data, "tl0LfWD11lXvxIOob")
      .then((result) => {
          
          toast.success("Email Sent Successfully");
          setFormstate({});
      }, (error) => {
        toast.error(error.text);
      });
    }
  }
  return (
    <>
    <Helmet>
    <title>Contact Us | Go Koraput</title>
    <meta name="description" content="Need help planning your trip to Koraput, Odisha? Contact us for any enquiries. Our friendly team is ready to assist you with all your travel needs."/>
    <link rel="canonical" href="/Contact" />
    </Helmet>
    <div className="contact-container">
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
      <Header />
      <h1 className='Heading'>Feel free to get in touch.</h1>
      
  <form name="contactform" id="contactform" className="contact-form">
    <div className="cd-popup-container">
    <div className={popup ?'alert-message':'alert-popup-message'}>
      <span className="alert-message-close popup-Close" onClick={()=>setPopup(false)}><RiCloseFill /></span>
        <div className='alert-message-body Content'>
          Please Fill the Contact Form Before Submitting
        </div>
      </div>
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
      <div className="message">
        <textarea name="message" id="message" placeholder='Message'value={formstate.message || ""} 
                                onChange={changeHandler}></textarea>
        <span className='error-message'>Query should not be empty</span>
      </div>
      <div className="control button">
        <div id="send" onClick={submitHandler}>Submit</div>
      </div>
    </div>
  </form>
  <Footer />
</div>
</>
  )
}

export default Contact