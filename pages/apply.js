import { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import ApplyForm from '../components/ApplyForm'
import Layout from '../components/Layout'

export default class Apply extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async handleSubmit(formData) {
    console.log(formData)
    const creditScore = await fetch('/api/creditCheck')
  }

  render() {
    return (
      <Layout>
        <ApplyForm handleSubmit={this.handleSubmit} />
      </Layout>
    )
  }
}
