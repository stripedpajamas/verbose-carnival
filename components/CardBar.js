import Link from 'next/link';

export default (props) => (
  <div class="card-bar">
    <div class="card-bar__image">
      <img src={props.card.image} />
    </div>
    <div lass="card-bar__features">{props.card.regular_apr.rate}</div>
    <div class="card-bar__buttons">3</div>
  </div>
);