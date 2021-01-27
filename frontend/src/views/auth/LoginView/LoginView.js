import { Header } from '../../../components/Header/Header';
import { Footer } from '../../../components/Footer/Footer';
import { Login } from './Login';

export const LoginView = () => (
  <>
    <Header />
    <main>
      <h1>LOGIN VIEW</h1>
      <Login />
    </main>
    <Footer />
  </>
);
