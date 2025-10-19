import './Header.css';
export function Header() {
  return (
    <header className="w-full py-6 px-4 sm:px-8">
      <nav className="max-w-7xl mx-auto flex justify-center gap-8">
        <a
          href="#portfolio"
          className="nav-link"
        >
          Portfolio
        </a>
        <a
          href="#about"
          className="nav-link"
        >
          About
        </a>
      </nav>
    </header>
  );
}
