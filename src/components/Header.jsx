import React from 'react'
import '../styles/components/Header.css'
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

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