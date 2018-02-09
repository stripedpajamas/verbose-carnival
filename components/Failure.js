import Layout from '../components/Layout'
import CardBar from '../components/CardBar'

export default (props) => (
  <Layout>
    <div>Sorry! Your credit score prevents you from qualifying for the {props.card.name} card.</div>
    <p>Try these cards instead:</p>
    <div className='cards-section'>
      <h2 className='header2'>Explore Cards</h2>
      {props.cards.map((card) => (
        <CardBar key={card.id} card={card} />
      ))}
    </div>
  </Layout>
)
