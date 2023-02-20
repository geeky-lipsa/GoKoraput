import React from 'react'
import {RiCloseFill} from "react-icons/ri";
import './imageComponent.css'
function ImageComponent ({closeContact, imgSrc}) {
  return (
    <div className="image-component-container">
        <span className="image-component-popup-close popup-Close" onClick={()=>closeContact(false)}><RiCloseFill /></span>
        <div className='image-component-popup-body'>
            <img src={imgSrc} alt=''  loading='lazy' title=''  width="100%" height="100%" 
        className="image-component-image" />
        </div>
    </div>
  )
}

  
export default ImageComponent