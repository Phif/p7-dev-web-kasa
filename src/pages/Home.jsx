import '../styles/pages/Home.css';
import Header from "../components/Header";
import Banner from "../components/Banner";
import CardList from "../components/CardList";
import background from '../assets/bgHome.webp';

export default function Home() {
  return (
    <div className='home'>
      <Header />
      <Banner src={background} text="Chez vous, partout et ailleurs"/>
      <CardList />
    </div>
  )
}
