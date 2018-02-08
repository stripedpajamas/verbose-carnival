import { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import ApplyCard from '../components/ApplyCard'
import ApplyForm from '../components/ApplyForm'
import Layout from '../components/Layout'

export default class Apply extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  static async getInitialProps(context) {
    const res = await fetch('https://techcase-cards-api.herokuapp.com/api/v1/cards')
    const data = await res.json()
    const card = data[context.query.id]
    return { card }
  }

  async handleSubmit(formData) {
    const creditScore = await fetch('/api/creditCheck')
  }

  render() {
    return (
      <Layout>
        <ApplyCard card={this.props.card} />
        <ApplyForm handleSubmit={this.handleSubmit} />
      </Layout>
    )
  }
}
