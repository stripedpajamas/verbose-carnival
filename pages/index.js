import Layout from '../components/Layout'
<<<<<<< HEAD
=======
import CardBar from '../components/CardBar'
import Hero from '../components/Hero'
>>>>>>> feature/landing-card-bars
import fetch from 'isomorphic-unfetch'

const Index = (props) => (
  <Layout>
    <Hero />
    <div class="cards-section">
      <h2 class="header2">Explore Cards</h2>
      {Object.keys(props.cards).map((card) => (
        <CardBar card={props.cards[card]}/>
      ))}
    </div>
  </Layout>
)

Index.getInitialProps = async function() {
  const res = await fetch('https://techcase-cards-api.herokuapp.com/api/v1/cards')
  const data = await res.json()

  return {
    cards: data
  }
}

export default Index
