import React from 'react'

export default (props) => (
  <div class="card">
    <div class="inline">
      <img id="card-img" src={props.card.image} />
    </div>
    <div class="inline card-header">
      <h1>{props.card.merchant}</h1>
      <h2>{props.card.name}</h2>
    </div>
    <div></div>
  </div>
)
