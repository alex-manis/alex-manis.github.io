import { useTheme } from '../../contexts/ThemeContext'
import { Sun, Moon } from 'lucide-react'
import './Header.css'

export default function Header() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title">ALEX.MANIS</h1>

        <nav className="header-nav">
          <a href="#about" className="header-nav-link">About</a>
          <a href="#projects" className="header-nav-link">Projects</a>
          <a href="#contacts" className="header-nav-link">Contacts</a>
        </nav>

        <button 
          onClick={toggleTheme} 
          className="theme-toggle-button"
          aria-label="Toggle theme"
        >
          {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
        </button>
      </div>
    </header>
  )
}

