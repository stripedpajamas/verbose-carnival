import CardBar from '../components/CardBar'

export default (props) => (
  <div className='fail'>
    <h1>Thank you for applying. Unfortunately your credit score prevents you from qualifying for the {props.card.name} card.</h1>
    <div className='cards-section'>
      <h2 className='header2'>Try {props.cards.length > 1 ? 'these cards' : 'this card'} instead ...</h2>
      {props.cards.map((card) => (
        <CardBar key={card.id} card={card} />
      ))}
    </div>
  </div>
)
