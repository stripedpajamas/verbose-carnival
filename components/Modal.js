import React, { Component } from 'react'

class Modal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedOption: 'option1'
    }

    this.handleOptionChange = this.handleOptionChange.bind(this)
  }

  handleOptionChange(event) {
    this.setState({ selectedOption: event.target.value })
  }

  render() {
    return (
      <div className="modal">
      <i className="material-icons" onClick={this.props.handleModalButton}>clear</i>
      <div id="modal-content">
        <div className="question">
          <p>Are you looking for a new card?</p>
          <label for ="yes">Yes</label>
          <input type="radio" name="yes" value="option1"
            checked={this.state.selectedOption === 'option1'} onChange={this.handleOptionChange}/>
          <label for ="no">No</label>
          <input type="radio" name="no" value="option2"
            checked={this.state.selectedOption === 'option2'} onChange={this.handleOptionChange}/>
        </div>
      </div>
    </div>
    )
  }
}

export default Modal