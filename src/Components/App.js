import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar.js'
import Home from './Pages/Home/Home.js'
import About from './Pages/About/About.js'
import Projects from './Pages/Projects/Projects.js'
import Footer from "./Footer.js";
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
  Aos.init({ duration: 1000, delay: 50, once: true });
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/About' element={<About />} />
          <Route exact path='/Projects' element={<Projects />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App