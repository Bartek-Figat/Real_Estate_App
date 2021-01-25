import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';

export const Home = () => (
  <>
    <Header />
    <main className="main-content">
      <h1>Home</h1>
      <div className="bootstrap-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-4">.col-md-4</div>
            <div className="col-md-4">.col-md-4</div>
            <div className="col-md-4">.col-md-4</div>
          </div>
          <div className="row">
            <div className="col-md-6">.col-md-6</div>
            <div className="col-md-6">.col-md-6</div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </>
);
