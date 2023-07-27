import '../styles/pages/Home.css';
import Header from "../components/Header";
import Background from "../components/Background";
import Accomodations from "../components/Accomodations";
import background from '../assets/bgHome.webp';

export default function Home() {
  return (
    <div className='home'>
      <Header />
      <Background src={background} text="Chez vous, partout et ailleurs"/>
      <Accomodations />
    </div>
  )
}
