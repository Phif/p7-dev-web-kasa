import '../styles/components/HomeBackground.css';
import backgroundImage from '../assets/bgHome.png';

export default function Background() {
  return (
    <div className="home-background">
      <span>Chez vous, partout et ailleurs</span>
      <img src={backgroundImage} alt='Chez vous, partout et ailleurs'></img>
    </div>
  );
}