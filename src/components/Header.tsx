import './Header.css';
import { Link } from "react-router-dom";
export function Header() {
  return (
    <header className="w-full py-6 px-4 sm:px-8">
      <nav className="max-w-7xl mx-auto flex justify-center gap-8">
        <Link to="/" className="nav-link">Portfolio</Link>
        <Link to="/about" className="nav-link">About</Link>
      </nav>
    </header>
  );
}
