import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../../assets/images/image.png';
import { navigationLinks as links } from '../../lib/data/data';
import useWindowSize from '../../lib/hooks/useWindowSize';

const Navigation = () => {
  const location = useLocation();
  const [isActive, setIsActive] = useState(false);
  const {isMobile} = useWindowSize();

  return (
    <header>
      {isMobile && <div className="nav-header-mobile">
        <i
          onClick={() => setIsActive(!isActive)}
          className="fa fa-bars"
        ></i>
        {links.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            className={location.pathname === link.path ? 'link-active' : ''}
          >
            <i className={link.icon}></i>
          </NavLink>
        ))}
      </div>}
      <aside className={`sidebar ${isActive && 'active'}`}>
        <div className="upper">
          <div className="nav-header">
            {isMobile && <i
              onClick={() => setIsActive(!isActive)}
              className="fa fa-bars"></i>}
            <NavLink className="logo-wrapper" to="/">
              <img src={logo} alt="logo" className="nav-logo" />
            </NavLink>
          </div>
          <div className="search">
            <i className="fa fa-search"></i>
            <input type="search" name="query" id="search" placeholder="search" />
          </div>
          <nav>
            <ul>
              {links.map((link, index) => (
                <li key={index} className={location.pathname === link.path ? 'link-active' : ''}>
                  <Link
                    to={link.path}
                    onClick={() => isMobile && setIsActive(false)}
                  >
                    <i className={link.icon}></i>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="nav-footer">
          <div className="social">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
              <i className="fa fa-instagram"></i>
            </a>
          </div>
          <div className="contact">
            <a href="tel:+1234567890">
              <i className="fa fa-phone"></i>
            </a>
            <a href="mailto:anything@example.com">
              <i className="fa fa-envelope"></i>
            </a>
          </div>
        </div>
      </aside>
    </header>
  );
};

export default Navigation;
