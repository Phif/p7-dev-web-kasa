import '../styles/components/CardList.css'
import logements from '../utils/logements.json'
import Card from './Card'

export default function CardList() {
  return (
    <div className='accomodations'>
      {
        logements.map((logement) => (
          <Card id={logement.id} src={logement.pictures[0]} title={logement.title} key={logement.id} />
        ))
      }
    </div>
  )
}