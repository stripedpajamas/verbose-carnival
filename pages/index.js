import { Component } from 'react'
import { findDOMNode } from 'react-dom'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'
import Modal from '../components/Modal'
import CardBar from '../components/CardBar'
import Hero from '../components/Hero'

const creditLevels = ['excellent', 'good', 'medium', 'poor']
class Index extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showModal: false,
      filteredCards: props.cards
    }

    this.handleModalButton = this.handleModalButton.bind(this)
    this.handleModalSubmission = this.handleModalSubmission.bind(this)
    this.handleScrollToCards = this.handleScrollToCards.bind(this)
    this.handleShowAll = this.handleShowAll.bind(this)
  }

  static async getInitialProps () {
    const res = await fetch('https://techcase-cards-api.herokuapp.com/api/v1/cards')
    const data = await res.json()

    return {
      cards: data
    }
  }

  handleShowAll () {
    this.setState({ filteredCards: this.props.cards })
  }

  handleScrollToCards () {
    const cardsNode = findDOMNode(this.cardsRef)
    window.scrollTo(0, cardsNode.offsetTop)
  }

  handleModalButton () {
    this.setState((prevState) => ({ showModal: !prevState.showModal }))
  }

  handleModalSubmission (results) {
    // first get an array of estimated credit health and lower
    // so we can all cards available to that health level
    const resultCreditLevels = creditLevels.slice(creditLevels.findIndex(level => level === results.estimatedCredit))

    // get an array of wanted features
    const wantedFeatures = Object.keys(results.features).filter(feature => results.features[feature])

    // filter the cards by credit health
    const filteredCards = this.props.cards.filter((card) => {
      return card.recommended_credit_scores.some((recommendation) => {
        return resultCreditLevels.includes(recommendation.name)
      })
    }).map((card) => {
      // score the filtered cards by their features
      let score = 0
      card.tags.forEach((tag) => {
        score += wantedFeatures.includes(tag.toLowerCase())
      })
      return {
        ...card,
        score
      }
    }).sort((a, b) => a.score - b.score)

    this.setState({ filteredCards })
    this.handleModalButton()
    this.handleScrollToCards()
  }

  render () {
    return (
      <Layout>
        <Hero handleModalButton={this.handleModalButton} />
        {this.state.showModal &&
          <Modal
            handleModalButton={this.handleModalButton}
            handleModalSubmission={this.handleModalSubmission}
          />
        }
        <div className='cards-section'>
          <h2 className='header2' ref={(r) => { this.cardsRef = r }}>
            Explore Cards
          </h2>
          {this.state.filteredCards.map((card) => (
            <CardBar key={card.id} card={card} />
          ))}
        </div>
        {this.state.filteredCards.length < this.props.cards.length &&
          <button id='show-all-cards' className='button' onClick={this.handleShowAll}>
            Show All Cards
          </button>
        }
      </Layout>
    )
  }
}

export default Index
