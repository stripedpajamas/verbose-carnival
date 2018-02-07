import React from 'react'

export default (props) => (
  <div className="modal">
    <i className="material-icons" onClick={props.handleModalButton}>clear</i>
    <div id="modal-content"></div>
  </div>
);