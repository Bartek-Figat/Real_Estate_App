import clsx from 'clsx';
import { PropertyCard } from './PropertyCard/PropertyCard';
import classes from './PropertyCardsList.module.css';

export const PropertyCardsList = ({ title }) => (
  <section id="recent-properties" className="section">
    <div className="bootstrap-wrapper">
      <div className="container">
        <h2 className={clsx('section-heading', classes.sectionHeading)}>{title}</h2>
        <div className="row">
          <div className={clsx('col-sm-6 col-lg-4', classes.cardWrapper)}>
            <PropertyCard />
          </div>
          <div className={clsx('col-sm-6 col-lg-4', classes.cardWrapper)}>
            <PropertyCard />
          </div>
          <div className={clsx('col-sm-6 col-lg-4', classes.cardWrapper)}>
            <PropertyCard />
          </div>
        </div>
      </div>
    </div>
  </section>
);
