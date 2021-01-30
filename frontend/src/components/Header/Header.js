import { Navbar } from './Navbar/Navbar';
import classes from './Header.module.css';

export const Header = () => (
  <header className={classes.header}>
    <Navbar />
  </header>
);
