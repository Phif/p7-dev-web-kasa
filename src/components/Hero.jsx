import '../styles/components/Hero.css';
import Tags from './Tags';
import Host from './Host';
import Rating from './Rating';
import Collapse from './Collapse';

export default function Hero(props) {
  return (
    <div className='hero'>
      <div className='hero-data-container'>
        <div className='hero-data-left'>
          <h1 className='hero-title'>{props.title}</h1>
          <p className='hero-location'>{props.location}</p>
          <Tags tags={props.tags} />
        </div>
        <div className='hero-data-right'>
          <Host host={props.host} />
          <Rating rating={props.rating} />
        </div>
      </div>
        <div className='hero-dropdowns'>
          <Collapse title='Description' content={props.description} />
          <Collapse title='Équipements' content={props.equipments} />
        </div>
    </div>
  )
}