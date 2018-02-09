import React from 'react'
import Link from 'next/link'

export default (props) => (
  <div className='card'>
    <div className='inline card-header'>
      <h1>{props.card.name}</h1>
    </div>
    <div className='inline'>
      <img id='card-img' src={props.card.image} />
    </div>
    <div class='info-container'>
      <div class='card-info'>
        <h2>Rates & Fees</h2>
        <p><span class='category'>Rate:</span> Starting at {props.card.intro_apr.rate}% APR
          <span className='description'> ({(parseFloat(props.card.regular_apr.rate) * 100).toFixed(2)}% after {props.card.intro_apr.months} months)</span>
        </p>
        <p><span class='category'>Fee:</span> ${props.card.rates_and_fees[0].fee}</p>
        <p><span class='category'>Fee Type:</span> {props.card.rates_and_fees[0].name}</p>
      </div>
      <div class='card-info'>
        <h2>Features</h2>
        <ul>
          {props.card.features.map((feature) => (
            <li>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
    <div class='card-apply'>
      <Link href={`/apply?id=${props.card.id}`}><a className='button'>Apply Now</a></Link>
    </div>
  </div>
)
