import clsx from 'clsx';
import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Navigation } from '../../../config/routing/NavigationPaths';
import { Button } from '../../Button/Button';

import logo from '../../../assets/images/logo.png';

import classes from './Navbar.module.css';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => setIsOpen((prevState) => !prevState);

  return (
    <nav className={classes.navbar}>
      <div className={clsx('bootstrap-wrapper', classes.navbarContentWrapper)}>
        <div className={clsx('container', classes.navbarContent)}>
          <h1 className={classes.heading}>
            <NavLink to={Navigation.HOME} className={classes.logoLink}>
              <img
                src={logo}
                alt="MY.HOUSE - Innovative Real Estate Business"
                className={classes.logo}
              />
            </NavLink>
          </h1>

          <div
            id="navigation"
            className={clsx(classes.navbarCollapse, isOpen && classes.navbarCollapseOpen)}
          >
            <ul className={classes.nav}>
              <li className={classes.navItem}>
                <NavLink to={Navigation.HOME} className={classes.navLink}>
                  Home
                </NavLink>
              </li>
              <li className={classes.navItem}>
                <NavLink to={Navigation.LOGIN} className={classes.navLink}>
                  About Us
                </NavLink>
              </li>
              <li className={classes.navItem}>
                <NavLink to={Navigation.REGISTER} className={classes.navLink}>
                  Contact
                </NavLink>
              </li>
            </ul>
            <ul className={clsx(classes.nav, classes.navRight)}>
              <li className={classes.navItem}>
                <NavLink to={Navigation.LOGIN} className={classes.navLink}>
                  Login
                </NavLink>
              </li>
              <li className={classes.navItem}>
                <NavLink to={Navigation.REGISTER} className={classes.navLink}>
                  Register
                </NavLink>
              </li>
              <li className={classes.navItem}>
                <Link to={Navigation.ADD_PROPERTY} className={classes.navLinkButton}>
                  <Button size="small" variant="outline-primary">
                    Add Property
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
          <button
            className={clsx(classes.navToggler, isOpen && classes.navTogglerOpen)}
            onClick={toggleNav}
            aria-haspopup="true"
            aria-controls="navigation"
            aria-expanded={isOpen ? 'true' : 'false'}
          >
            <span className="sr-only">
              {isOpen ? 'Close' : 'Open'}
              menu
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};
