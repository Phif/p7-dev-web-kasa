import '../styles/components/Accomodations.css'
import logements from '../utils/logements.json'
import Card from './Card'

export default function Accomodations() {
  return (
    <div className='accomodations'>
      {
        logements.map((logement) => (
          <Card id={/* logement.id */"logement"} src={logement.pictures[0]} title={logement.title} key={logement.id} />
        ))
      }
    </div>
  )
}