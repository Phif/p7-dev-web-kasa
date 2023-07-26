import '../styles/components/Card.css'
import { Link } from 'react-router-dom'

export default function Card(props) {
  const link = props.link;
  const title = props.title;
  const src = props.src;
  const key = props.id;

  return (
    <div className='card' key={key}>
      <Link to={`/logement-${link}`}>
        <div></div>
        <span>{title}</span>
        <img src={src} alt={title}></img>
      </Link>
    </div>
  )
}