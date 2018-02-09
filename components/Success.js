import Layout from '../components/Layout'

export default (props) => (
  <div>
    <h1>Success!</h1>
    <h2>{props.name}, thank you for applying for the {props.card.name} card</h2>
    <p>You should receive a confirmation email with details on your new card and when it will arrive</p>
  </div>
)
