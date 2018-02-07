import Link from 'next/link';

export default (props) => (
  <div className="card-bar">
    <div className="card-bar__image">
      <img src={props.card.image} />
    </div>
    <div className="card-bar__features">
      <div>
        <h3>{props.card.merchant}</h3>
        <h4>{props.card.name}</h4>
        <p>{props.card.features[0]}</p>
        <Link href={`/card?id=${props.card.id}`}><a>Learn More</a></Link>
      </div>
    </div>
    <div className="card-bar__buttons">
      <Link href="/apply"><a class="button">Apply</a></Link>
    </div>
  </div>
);