import React, { useState } from 'react';
import { Link } from 'gatsby';
import { FiAlignJustify } from 'react-icons/fi';
import logo from '../../assets/images/logo.svg';

function Navbar() {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="simply recipes" />
          </Link>
          <button
            className="nav-btn"
            onClick={() => setIsShowing(prevState => !prevState)}
          >
            <FiAlignJustify />
          </button>
        </div>
        <div className={isShowing ? 'nav-links show-links' : 'nav-links'}>
          <Link
            to="/"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setIsShowing(false)}
          >
            home
          </Link>
          <Link
            to="/recipes"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setIsShowing(false)}
          >
            recipes
          </Link>
          <Link
            to="/tags"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setIsShowing(false)}
          >
            tags
          </Link>
          <Link
            to="/about"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setIsShowing(false)}
          >
            about
          </Link>
          <div className="nav-link contact-link">
            <Link
              to="/contact"
              className="btn"
              onClick={() => setIsShowing(false)}
            >
              contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
