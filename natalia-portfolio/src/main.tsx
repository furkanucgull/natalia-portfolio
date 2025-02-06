import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <header>
      <Navbar />
    </header>
    <App />
    <footer >
      <Footer />
    </footer>
  </BrowserRouter>,
);
