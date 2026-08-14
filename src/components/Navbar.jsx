import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="text-2xl font-bold text-blue-600"
        >
          Richard Bashale
        </a>

        {/* Menu Desktop */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li>
            <a href="#home" className="hover:text-blue-600 transition">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-blue-600 transition">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-blue-600 transition">
              Skills
            </a>
          </li>

          <li>
            <a href="#journey" className="hover:text-blue-600 transition">
              Journey
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-blue-600 transition">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-blue-600 transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Bouton CV */}
        <a
          href="/Richard_Bashale_CV.pdf"
          download
          className="hidden md:block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Download CV
        </a>

        {/* Bouton menu mobile */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col text-center py-4 space-y-4 text-gray-700 font-medium">

            <li>
              <a href="#home" onClick={closeMenu}>
                Home
              </a>
            </li>

            <li>
              <a href="#about" onClick={closeMenu}>
                About
              </a>
            </li>

            <li>
              <a href="#skills" onClick={closeMenu}>
                Skills
              </a>
            </li>

            <li>
              <a href="#journey" onClick={closeMenu}>
                Journey
              </a>
            </li>

            <li>
              <a href="#projects" onClick={closeMenu}>
                Projects
              </a>
            </li>

            <li>
              <a href="#contact" onClick={closeMenu}>
                Contact
              </a>
            </li>

            <li className="pt-2">
              <a
                href="/Richard_Bashale_CV.pdf"
                download
                onClick={closeMenu}
                className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg"
              >
                Download CV
              </a>
            </li>

          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;