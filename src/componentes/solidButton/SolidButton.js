import React from 'react'

import PropTypes from 'prop-types'

import './solidButton.css'

const SolidButton = (props) => {
  return (
    <div className="solid-button-container">
      <button type="button" className="solid-button-button button Button" onClick={props.handler}>
        {props.button}
      </button>
    </div>
  )
}



SolidButton.propTypes = {
  button: PropTypes.string,
  handler:PropTypes.func,
}

export default SolidButton
