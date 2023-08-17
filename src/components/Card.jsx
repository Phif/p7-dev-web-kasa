import '../styles/components/Card.css'
import { Link } from 'react-router-dom'

export default function Card(props) {
  const { id, title, src } = props;

  return (
    <Link to={`/accomodation/${id}`} className='card' key={id}>
      <img src={src} alt={title} />
      <div className='gradient-overlay'></div>
      <div className='card-title'>{title}</div>
    </Link>
  )
}