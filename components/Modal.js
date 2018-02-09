import React, { Component } from 'react'

class Modal extends Component {
  constructor (props) {
    super(props)
    this.state = {
      estimatedCredit: 'good',
      apr: false,
      travel: false,
      cashback: false
    }

    this.handleSubmitButton = this.handleSubmitButton.bind(this)
    this.handleOptionChange = this.handleOptionChange.bind(this)
  }

  handleOptionChange (e) {
    this.setState({ estimatedCredit: e.target.value })
  }

  handleSubmitButton () {
    const results = Object.assign({}, this.state)
    this.props.handleModalSubmission(results)
  }

  render () {
    return (
      <div className='modal'>
        <i className='material-icons' onClick={this.props.handleModalButton}>clear</i>
        <div id='modal-content'>
          <div className='rewards'>
            <p>What type of reward(s) are you interested in?</p>
            <ul>
              <li >
                <input id='apr' type='checkbox' value={this.state.apr} />
                <label htmlFor='apr'>0% Intro APR</label>
              </li>
              <li>
                <input id='travel' type='checkbox' value={this.state.travel} />
                <label htmlFor='travel'>Travel and Airlines</label>
              </li>
              <li>
                <input id='cashback' type='checkbox' value={this.state.cashback} />
                <label htmlFor='cashback'>Cash Back</label>
              </li>
            </ul>
          </div>
          <div className='credit-question'>
            <p>What do you think your credit score is?</p>
            <input type='radio' name='low' value='low'
              checked={this.state.estimatedCredit === 'low'} onChange={this.handleOptionChange} />
            <label htmlFor='low'>Low</label>
            <input type='radio' name='medium' value='medium'
              checked={this.state.estimatedCredit === 'medium'} onChange={this.handleOptionChange} />
            <label htmlFor='medium'>Medium</label>
            <input type='radio' name='high' value='high'
              checked={this.state.estimatedCredit === 'high'} onChange={this.handleOptionChange} />
            <label htmlFor='high'>Good</label>
            <input type='radio' name='excellent' value='excellent'
              checked={this.state.estimatedCredit === 'excellent'} onChange={this.handleOptionChange} />
            <label htmlFor='excellent'>Excellent</label>
          </div>
          <center>
            <button className='button apply-button' onClick={this.handleSubmitButton}>
              SUBMIT
          </button>
          </center>
        </div>
      </div>
    )
  }
}

export default Modal
