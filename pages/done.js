import fetch from 'isomorphic-unfetch'
import Success from '../components/Success'
import Failure from '../components/Failure'

const Done = (props) => (
  <div>
    {props.qualified && <Success card={props.appliedCard} cards={props.cards} />}
    {!props.qualified && <Failure card={props.appliedCard} cards={props.cards} />}
  </div>
)

Done.getInitialProps = async (context) => {
  const appliedCardId = context.url.query.id
  const qualified = context.url.query.qualified

  const res = await fetch('https://techcase-cards-api.herokuapp.com/api/v1/cards')
  const data = await res.json()

  return {
    appliedCard: data[appliedCardId],
    cards: data,
    qualified
  }
}

export default Done
