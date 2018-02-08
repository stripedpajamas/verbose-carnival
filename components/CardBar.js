import Link from 'next/link';

export default (props) => (
  <div className="card-bar">
    <div className="card-bar__image">
      <img src={props.card.image} />
    </div>
    <div className="card-bar__features">
      <div>
        <h3>{props.card.name}</h3>
        <h4>{props.card.merchant}</h4>
        <p className="description">{props.card.features[0]}</p>
        <Link href={`/card?id=${props.card.id}`}><a>Learn More</a></Link>
      </div>
    </div>
    <div className="card-bar__rate">
      <p>
        {(parseFloat(props.card.regular_apr.rate) * 100).toFixed(2)}% APR
        <br/>
        <span className="legal">{props.card.intro_apr.rate}% for first {props.card.intro_apr.months} months</span>
      </p>
    </div>
    <div className="card-bar__buttons">
      <Link href={`/apply?id=${props.card.id}`}><a className="button">Apply</a></Link>
    </div>
  </div>
);