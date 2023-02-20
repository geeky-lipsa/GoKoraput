import React, { useState } from 'react'
import PropTypes from 'prop-types'

import './extraServices.css'
import ExtraServicesContact from '../extraServicesContact/ExtraServicesContact';
import { RiCloseFill } from 'react-icons/ri';

const ExtraServices = (props) => {
    const [popup,showPopup] = useState(false);
    const [modal,showModal] = useState(false);
  return (
    <>
     {popup && <ExtraServicesContact closeContact={showPopup} /> }
     {modal && (
      <div className="extra-contact-container">
        <span className="extra-contact-popup-close popup-Close" onClick={()=>showModal(false)}><RiCloseFill /></span>
        <div className='extra-contact-popup-body'>
          This service will be Available shortly.
        </div>
    </div>
     ) }
    <div className={`extra-feature-card3-feature-card ${props.rootClassName} `}>
    
      <img src={props.img_src} alt={props.img_alt} className="feature-card3-icon" loading='lazy' title={props.img_alt}  width="100%" height="100%"
        />
      {props.title === 'Cab Services' &&
      <h2 className="extra-feature-card3-text Subheading" onClick={()=>{showPopup(true)}}>{props.title}</h2>
      }
      {props.title !== 'Cab Services' &&
      <h2 className="extra-feature-card3-text Subheading" onClick={()=>{showModal(true)}}>{props.title}</h2>
      }
    </div></>
  )
}


ExtraServices.propTypes = {
  rootClassName: PropTypes.string,
  title: PropTypes.string,
  img_src:PropTypes.string,
  img_alt:PropTypes.string,
}

export default ExtraServices
