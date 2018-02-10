import Layout from '../components/Layout'

export default (props) => (
  <div className='success'>
    <h1>You're Approved!</h1>
    <h2>{props.name}, thank you for applying for the {props.card.name} card</h2>
    <p>You should receive a confirmation email with details on your new card and when it will arrive</p>
    <img src="static/logo.png" />
    <p className="description">Thank you for choosing Cards Online to fit your credit card search needs</p>
  </div>
)
