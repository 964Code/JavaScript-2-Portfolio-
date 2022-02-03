import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import { useRef } from 'react';

function App() {
  const doc = useRef(document.getElementById('document'));
  console.dir(doc);
  return (
    <>
      <Navbar title='' />
      <Home />
      <Skills />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
