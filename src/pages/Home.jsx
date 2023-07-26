import '../styles/pages/Home.css';
import Header from "../components/Header";
import HomeBackground from "../components/HomeBackground";
import Accomodations from "../components/Accomodations";

export default function Home() {
  return (
    <div className='home'>
      <Header />
      <HomeBackground />
      <Accomodations />
    </div>
  )
}
