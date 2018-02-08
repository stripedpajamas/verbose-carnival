import fetch from 'isomorphic-unfetch'
import Success from '../components/Success'
import Failure from '../components/Failure'

const Done = (props) => (
  <div>
    {props.qualified && <Success card={props.appliedCard} />}
    {!props.qualified && <Failure card={props.appliedCard} cards={props.possibleCards} />}
  </div>
)

Done.getInitialProps = async (context) => {
  const creditScore = parseInt(context.query.creditScore, 10)
  const appliedCardId = parseInt(context.query.id, 10)
  const qualified = JSON.parse(context.query.qualified)

  const res = await fetch('https://techcase-cards-api.herokuapp.com/api/v1/cards')
  const data = await res.json()

  let possibleCards

  if (!qualified) {
    possibleCards = data.filter((card) => {
      let lowestRecommendedScore = 850
      card.recommended_credit_scores.forEach((group) => {
        if (group.min < lowestRecommendedScore) lowestRecommendedScore = group.min
      })
      return creditScore >= lowestRecommendedScore
    })
  }

  return {
    appliedCard: data.find(card => card.id === appliedCardId),
    possibleCards,
    creditScore,
    qualified
  }
}

export default Done
