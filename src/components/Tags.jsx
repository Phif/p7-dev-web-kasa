import '../styles/components/Tags.css'

export default function Tags({ tags }) {
  return (
    <div className='tags-container'>
      {
        tags.map((tag, index) => (
          <div className='tag' key={index} >
            <span>{tag}</span>
          </div>
        ))
      }
    </div>
  )
}