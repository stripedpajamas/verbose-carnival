export default (props) => (
  <div className='container'>
    <h1 id='apply-card-header'>Complete your application for the {props.card.name} card!</h1>
    <img id='apply-card-image' src={props.card.image} />
  </div>
)
