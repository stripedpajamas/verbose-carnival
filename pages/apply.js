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

    return { card }
  }

  async handleSubmit (formData) {
    const id = this.props.card.id
    const creditScoreRaw = await fetch('/api/creditCheck', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: formData
    })
    const creditScoreRes = await creditScoreRaw.json()
    const creditScore = creditScoreRes.creditScore
    const applicationResultRaw = await fetch(`https://techcase-cards-api.herokuapp.com/api/v1/cards/${id}/apply`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: { creditScore }
    })
    const applicationResult = await applicationResultRaw.json()
    const success = applicationResult.success
    const name = `${formData.firstName} ${formData.lastName}`
    Router.push(`/done?success=${success}&creditScore=${creditScore}&id=${id}&name=${name}`,
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
