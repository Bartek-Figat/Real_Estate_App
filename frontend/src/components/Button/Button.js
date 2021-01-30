import clsx from 'clsx';
import classes from './Button.module.css';

export const Button = ({ variant, size, ...props }) => (
  <button className={clsx(classes.button, classes[variant], classes[size])} {...props} />
);
