import Layout from '../components/Layout'
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
  const res = await fetch('https://techcase-cards-api.herokuapp.com/api/v1/cards')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${Object.keys(data).length}`)

  return {
    cards: data
  }
}

export default Index
