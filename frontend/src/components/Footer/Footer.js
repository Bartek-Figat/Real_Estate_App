import clsx from 'clsx';
import { Link } from 'react-router-dom';
import classes from './Footer.module.css';
import logo from '../../assets/images/logo.png';
import { Button } from '../Button/Button';

import { Navigation } from '../../config/routing/NavigationPaths';

export const Footer = () => (
  <footer className={clsx(classes.footer, 'bootstrap-wrapper')}>
    <div className={clsx(classes.mainFooter, 'container')}>
      <div className="row">
        <div className={clsx('col-md-6', classes.footerColumn)}>
          <img
            src={logo}
            alt="MY.HOUSE - Innovative Real Estate Business"
            className={classes.logo}
          />
          <p className={classes.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat tempor sapien.
            In lobortis posuere tincidunt. Curabitur malesuada tempus ligula nec maximus. Nam tortor
            arcu, tincidunt quis molestie non, sagittis dignissim ligula. Fusce est ipsum, pharetra
            in felis ac, lobortis volutpat diam.
          </p>
          <Button variant="outline-secondary">Contact Us</Button>
        </div>
        <div className={clsx('col-md-2', classes.footerColumn)}>
          <h3 className={classes.footerHeading}>Navigation</h3>
          <nav>
            <ul className={classes.nav}>
              <li className={classes.navItem}>
                <Link to={Navigation.HOME} className={classes.navLink}>
                  Home
                </Link>
              </li>
              <li className={classes.navItem}>
                <Link to={Navigation.LOGIN} className={classes.navLink}>
                  About Us
                </Link>
              </li>
              <li className={classes.navItem}>
                <Link to={Navigation.REGISTER} className={classes.navLink}>
                  Contact
                </Link>
              </li>
              <li className={classes.navItem}>
                <Link to={Navigation.LOGIN} className={classes.navLink}>
                  Login
                </Link>
              </li>
              <li className={classes.navItem}>
                <Link to={Navigation.REGISTER} className={classes.navLink}>
                  Register
                </Link>
              </li>
              <li className={classes.navItem}>
                <Link to={Navigation.ADD_PROPERTY} className={classes.navLink}>
                  Add Property
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className={clsx('col-md-4', classes.footerColumn)}>
          <h3 className={classes.footerHeading}>Contact</h3>
          <address className={classes.address}>
            2590 Rocky Road <br />
            Philadelphia, PA 19108 <br />
            <span className={classes.addressLabel}> Email</span>: office@example.com
            <br />
            <span className={classes.addressLabel}> Phone</span>: +1 215-606-0391
            <br />
            <span className={classes.addressLabel}> Skype</span>: real.estate1
          </address>
        </div>
      </div>
    </div>
    <div className={classes.subFooter}>
      <div className="container">&copy; 2021 Real Estate, All rights reserved</div>
    </div>
  </footer>
);
