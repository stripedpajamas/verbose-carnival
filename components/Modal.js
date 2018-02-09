import React, { Component } from 'react'

class Modal extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedOption: 'option1',
    }

    this.handleOptionChange = this.handleOptionChange.bind(this)
  }

  handleOptionChange (event) {
    this.setState({ selectedOption: event.target.value })
  }

  render () {
    return (
      <div className="modal">
        <i className="material-icons" onClick={this.props.handleModalButton}>clear</i>
        <div id="modal-content">
          <div className="rewards">
            <p>What type of reward(s) are you interested in?</p>
            <ul>
              <li >
                <input id="apr-checkbox" type="checkbox"></input>
                <label for="apr">0% APR</label>
              </li>
              <li>
                <input id="travel-checkbox" type="checkbox"></input>
                <label for="travel">Travel and Airlines</label>
              </li>
              <li>
                <input id="cash-checkbox" type="checkbox"></input>
                <label for="cashback">Cash Back</label>
              </li>
              <li>
                <input id="bonus-checkbox" type="checkbox"></input>
                <label for="bonusmiles">Gas</label>
              </li>
            </ul>
          </div>
          <div className="credit-question">
            <p>What do you think your credit score is?</p>
            <input type="radio" name="low" value="option1"
              checked={this.state.selectedOption === 'option1'} onChange={this.handleOptionChange} />
            <label for="low">Low</label>
            <input type="radio" name="medium" value="option2"
              checked={this.state.selectedOption === 'option2'} onChange={this.handleOptionChange} />
            <label for="medium">Medium</label>
            <input type="radio" name="high" value="option3"
              checked={this.state.selectedOption === 'option3'} onChange={this.handleOptionChange} />
            <label for="high">High</label>
          </div>
          <center>
            <button className="button apply-button">
              SUBMIT
          </button>
          </center>
        </div>
      </div>
    )
  }
}

export default Modal
