import '../styles/pages/Accomodation.css';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import Hero from '../components/Hero';
import logements from '../utils/logements.json'

export default function Accomodation() {
  return (
    <div className='accomodation'>
      <Header />
      <Carousel />
      {/* <Hero /> */}
    </div>
  )
}
