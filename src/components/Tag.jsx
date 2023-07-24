import '../styles/components/Tag.css'
import logements from '../utils/logements.json'

export default function Tag() {
  const tags = logements[0].tags;

  return (
    <div className='tags-container'>
      {
        tags.map((tag, index) => (
          <div className='tag' key={index}>
            <span>{tag}</span>
          </div>
        ))
      }
    </div>
)}