import '../styles/components/Rating.css';
import starFull from '../assets/starFull.svg';
import starEmpty from '../assets/starEmpty.svg';

export default function Rating(props) {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < props.rating) {
      stars.push(<img src={starFull} alt='star' key={i} />);
    } else {
      stars.push(<img src={starEmpty} alt='star' key={i} />);
    }
  }

  return (
    <div className='rating'>
      {stars}
    </div>
  )
}