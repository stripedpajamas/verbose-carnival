import Header from './Header'
import Footer from './Footer'
import ApplyForm from './ApplyForm'

export default (props) => (
  <div>
    <Header />
      {props.children}
    <Footer />
  </div>
)
