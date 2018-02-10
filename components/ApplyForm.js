import { Component } from 'react'

export default class ApplyForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      address: '',
      city: '',
      state: '',
      zipcode: '',
      ssn: '',
      formValid: false
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleApplyButton = this.handleApplyButton.bind(this)
    this.validateForm = this.validateForm.bind(this)
  }

  handleInputChange (e) {
    const id = e.target.id
    const value = e.target.value
    this.setState({ [id]: value })
    this.validateForm()
  }

  handleApplyButton (e) {
    e.preventDefault()
    const form = Object.assign({}, this.state)
    this.props.handleSubmit(form)
  }

  validateForm() {
    const valid =
      this.state.firstName !== '' &&
      this.state.lastName !== '' &&
      this.state.email !== '' &&
      this.state.address !== '' &&
      this.state.city !== '' &&
      this.state.state !== '' &&
      this.state.zipcode.length === 5 &&
      this.state.ssn.length === 8
    if (valid) {
      this.setState({ formValid: true })
    } else {
      this.setState({ formValid: false })
    }
  }

  render () {
    return (
      <form className='apply-form'>
        <div className='flex-container'>
          <div className='control-label'>First Name</div>
          <div>
            <input
              onChange={this.handleInputChange}
              value={this.state.firstName}
              className='input-item'
              type='text'
              id='firstName'
              name='firstName'
              required />
          </div>
        </div>
        <div className='flex-container'>
          <div className='control-label'>Last Name</div>
          <div>
            <input
              onChange={this.handleInputChange}
              value={this.state.lastName}
              className='input-item'
              type='text'
              id='lastName'
              name='lastName'
              required />
          </div>
        </div>
        <div className='flex-container'>
          <div className='control-label'>Email</div>
          <div>
            <input
              className='input-item'
              onChange={this.handleInputChange}
              value={this.state.email}
              type='text'
              id='email'
              name='email'
              required />
          </div>
        </div>
        <div className='flex-container'>
          <div className='control-label'>Address</div>
          <div>
            <input
              onChange={this.handleInputChange}
              value={this.state.address}
              className='input-item'
              type='text'
              id='address'
              name='address'
              required />
          </div>
        </div>

        <div className='flex-container'>
          <div className='control-label'>City</div>
          <div>
            <input
              onChange={this.handleInputChange}
              value={this.state.city}
              className='input-item'
              type='text'
              id='city'
              name='city'
              required />
          </div>
        </div>

        <div className='flex-container'>
          <div className='control-label'>State</div>
          <select
            onChange={this.handleInputChange}
            value={this.state.state}
            id='state'
            className='apply-states'
          >
            <option value='AL'>Alabama</option>
            <option value='AK'>Alaska</option>
            <option value='AZ'>Arizona</option>
            <option value='AR'>Arkansas</option>
            <option value='CA'>California</option>
            <option value='CO'>Colorado</option>
            <option value='CT'>Connecticut</option>
            <option value='DE'>Delaware</option>
            <option value='DC'>District Of Columbia</option>
            <option value='FL'>Florida</option>
            <option value='GA'>Georgia</option>
            <option value='HI'>Hawaii</option>
            <option value='ID'>Idaho</option>
            <option value='IL'>Illinois</option>
            <option value='IN'>Indiana</option>
            <option value='IA'>Iowa</option>
            <option value='KS'>Kansas</option>
            <option value='KY'>Kentucky</option>
            <option value='LA'>Louisiana</option>
            <option value='ME'>Maine</option>
            <option value='MD'>Maryland</option>
            <option value='MA'>Massachusetts</option>
            <option value='MI'>Michigan</option>
            <option value='MN'>Minnesota</option>
            <option value='MS'>Mississippi</option>
            <option value='MO'>Missouri</option>
            <option value='MT'>Montana</option>
            <option value='NE'>Nebraska</option>
            <option value='NV'>Nevada</option>
            <option value='NH'>New Hampshire</option>
            <option value='NJ'>New Jersey</option>
            <option value='NM'>New Mexico</option>
            <option value='NY'>New York</option>
            <option value='NC'>North Carolina</option>
            <option value='ND'>North Dakota</option>
            <option value='OH'>Ohio</option>
            <option value='OK'>Oklahoma</option>
            <option value='OR'>Oregon</option>
            <option value='PA'>Pennsylvania</option>
            <option value='RI'>Rhode Island</option>
            <option value='SC'>South Carolina</option>
            <option value='SD'>South Dakota</option>
            <option value='TN'>Tennessee</option>
            <option value='TX'>Texas</option>
            <option value='UT'>Utah</option>
            <option value='VT'>Vermont</option>
            <option value='VA'>Virginia</option>
            <option value='WA'>Washington</option>
            <option value='WV'>West Virginia</option>
            <option value='WI'>Wisconsin</option>
            <option value='WY'>Wyoming</option>
          </select>
        </div>
        <div className='flex-container'>
          <div className='control-label'>Zipcode</div>
          <div>
            <input
              onChange={this.handleInputChange}
              value={this.state.zipcode}
              className='input-item'
              type='text'
              pattern='[0-9]{5}'
              id='zipcode'
              name='zipcode'
              maxLength='5'
              title='Please enter 5-digits zipcode'
              required />
          </div>
        </div>
        <div className='flex-container'>
          <div className='control-label'>SSN</div>
          <div>
            <input
              onChange={this.handleInputChange}
              value={this.state.ssn}
              className='input-item'
              type='password'
              id='ssn'
              name='ssn'
              maxLength='9'
              title='Please enter 9-digits SSN'
              required />
          </div>
        </div>
        <center>
          {this.state.formValid ? (
            <button className='button apply-button' onClick={this.handleApplyButton}>SUBMIT</button>
          ) : (
            <button className='button apply-button disabled' disabled>SUBMIT</button>
          )}
        </center>
      </form >
    )
  }
}
