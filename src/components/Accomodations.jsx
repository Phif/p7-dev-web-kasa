import '../styles/components/Accomodations.css'
import logements from '../utils/logements.json'
import Card from './Card'

export default function Accomodations() {
  return (
    <div className='accomodations'>
      {/* <Card link={logements[0].id} src={logements[0].pictures[0]} title={logements[0].title}/>
      <Card link={logements[0].id} src={logements[0].pictures[0]} title={logements[0].title}/>
      <Card link={logements[0].id} src={logements[0].pictures[0]} title={logements[0].title}/> */}
      {
        logements.map((logements, index) => (
          <Card link={logements.id} src={logements.pictures[0]} title={logements.title} key={logements.id}/>
        ))
      }
    </div>
  )
}