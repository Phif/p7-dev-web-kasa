import '../styles/pages/About.css';
import Header from "../components/Header";
import Background from "../components/Background";
import Collapse from "../components/Collapse";
import about from '../utils/about.json';
import background from '../assets/bgAbout.webp';

export default function About() {
  return (
    <div className='about'>
      <Header />
      <Background src={background} text="" />
      <div className="collapse-container">
        {about.map((collapse, index) => (
          <Collapse key={index} title={collapse.title} content={collapse.content} />
        ))}
      </div>
    </div>
  )
}