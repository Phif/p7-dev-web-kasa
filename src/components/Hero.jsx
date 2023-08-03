import '../styles/components/Hero.css';
import Tags from './Tags';
import Host from './Host';

export default function Hero({ title, location, tags, host }) {
  return (
    <div className='hero'>
      <div className='hero-data'>
        <div className='hero-main-data'>
          <h1 className='hero-title'>{title}</h1>
          <p className='hero-location'>{location}</p>
          <Tags tags={tags} />
        </div>
        <div className='hero-secondary-data'>
          <Host host={host} />
          {/* <Rate /> */}
        </div>
      </div>
    </div>
  )
}