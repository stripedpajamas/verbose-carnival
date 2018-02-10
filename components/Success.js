import Layout from '../components/Layout'

export default (props) => (
  <div class='success'>
    <h1>Success!</h1>
    <h2>{props.name}, thank you for applying for the {props.card.name} card</h2>
    <p>You should receive a confirmation email with details on your new card and when it will arrive</p>
    <img src="static/logo.png" />
    <p class="description">Thank you for choosing Cards Online to fit your credit card search needs</p>
  </div>
)
