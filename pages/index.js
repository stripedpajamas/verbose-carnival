import Layout from '../components/Layout'
import fetch from 'isomorphic-unfetch'

const Index = (props) => (
  <Layout>
    {Object.keys(props.cards).map((card) => (
      <LandingCard cards={props.cards} />
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
