import '../styles/components/Footer.css'
import logoWhite from '../assets/logoWhite.svg';

export default function Footer() {
  return (
    <div className="footer">
      <img src={logoWhite} alt="logo" />
      <span className="footer-text">
        © 2020 Kasa. All rights reserved
      </span>
    </div>
  )
}