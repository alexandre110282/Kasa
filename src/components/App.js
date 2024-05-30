import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './Header.js';
import CardList from './CardList';
import Error404 from './404.js';
import APropos from './APropos';
import Banner from './Banner.js';
import Footer from './Footer.js';
import BannerApp from '../assets/IMG.png';
import BannerApropos from '../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png';
import '../styles/App.scss'

function App() {
  const location = useLocation()
  const showText = location.pathname !== '/a-propos'; // showText est true sauf sur la page "A propos"

  const bannerImage =
    location.pathname === '/a-propos' ? BannerApropos : BannerApp;

  return (
    <div className="App">
      <Header />
      {(window.location.pathname === '/' || window.location.pathname === '/a-propos') && <Banner key={window.location.pathname} image={bannerImage} showText={showText} />}

      <Routes>
        <Route path="/" element={<CardList />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;