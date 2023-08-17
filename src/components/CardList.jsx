import '../styles/components/CardList.css'

import Card from './Card'

import logements from '../utils/logements.json'

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