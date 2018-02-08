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
  const id = JSON.parse(context.query.id)
  const res = await fetch(`https://techcase-cards-api.herokuapp.com/api/v1/cards/${id}`)
  const data = await res.json()
  return { card: data.card }
}

export default Cards
