import '../styles/pages/Home.css';

import Banner from '../components/Banner';
import CardList from '../components/CardList';

import background from '../assets/bgHome.webp';

export default function Home() {
  return (
    <div className='page'>
      <Banner src={background} text={'Chez vous, \npartout et ailleurs'} />
      <CardList />
    </div>
  )
}
