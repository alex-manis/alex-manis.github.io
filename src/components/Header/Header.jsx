import { useState, useRef } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { Sun, Moon, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollToSection } from "../../hooks";
import { NAV_LINKS, PERSONAL_INFO } from "../../constants";
import "./Header.css";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef(null);

  const { scrollToSection, scrollToTop } = useScrollToSection({
    withHeaderOffset: true,
    onScrollComplete: () => setIsMenuOpen(false),
  });

  const handleLogoClick = () => {
    scrollToTop();
  };

  const navLinks = (
    <>
      {NAV_LINKS.map((link) => (
        <button
          key={link.id}
          onClick={() => scrollToSection(link.id)}
          className="header__nav-link"
        >
          {link.label}
        </button>
      ))}
    </>
  );

  return (
    <>
      <header className="header" ref={headerRef}>
        <div className="header__container">
          <div className="header__left">
            <h1 className="header__title" onClick={handleLogoClick}>
              {PERSONAL_INFO.fullName.toUpperCase().replace(" ", ".")}
            </h1>
          </div>

          <nav className="header__nav">{navLinks}</nav>

          <div className="header__right">
            <div className="header__actions">
              <button
                onClick={toggleTheme}
                className="header__theme-toggle"
                aria-label="Toggle theme"
              >
                {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="header__mobile-menu-button"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
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
            className="header__mobile-menu"
          >
            <nav className="header__mobile-menu-nav">{navLinks}</nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
