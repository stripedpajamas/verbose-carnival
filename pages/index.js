import Layout from '../components/Layout'
<<<<<<< HEAD
import fetch from 'isomorphic-unfetch'
import ApplyForm from '../components/ApplyForm'

const Index = (props) => (
  <Layout>
    <p>
      some stuff goes here
   </p>
  </Layout>
)

Index.getInitialProps = async function () {
=======
import CardBar from '../components/CardBar'
import fetch from 'isomorphic-unfetch'

const Index = (props) => (
  <Layout>
    {Object.keys(props.cards).map((card) => (
      <CardBar card={props.cards[card]}/>
    ))}
  </Layout>
)

Index.getInitialProps = async function() {
>>>>>>> d755afdb5a040907411690306b3d93f50536039a
  const res = await fetch('https://techcase-cards-api.herokuapp.com/api/v1/cards')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${Object.keys(data).length}`)

  return {
    cards: data
  }
}

export default Index
