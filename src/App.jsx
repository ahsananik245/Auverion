import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import RebarX from './pages/RebarX';
import Solutions from './pages/Solutions';
import Pricing from './pages/Pricing';
import Download from './pages/Download';
import Support from './pages/Support';
import Documentation from './pages/Documentation';
import Enterprise from './pages/Enterprise';
import Company from './pages/Company';
import CompanyAbout from './pages/company/About';
import CompanyMission from './pages/company/Mission';
import CompanyTeam from './pages/company/Team';
import CompanyCareers from './pages/company/Careers';
import CompanyCulture from './pages/company/Culture';
import CompanyPartners from './pages/company/Partners';
import CompanyPress from './pages/company/Press';
import CompanyContact from './pages/company/Contact';
import CompanyLegal from './pages/company/Legal';
import Accessibility from './pages/company/Accessibility';
import PageTransition from './components/layout/PageTransition';
import NotFound from './pages/NotFound';
import SkipToContent from './components/layout/SkipToContent';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="app">
          <SkipToContent />
          <Navigation />
          <main id="main-content" style={{ display: 'contents' }}>
            <PageTransition>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/rebarx" element={<RebarX />} />
                <Route path="/solutions" element={<Solutions />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/download" element={<Download />} />
                <Route path="/support" element={<Support />} />
                <Route path="/documentation" element={<Documentation />} />
                <Route path="/enterprise" element={<Enterprise />} />
                <Route path="/company" element={<Company />} />
                <Route path="/company/about" element={<CompanyAbout />} />
                <Route path="/company/mission" element={<CompanyMission />} />
                <Route path="/company/team" element={<CompanyTeam />} />
                <Route path="/company/careers" element={<CompanyCareers />} />
                <Route path="/company/culture" element={<CompanyCulture />} />
                <Route path="/company/partners" element={<CompanyPartners />} />
                <Route path="/company/press" element={<CompanyPress />} />
                <Route path="/company/contact" element={<CompanyContact />} />
                <Route path="/company/legal" element={<CompanyLegal />} />
                <Route path="/company/accessibility" element={<Accessibility />} />
                
                {/* Catch-all 404 Route */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </PageTransition>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
