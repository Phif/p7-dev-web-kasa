import '../styles/components/Tags.css'

export default function Tags(props) {
  return (
    <div className='tags-container'>
      {
        props.tags.map((tag, index) => (
          <div className='tag' key={index} >
            <span>{tag}</span>
          </div>
        ))
      }
    </div>
  )
}