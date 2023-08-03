import '../styles/components/Card.css'
import { Link } from 'react-router-dom'

export default function Card(props) {
  const id = props.id;
  const title = props.title;
  const src = props.src;

  return (
    <div className='card' key={id}>
      <Link to={`/accomodation/${id}`}>
        <div></div>
        <span>{title}</span>
        <img src={src} alt={title}></img>
      </Link>
    </div>
  )
}