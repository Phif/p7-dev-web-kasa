import '../styles/components/Header.css'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

import logo from '../assets/logo.svg'

export default function Header() {
  return (
    <header>
      <Link to='/'><img className='logo' src={logo} alt='Kasa'></img></Link>
      <nav>
        <NavLink to='/'>
          Accueil
        </NavLink>
        <NavLink to='/about'>
          A propos
        </NavLink>
      </nav>
    </header>
  )
}