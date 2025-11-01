import { Instagram, Linkedin } from "lucide-react";
import './Header.css';
export function Footer() {
  return (
    <footer className="w-full py-12 px-4 sm:px-8 border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <img 
            src='/public/Images/Logo.png' 
            alt="Logo" 
            className="w-10 h-10 object-contain" 
          />
        
        <div className="flex gap-6">
          <a
             href="mailto:shayanabiar@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            shayanabiar@gmail.com
          </a>
          <a
            href="https://www.instagram.com/sha0583/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/shayan-abyar-87b46832a/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://www.behance.net/shayanabyar"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
            aria-label="Behance"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 8c0-.9.7-1.7 1.7-1.7h3.5c1.8 0 3.3 1.5 3.3 3.3 0 1-.4 1.8-1.1 2.4.9.5 1.5 1.5 1.5 2.6 0 1.8-1.5 3.3-3.3 3.3H4.7C3.7 17.9 3 17.1 3 16.2V8Z" />
              <path d="M14.5 8h5" />
              <path d="M17 5.5h.01" />
              <path d="M17 11.5c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5 1.1-2.5 2.5-2.5Z" />
              <path d="M19.5 14c0 1.4-1.1 2.5-2.5 2.5" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
