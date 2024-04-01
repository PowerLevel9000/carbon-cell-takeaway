import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './components/pages/contact/Contact';
import Organization from './components/pages/organization/Organization';
import Services from './components/pages/services/Services';
import Home from './components/pages/home/Home';
import Navigation from './components/shared/Navigation';

function App() {
  return (
    <div className="app">
      <Navigation />
      <div style={{width: "100%"}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/organization" element={<Organization />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
