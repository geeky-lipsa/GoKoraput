import React from 'react'
import {BsCheck2All}  from "react-icons/bs";
import PropTypes from 'prop-types'

import './services.css'

const Services = (props) => {
  function getDesciption(){
    const descriptionarray=[]
    props.description.forEach((elem, index) => {
      descriptionarray.push(
      <span key={index} className="feature-card3-text1 Content"><BsCheck2All />{elem}</span>
      )
    });
    return descriptionarray
  }
  return (
    <div className={`feature-card3-feature-card ${props.rootClassName} `}>
      <img src={props.img_src} alt={props.img_alt} className="feature-card3-icon" loading='lazy' title={props.img_alt}  width="100%" height="100%"
        />
      
      <h2 className="feature-card3-text Subheading">{props.title}</h2>
      {getDesciption()}
      
    </div>
  )
}


Services.propTypes = {
  rootClassName: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.array,
  img_src:PropTypes.string,
  img_alt:PropTypes.string,
}

export default Services
