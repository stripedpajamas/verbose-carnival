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
  const appliedCardId = JSON.parse(context.query.id)
  const qualified = JSON.parse(context.query.qualified)

  console.log(qualified)

  const res = await fetch('https://techcase-cards-api.herokuapp.com/api/v1/cards')
  const data = await res.json()

  return {
    appliedCard: data.find(card => card.id === appliedCardId),
    cards: data,
    qualified
  }
}

export default Done
