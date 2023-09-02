import {Component} from 'react'
import Header from '../Header'
import TopSection from '../TopSection'
import CardsSection from '../CardsSection'
import StudentDiscount from '../StudentDiscount'
import BookNow from '../BookNow'
import Testimonials from '../Testimonials'
import Destinations from '../Destinations'
import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="home-main-bg-container">
        <Header />
        <TopSection />
        <CardsSection />
        <Destinations />
        <StudentDiscount />
        <BookNow />
        <Testimonials />
      </div>
    )
  }
}

export default Home
