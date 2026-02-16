import './css/Header.css';
import Menu from './Menu';

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Menu />
      </div>
    </header>
  );
}

