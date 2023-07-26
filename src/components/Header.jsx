import '../styles/components/Header.css'
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <nav className='header'>
      <Link to='/'><img className='logo' src={logo} alt='Kasa'></img></Link>
      <div className='header-right'>
        <Link to='/'>Accueil</Link>
        <Link to='/about'>A propos</Link>
      </div>
    </nav>
  )
}