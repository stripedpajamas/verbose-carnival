import { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import Router from 'next/router'
import ApplyCard from '../components/ApplyCard'
import ApplyForm from '../components/ApplyForm'
import Layout from '../components/Layout'

export default class Apply extends Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  static async getInitialProps (context) {
    const res = await fetch('https://techcase-cards-api.herokuapp.com/api/v1/cards')
    const data = await res.json()
    const card = data.find(card => card.id === context.query.id)

    let lowestRecommendedScore = 850
    card.recommended_credit_scores.forEach((group) => {
      if (group.min < lowestRecommendedScore) lowestRecommendedScore = group.min
    })

    return {
      card,
      lowestRecommendedScore
    }
  }

  async handleSubmit (formData) {
    const creditScore = await fetch('/api/creditCheck')
    const qualified = creditScore >= this.props.lowestRecommendedScore
    Router.push(`/done?qualified=${qualified}&id=${this.props.card.id}`)
  }

  render () {
    return (
      <Layout>
        <ApplyCard card={this.props.card} />
        <ApplyForm handleSubmit={this.handleSubmit} />
      </Layout>
    )
  }
}
