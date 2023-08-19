import '../styles/pages/NotFound.css';

import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className='page'>
      <div className='notfound-container'>
        <div className='notfound-text'>
          <h1>404</h1>
          <h2>Oups! La page que vous demandez n'existe pas.</h2>
        </div>
        <Link to='/'>Retourner sur la page d’accueil</Link>
      </div>
    </div>
  )
}
