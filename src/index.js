import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/index.css';
import Home from './pages/Home';
import About from './pages/About';
import Accomodation from './pages/Accomodation';
import NotFound from './pages/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/accomodation" element={<Accomodation />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
);