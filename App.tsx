
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Order from './pages/Order';
import Rewards from './pages/Rewards';
import Stores from './pages/Stores';
import Contact from './pages/Contact';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const PageWrapper: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <div className="animate-in fade-in duration-700 slide-in-from-bottom-2">
      {children}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen selection:bg-brown selection:text-white">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/menu" element={<PageWrapper><Menu /></PageWrapper>} />
            <Route path="/order" element={<PageWrapper><Order /></PageWrapper>} />
            <Route path="/rewards" element={<PageWrapper><Rewards /></PageWrapper>} />
            <Route path="/stores" element={<PageWrapper><Stores /></PageWrapper>} />
            <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
