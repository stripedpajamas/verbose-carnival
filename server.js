const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()

    server.post('/api/creditCheck', (req, res) => {
      const creditScore = Math.floor(Math.random() * (850 - 390 + 1)) + 390
      res.send({ creditScore })
    })

    server.get('/complete', (req, res) => {
      res.redirect('/')
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(3000, (err) => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })
