import { Link } from 'react-router-dom';
import classes from './PropertyCard.module.css';

export const PropertyCard = () => (
  <article className={classes.propertyCard}>
    <a href="/property-url" className={classes.imageWrapper}>
      <img
        src="https://placeimg.com/600/600/arch"
        alt="Property description"
        className={classes.image}
      />
      <div className={classes.imageOverlay}>
        <h3 className={classes.propertyTitle}>Big Luxury Apartment</h3>
        <address className={classes.propertyAddress}>1350 Arbutus Drive</address>
      </div>
    </a>
    <div className={classes.cardBody}>
      <div className={classes.propertyFeatures}>
        <dl className={classes.propertyFeature}>
          <dt className={classes.propertyFeatureTitle}>Area</dt>
          <dd className={classes.propertyFeatureValue}>325m2</dd>
        </dl>
        <dl className={classes.propertyFeature}>
          <dt className={classes.propertyFeatureTitle}>Bedrooms</dt>
          <dd className={classes.propertyFeatureValue}>2</dd>
        </dl>
        <dl className={classes.propertyFeature}>
          <dt className={classes.propertyFeatureTitle}>Bathrooms</dt>
          <dd className={classes.propertyFeatureValue}>1</dd>
        </dl>
      </div>
    </div>
    <Link to="/" className={classes.propertyLink}>
      Details
    </Link>
  </article>
);
