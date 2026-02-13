
import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Philosophy from './pages/Philosophy';
import Community from './pages/Community';
import Career from './pages/Career';
import Contact from './pages/Contact';
import { RoutePath } from './types';

// ScrollToTop helper to ensure navigation resets scroll position
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path={RoutePath.HOME} element={<Home />} />
          <Route path={RoutePath.ABOUT} element={<About />} />
          <Route path={RoutePath.PROGRAMS} element={<Programs />} />
          <Route path={RoutePath.PHILOSOPHY} element={<Philosophy />} />
          <Route path={RoutePath.COMMUNITY} element={<Community />} />
          <Route path={RoutePath.CAREER} element={<Career />} />
          <Route path={RoutePath.CONTACT} element={<Contact />} />
          {/* Fallback */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
