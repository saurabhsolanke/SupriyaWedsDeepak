
// Import Components
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import WeddingSite from './components/WeddingSite';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/ourstory" element={<WeddingSite />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
