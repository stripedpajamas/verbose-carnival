import React, { Component } from 'react'

class Modal extends Component {
  constructor (props) {
    super(props)
    this.state = {
      estimatedCredit: 'good',
      features: {
        no_annual_fee: false,
        zero_intro_apr: false,
        travel: false,
        cashback: false
      }
    }

    this.handleSubmitButton = this.handleSubmitButton.bind(this)
    this.handleOptionChange = this.handleOptionChange.bind(this)
    this.handleCheck = this.handleCheck.bind(this)
  }

  handleOptionChange (e) {
    this.setState({ estimatedCredit: e.target.value })
  }

  handleCheck (id) {
    this.setState((prevState) => ({
      features: {
        ...prevState.features,
        [id]: !prevState.features[id]
      }
    }))
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
          <div className='modal-question'>
            <p>What type of reward(s) are you interested in?</p>
            <ul>
              <li >
                <input id='apr' type='checkbox' checked={this.state.features.zero_intro_apr} onChange={() => this.handleCheck('zero_intro_apr')} />
                <label htmlFor='apr'>0% Intro APR</label>
              </li>
              <li >
                <input id='annual' type='checkbox' checked={this.state.features.no_annual_fee} onChange={() => this.handleCheck('no_annual_fee')} />
                <label htmlFor='annual'>No Annual Fee</label>
              </li>
              <li>
                <input id='travel' type='checkbox' checked={this.state.features.travel} onChange={() => this.handleCheck('travel')} />
                <label htmlFor='travel'>Travel and Airlines</label>
              </li>
              <li>
                <input id='cashback' type='checkbox' checked={this.state.features.cashback} onChange={() => this.handleCheck('cashback')} />
                <label htmlFor='cashback'>Cash Back</label>
              </li>
            </ul>
          </div>
          <div className='modal-question'>
            <p>What do you think your credit score is?</p>
            <input type='radio' id='poor' name='poor' value='poor'
              checked={this.state.estimatedCredit === 'poor'} onChange={this.handleOptionChange} />
            <label htmlFor='low'>Low</label>
            <input type='radio' id='medium' name='medium' value='medium'
              checked={this.state.estimatedCredit === 'medium'} onChange={this.handleOptionChange} />
            <label htmlFor='medium'>Medium</label>
            <input type='radio' id='good' name='good' value='good'
              checked={this.state.estimatedCredit === 'good'} onChange={this.handleOptionChange} />
            <label htmlFor='good'>Good</label>
            <input type='radio' id='excellent' name='excellent' value='excellent'
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
