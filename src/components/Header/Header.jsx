import { useState } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { Sun, Moon, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "./Header.css";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const navLinks = (
    <>
      <button
        onClick={() => handleNavClick("about")}
        className="header-nav-link"
      >
        About
      </button>
      <button
        onClick={() => handleNavClick("projects")}
        className="header-nav-link"
      >
        Projects
      </button>
      <button
        onClick={() => handleNavClick("contacts")}
        className="header-nav-link"
      >
        Contacts
      </button>
    </>
  );

  return (
    <>
      <header className="header">
        <div className="header-container">
          <h1 className="header-title">ALEX.MANIS</h1>

          <nav className="header-nav">{navLinks}</nav>

          <div className="header-actions">
            <button
              onClick={toggleTheme}
              className="theme-toggle-button"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="mobile-menu-button"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="mobile-menu"
          >
            <nav className="mobile-menu-nav">{navLinks}</nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
