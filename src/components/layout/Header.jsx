import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  // When the menu closes, shift focus back to the toggle button
  useEffect(() => {
    if (!menuOpen && menuButtonRef.current) {
      menuButtonRef.current.focus();
    }
  }, [menuOpen]);

  return (
    <>
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <header className="absolute top-0 left-0 right-0 flex flex-wrap items-center justify-between px-4 md:px-6 py-4 bg-transparent z-50">
        <div className="flex items-center">
          {/* Logo */}
          <img
            src="/logo.svg"
            alt="Pixel & Pop Logo"
            className="h-14 w-auto md:h-16"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                'https://placehold.co/150x60/cccccc/ffffff?text=Logo+Not+Found';
            }}
          />
        </div>

        <div className="flex md:hidden">
          <button
            ref={menuButtonRef}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="focus:outline-none text-white p-2 rounded focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        <nav
          className={`
            fixed top-0 left-0 h-full w-64 bg-white shadow-xl p-6
            transform transition-transform duration-300 ease-in-out
            ${menuOpen ? 'translate-x-0' : '-translate-x-full'}
            md:relative md:top-auto md:left-auto md:h-auto md:w-auto
            md:bg-transparent md:shadow-none md:p-0
            md:transform-none
            md:flex md:items-center
            z-40
          `}
          aria-hidden={
            !menuOpen && typeof window !== 'undefined' && window.innerWidth < 768
          }
        >
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 md:hidden"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <ul className="flex flex-col space-y-4 text-center pt-10 md:pt-0 md:flex-row md:space-y-0 md:space-x-6 md:text-left md:items-center font-medium">
            <li>
              <Link
                to="/"
                className="text-pink-700 hover:text-pink-800 block py-2 md:py-1"
                onClick={() => setMenuOpen(false)}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="/About"
                className="text-black hover:text-pink-800 block py-2 md:py-1 md:text-white"
                onClick={() => setMenuOpen(false)}
              >
                ABOUT US
              </Link>
            </li>
            <li>
              <a
                href="#service"
                className="text-black hover:text-pink-800 block py-2 md:py-1 md:text-white"
                onClick={() => setMenuOpen(false)}
              >
                SERVICE
              </a>
            </li>
            <li>
              <a
                href="#project"
                className="text-black hover:text-pink-800 block py-2 md:py-1 md:text-white"
                onClick={() => setMenuOpen(false)}
              >
                PROJECT
              </a>
            </li>
            <li>
              <a
                href="#blog"
                className="text-black hover:text-pink-800 block py-2 md:py-1 md:text-white"
                onClick={() => setMenuOpen(false)}
              >
                BLOG
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-black hover:text-pink-800 block py-2 md:py-1 md:text-white"
                onClick={() => setMenuOpen(false)}
              >
                CONTACT
              </a>
            </li>
            <li>
              <a
                href="#quiz"
                className="text-black hover:text-pink-800 block py-2 md:py-1 md:text-white"
                onClick={() => setMenuOpen(false)}
              >
                QUIZ
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;