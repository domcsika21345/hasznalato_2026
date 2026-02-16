import { useState } from 'react';
import './css/Menu.css';
import Login from './Login';
import { Link } from 'react-router-dom';
import Uplode from './Uplode';

export default function Menu() {
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <>
      <nav className="menu">
        <div className="menu-left">
          <Link to="/" className="logo-link">
            <h1 className="site-name">GYÁD.Használtauto</h1>
          </Link>
        </div>
        <div className="menu-right">
          <button className="btn btn-login" onClick={() => setLoginOpen(true)}>
            Bejelentkezés
          </button>
          <Link className="btn btn-register" to="/register">Regisztráció</Link>
        </div>
        <div className="menu-links">
          {/* ...existing menu items... */}
        </div>
        <Uplode />
      </nav>
      <Login isOpen={loginOpen} onClose={() => setLoginOpen(false)} />
    </>
  );
}