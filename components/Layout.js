import Header from './Header'
import Footer from './Footer'
<<<<<<< HEAD
import ApplyForm from './ApplyForm'

export default (props) => (
  <div>
    <Header />
      {props.children}
    <Footer />
=======
import Head from 'next/head';

export default (props) => (
  <div>
    <Head>
      <link href="/static/css/app.css" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" />
    </Head>
    <Header />
      {props.children}
    <Footer />  
>>>>>>> d755afdb5a040907411690306b3d93f50536039a
  </div>
)
