import { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'
import Modal from '../components/Modal'
import CardBar from '../components/CardBar'
import Hero from '../components/Hero'

class Index extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showModal: false
    }

    this.handleModalButton = this.handleModalButton.bind(this)
  }

  static async getInitialProps () {
    const res = await fetch('https://techcase-cards-api.herokuapp.com/api/v1/cards')
    const data = await res.json()

    return {
      cards: data
    }
  }

  handleModalButton () {
    this.setState((prevState) => ({ showModal: !prevState.showModal }))
  }

  render () {
    return (
      <Layout>
        <Hero handleModalButton={this.handleModalButton} />
        {this.state.showModal &&
          <Modal handleModalButton={this.handleModalButton} />
        }
        <div className='cards-section'>
          <h2 className='header2'>Explore Cards</h2>
          {this.props.cards.map((card) => (
            <CardBar key={card.id} card={card} />
          ))}
        </div>
      </Layout>
    )
  }
}

export default Index
