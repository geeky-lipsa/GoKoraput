import React from 'react'

import PropTypes from 'prop-types'

import './packages.css'
import { Link } from 'react-router-dom'

const Packages = (props) => {
  return (
    <div className={`blog-post-card3-blog-post-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="blog-post-card3-image" loading='lazy'
        title={props.image_alt} width="100%" height="100%"
      />
      <div className="blog-post-card3-container">
      <h2 className="blog-post-card3-text1 Subheading">{props.packageName}</h2>
        <div className="blog-post-card3-container1">
          <span className="blog-post-card3-text2 Content">{props.description}</span>
        </div>
        <div className='blog-post-card3-text3'>
        <span className="blog-post-card3-text4 button"><Link to={`/Packages/${props.packageName}`} >View Details</Link></span>
        </div>
      </div>
    </div>
  )
}

Packages.propTypes = {
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  packageName: PropTypes.string,
  description: PropTypes.string,
}

export default Packages
