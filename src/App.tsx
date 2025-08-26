import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Work from './pages/Work';
import About from './pages/About';
import Contact from './pages/Contact';
import CaseStudyUnitedWay from './pages/CaseStudyUnitedWay';
import DataDashboardCaseStudy from './pages/DataDashboardCaseStudy';
import EconomicResearchCaseStudy from './pages/EconomicResearchCaseStudy';

function App() {
  const basename = import.meta.env.PROD ? '/personal-website-exp' : '/';
  return (
    <Router basename={basename}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work/united-way-marketing-analytics" element={<CaseStudyUnitedWay />} />
          <Route path="/work/data-dashboard-analytics" element={<DataDashboardCaseStudy />} />
          <Route path="/work/economic-research-analysis" element={<EconomicResearchCaseStudy />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;