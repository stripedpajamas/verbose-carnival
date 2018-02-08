import React from 'react'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'
import Card from '../components/Card'

const Cards = (props) => (
  <Layout>
    <Card card={props.card} />
  </Layout>
)

Cards.getInitialProps = async (context) => {
  const res = await fetch('https://techcase-cards-api.herokuapp.com/api/v1/cards')
  const data = await res.json()
  const card = data.find(card => card.id === context.query.id)
  return { card }
}

export default Cards
