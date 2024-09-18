// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio';
import './App.css'



const App = () => {
  return (
    <>
    <Header />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer />
    </>

  );
};

export default App;


