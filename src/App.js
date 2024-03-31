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
      <div className='sidebar'>
        <h1>React App</h1>
        <Navigation />
      </div>
      <Routes className="content-page">
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/organization" element={<Organization />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </div>
  );
}

export default App;
