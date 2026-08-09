import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'About', id: 'about' },
  { name: 'Experience', id: 'experience' },
  { name: 'Skills', id: 'skills' },
  { name: 'Projects', id: 'projects' },
  { name: 'Education', id: 'education' },
  { name: 'Contact', id: 'contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      // Use array reverse find for cross-browser compatibility instead of findLast
      const current = [...navItems]
        .reverse()
        .map(i => document.getElementById(i.id))
        .find(s => s && window.scrollY >= s.offsetTop - 140);

      setActiveSection(current ? current.id : '');
    };

    onScroll();

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile navigation drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 70;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__inner">
        {/* Logo */}
        <button
          className="header__logo"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setIsOpen(false);
          }}
          aria-label="Scroll to top"
        >
          <span className="header__logo-mark">ap/</span>
          <span className="header__logo-name">Amit Pardeshi</span>
        </button>

        {/* Desktop nav */}
        <nav className="header__nav" aria-label="Main navigation">
          {navItems.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`header__nav-btn ${activeSection === item.id ? 'header__nav-btn--active' : ''}`}
              onClick={(e) => scrollTo(e, item.id)}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="https://drive.google.com/file/d/17H_B2-q460szHao0_MNQ4LwUetopYuyd/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="header__cta"
          aria-label="Download resume"
        >
          Resume ↗
        </a>

        {/* Mobile hamburger */}
        <button
          className="header__mobile-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={`header__mobile-menu ${isOpen ? 'header__mobile-menu--open' : ''}`}
        role="navigation"
        aria-label="Mobile navigation"
        aria-hidden={!isOpen}
      >
        {navItems.map(item => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`header__mobile-nav-btn ${activeSection === item.id ? 'header__mobile-nav-btn--active' : ''}`}
            onClick={(e) => scrollTo(e, item.id)}
          >
            {item.name}
          </a>
        ))}
        <a
          href="https://drive.google.com/file/d/17H_B2-q460szHao0_MNQ4LwUetopYuyd/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsOpen(false)}
          style={{
            display: 'block',
            margin: '4px 0 2px',
            padding: '11px 16px',
            borderRadius: '7px',
            background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
            color: '#fff',
            textAlign: 'center',
            fontWeight: 600,
            fontSize: '0.88rem',
          }}
        >
          Download Resume ↗
        </a>
      </div>
    </header>
  );
};

export default Header;