import React, { useState } from 'react'
import {RiCloseFill} from "react-icons/ri";
import './testimonialComponent.css'
import default_image from '../../images/default_avatar.jpg'
import axios from 'axios'

function TestimonialComponent ({closeContact}) {
    const [formstate, setFormstate] = useState({});
    const [files, setFiles] = useState('')
    const uploadedImage = React.useRef(null);
    const changeHandler = (event) =>{
        setFormstate({...formstate, [event.target.name]:event.target.value});
      };
      const Imagehandler = e => {
        setFiles(e.target.files[0]);
        const [file] = e.target.files;
        const {current} = uploadedImage;
        if (file) {
          const reader = new FileReader();
          
          current.file = file;
          reader.onload = (e) => {
              current.src = e.target.result;
          }
          reader.readAsDataURL(file);
        }
        
       
    };
      const submitHandler = async (event) => {
        event.preventDefault();
        const formdata = new FormData();
        formdata.append('file', files);
        try{
            const res = await axios.post('http://localhost:5000/upload', formdata,{     
            headers:{
                    'Content-Type': 'multipart/form-data'
                }
            });
            const { filePath} = res.data;
            const response= await axios.post('http://localhost:5000/update', {"img": filePath,"msg": formstate.message,"name": formstate.name},{     
                headers:{
                        'Content-Type': 'application/json'
                    }
                });
                console.log(response);
                if (response.status === 200){
                    console.log("inside");
                    setFiles('');
                    setFormstate({});
                    uploadedImage.current=null;
                }
        }catch(err){
            if(err.response.status === 500){
                console.log("server error");
            }else{
                console.log(err.response.data.msg);
            }
        }
        

        };
        
  return (
    <div className="testimonial-component-container">
        <span className="testimonial-component-popup-close" onClick={()=>closeContact(false)}><RiCloseFill /></span>
        <div className='testimonial-component-popup-description-body'>
          <div className='testimonial-component-popup-body'>
        <div className='testimonial-componennet-image-container'>
        <img
        ref={uploadedImage}
           alt="avatar"
           src={default_image}
          className="testimonial-card1-image"
           
        />
        </div>
        <div className='testimonial-componennet-input-container'>
            <form name="contactform" id="contactform" className="testimonial-form">
    <div className="cd-popup-container">

      <div className="name">
        <input type="text" id="name" name="name" placeholder='Name'  value={formstate.name || ""} onChange={changeHandler} />
      </div>
      
      <div className="imagefile">
        <input type="file" className='imagefile-input' onChange={Imagehandler} />
        <div className='image-button'>UploadFile</div>
      </div>
      
      
    </div>
  </form>
        </div>
        
      </div>
      <div className="message">
        <textarea name="message" id="message" placeholder='Message'value={formstate.message || ""} 
                                onChange={changeHandler}></textarea>
        <span className='error-message'>Query should not be empty</span>
      </div>
      <div className="testimonial-submit">
        <div id="send" onClick={submitHandler}>Submit</div>
      </div>
        </div>
    </div>
  )
}

  
export default TestimonialComponent