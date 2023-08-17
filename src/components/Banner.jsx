import '../styles/components/Banner.css';

export default function Banner(props) {
  const { src, text } = props;

  return (
    <div className='banner' style={{ backgroundImage: `url(${src})` }}>
      <div className='banner-overlay'></div>
      <div className='banner-text'>{text}</div>
    </div>
  );
}
