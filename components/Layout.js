import Header from './Header'
import Footer from './Footer'
import Head from 'next/head';

export default (props) => (
  <div>
    <Head>
      <link href="/static/css/app.css" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    </Head>
    <Header />
      {props.children}
    <Footer />  
  </div>
)
