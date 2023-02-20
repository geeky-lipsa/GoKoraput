import React from 'react'

import PropTypes from 'prop-types'

import './outlineButton.css'

const OutlineButton = (props) => {
  return (
    <div className="outline-button-container">
      <button className="outline-button-button button Button">
        {props.button1}
      </button>
    </div>
  )
}

OutlineButton.defaultProps = {
  button1: 'Button',
}

OutlineButton.propTypes = {
  button1: PropTypes.string,
}

export default OutlineButton
