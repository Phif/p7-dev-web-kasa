import '../styles/components/Host.css'

export default function Host({ host }) {
  return (
    <div className="host">
      <p>{host.name}</p>
      <img src={host.picture} alt="Host avatar" />
    </div>
  )
}