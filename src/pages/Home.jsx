import '../styles/pages/Home.css';

import Header from '../components/Header';
import Banner from '../components/Banner';
import CardList from '../components/CardList';
import Footer from '../components/Footer';

import background from '../assets/bgHome.webp';

export default function Home() {
  return (
    <div className='home'>
      <main>
        <Header />
        <Banner src={background} text={'Chez vous, \npartout et ailleurs'} />
        <CardList />
      </main>
      <Footer />
    </div>
  )
}
