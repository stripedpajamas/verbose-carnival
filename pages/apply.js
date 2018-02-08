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
    const id = context.query.id
    const res = await fetch(`https://techcase-cards-api.herokuapp.com/api/v1/cards/${id}`)
    const data = await res.json()
    const card = data.card

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
    const res = await fetch('/api/creditCheck')
    const creditScoreRes = await res.json()
    const creditScore = creditScoreRes.creditScore
    const qualified = creditScore >= this.props.lowestRecommendedScore
    const name = `${formData.firstName} ${formData.lastName}`
    const id = this.props.card.id
    Router.push(`/done?qualified=${qualified}&creditScore=${creditScore}&id=${id}&name=${name}`,
      '/complete')
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
