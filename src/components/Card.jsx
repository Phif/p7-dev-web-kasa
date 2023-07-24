import '../styles/components/Card.css'
import logements from '../utils/logements.json'

export default function Card() {
  const accomodation = logements[0].title;
  const src = logements[0].pictures[0];

  return (
    <div className='card'>
      <div className='background'></div>
      <span>{accomodation}</span>
      <img src={src} alt={accomodation}></img>
    </div>
  )
}