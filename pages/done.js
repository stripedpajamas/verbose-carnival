import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'
import Success from '../components/Success'
import Failure from '../components/Failure'

const Done = (props) => (
  <Layout>
    {props.qualified && <Success card={props.appliedCard} name={props.name} />}
    {!props.qualified && <Failure card={props.appliedCard} cards={props.possibleCards} name={props.name}/>}
  </Layout>
)

Done.getInitialProps = async (context) => {
  const name = context.query.name
  const appliedCardId = context.query.id
  const creditScore = parseInt(context.query.creditScore, 10)
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
    qualified,
    name
  }
}

export default Done
