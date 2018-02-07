import { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'
import Modal from '../components/Modal'
import CardBar from '../components/CardBar'
import Hero from '../components/Hero'
import Apply from '../components/ApplyForm'

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false
    }

    this.handleFindButton = this.handleFindButton.bind(this)
  }
  
  static async getInitialProps() {
    const res = await fetch('https://techcase-cards-api.herokuapp.com/api/v1/cards')
    const data = await res.json()
  
    return {
      cards: data
    }
  }

  handleFindButton() {
    this.setState((prevState) => ({ showModal: !prevState.showModal }))
  }

  render() {
    return (
      <Layout>
        <Hero handleFindButton={this.handleFindButton} />
        {this.state.showModal && 
          <Modal />
        }
        <div className="cards-section">
          <h2 className="header2">Explore Cards</h2>
          {Object.keys(this.props.cards).map((card, idx) => (
            <CardBar key={idx} card={this.props.cards[card]} />
          ))}
        </div>
      </Layout>
    )
  }
}

export default Index
