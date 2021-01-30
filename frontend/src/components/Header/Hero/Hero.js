import clsx from 'clsx';
import { Link } from 'react-router-dom';
import classes from './Hero.module.css';
import { Button } from '../../Button/Button';

export const Hero = () => (
  <div className={classes.heroSection}>
    <figure className={classes.slide}>
      <img
        className={classes.image}
        src="https://placeimg.com/1920/1080/arch"
        alt="Description of the property"
      />
      <figcaption className={clsx(classes.slideContentWrapper, 'bootstrap-wrapper')}>
        <div className={clsx(classes.slideContent, 'container')}>
          <h2 className={classes.propertyTitle}>Cozy Apartment</h2>
          <address className={classes.propertyAddress}>4831 Worthington Drive</address>
          <div className={classes.propertyFeatures}>
            <dl className={classes.propertyFeature}>
              <dt className={classes.propertyFeatureTitle}>Area</dt>
              <dd className={classes.propertyValue}>325m2</dd>
            </dl>
            <dl className={classes.propertyFeature}>
              <dt className={classes.propertyFeatureTitle}>Bedrooms</dt>
              <dd className={classes.propertyValue}>2</dd>
            </dl>
            <dl className={classes.propertyFeature}>
              <dt className={classes.propertyFeatureTitle}>Bathrooms</dt>
              <dd className={classes.propertyValue}>1</dd>
            </dl>
          </div>
          <Link to="/" className={classes.propertyButton}>
            <Button variant="primary" size="large">
              Details
            </Button>
          </Link>
        </div>
      </figcaption>
    </figure>
  </div>
);
