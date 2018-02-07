import Header from './Header'
import Footer from './Footer'
import Head from 'next/head';

export default (props) => (
  <div>
    <Head>
      <link href="/static/css/app.css" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
    </Head>
    <Header />
      {props.children}
    <Footer />  
  </div>
)
