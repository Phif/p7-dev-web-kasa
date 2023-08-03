import '../styles/components/Hero.css';
import Tags from './Tags';

export default function Hero({ title, location }) {
  return (
    <div className='hero'>
      <div className='hero-data'>
        <div className='hero-main-data'>
          <h1 className='hero-title'>{title}</h1>
          <p className='hero-location'>{location}</p>
          <Tags />
        </div>
        <div className='hero-secondary-data'>
          {/* <Host /> */}
          {/* <Rate /> */}
        </div>
      </div>
    </div>
  )
}