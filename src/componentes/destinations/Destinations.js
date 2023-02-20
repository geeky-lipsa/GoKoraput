import React from 'react'

import PropTypes from 'prop-types'

import './destinations.css'
import OutlineButton from '../outlineButton/OutlineButton'
import { Link } from 'react-router-dom'


const Destinations = (props) => {
  return (
    <div className="place-card-container">
      <img
        alt={props.image_alt}
        src={props.image}
        className="place-card-image"
        loading='lazy' title={props.image_alt}  width="100%" height="100%"
      />
      <div className="place-card-container1">
        <span className="place-card-text Subheading">{props.dest}</span>
        <span className="place-card-text1 Content">{props.type}</span>
        <Link to={`/Destination/${props.dest}`} className='button'><OutlineButton button1="Discover place"></OutlineButton></Link>
      
      </div>
    </div>
  )
}

Destinations.propTypes = {
  image: PropTypes.string,
  image_alt: PropTypes.string,
  dest: PropTypes.string,
  description: PropTypes.string,
  type:PropTypes.string,
}

export default Destinations
