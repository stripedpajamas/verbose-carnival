import Header from './Header'
import Footer from './Footer'
import Head from 'next/head'

export default (props) => (
  <div>
    <Head>
      <title>CardsOnline</title>
      <link rel='icon' type='image/png' href='/static/icon.png' />
      <link href='/static/css/app.css' rel='stylesheet' />
      <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' />
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet' />
    </Head>
    <Header />
    <section className='main'>{props.children}</section>
    <Footer />
  </div>
)
