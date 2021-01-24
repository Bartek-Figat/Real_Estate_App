import { NavLink } from 'react-router-dom';
import { Navigation } from '../../config/routing/NavigationPaths';

export const Header = () => (
  <header>
    <NavLink to={Navigation.HOME}>Home</NavLink>
    <NavLink to={Navigation.LOGIN}>Login</NavLink>
    <NavLink to={Navigation.REGISTER}>Register</NavLink>
    <NavLink to={Navigation.ADD_PROPERTY}>Add property</NavLink>
  </header>
);
