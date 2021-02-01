import { Header } from '../../../components/Header/Header';
import { Footer } from '../../../components/Footer/Footer';
import { AlertLoginBoxComponent } from '../../../components/AddProperty/AlertLoginBoxComponent';

export const AddPropertyView = () => (
  <>
    <Header />
    <main>
      <h1>Submit</h1>
      <AlertLoginBoxComponent />
    </main>
    <Footer />
  </>
);
