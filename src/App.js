import './App.css';
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, } from "react-router-dom";
import Home from './components/Home';
import Service from './components/Service';
import Contact from './components/Contact';
import About from './components/About';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import PageHeading from './components/PageHeading';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Service />} />
          <Route path="contact" element={<Contact />} />
          <Route path="gallery" element={<><PageHeading heading="Gallery (16 Images)" description="Blanditiis praesentium aliquam illum tempore incidunt debitis dolorem magni est deserunt sed qui libero. Qui voluptas amet." /><Gallery /></>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>

  );
}

export default App;
