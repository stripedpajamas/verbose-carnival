import React from 'react'

export default (props) => (
  <div class="card">
      <h1>{props.card.merchant}</h1>
      <h2>{props.card.name}</h2>
  </div>
)
