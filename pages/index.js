import Layout from '../components/Layout'
import CardBar from '../components/CardBar'
import fetch from 'isomorphic-unfetch'
import Apply from '../components/ApplyForm'

const Index = (props) => (
  <Layout>
    {Object.keys(props.cards).map((card) => (
      <CardBar card={props.cards[card]}/>
    ))}
  </Layout>
)

Index.getInitialProps = async function() {
  const res = await fetch('https://techcase-cards-api.herokuapp.com/api/v1/cards')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${Object.keys(data).length}`)

  return {
    cards: data
  }
}

export default Index
