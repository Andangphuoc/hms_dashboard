import { FC, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        {/* Logo */}
        <NavLink className="navbar-brand" to="/" aria-label="home">
          <img
            src="https://cdn.prod.website-files.com/675931be48143bd8073dddc4/676aa997883349b07ec15e80_header-logo.svg"
            alt="Nutrizen Logo"
            loading="lazy"
          />
        </NavLink>

        {/* Hamburger Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                Service
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                Blog
              </NavLink>
            </li>
            {/* Dropdown for Pages */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="pagesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Pages
              </a>
              <ul className="dropdown-menu" aria-labelledby="pagesDropdown">
                <li>
                  <a className="dropdown-item" href="/contact">
                    Contact
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/privacy-policy">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/changelog">
                    Changelog
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/successful-stories">
                    Successful Stories
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/license">
                    License
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/404">
                    404
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="/blog/10-simple-steps-to-kickstart-a-healthier-eating-habit"
                  >
                    Blog Details
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/style-guide">
                    Style Guide
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/terms-and-conditions">
                    Terms & Condition
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/services/nutrition-counseling">
                    Services Details
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/case-study/john-d-age-32">
                    Story Details
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/faq">
                    FAQ
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          {/* Contact Us Button */}
          <a href="/contact" className="primary-fill-button ms-3">
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;