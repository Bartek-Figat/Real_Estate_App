import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { Hero } from '../../components/Header/Hero/Hero';
import { PropertyCardsList } from '../../components/PropertyCardsList/PropertyCardsList';

export const Home = () => (
  <>
    <Header />
    <main className="main-content">
      <Hero />
      <PropertyCardsList title="Recent Properties" />
    </main>
    <Footer />
  </>
);
