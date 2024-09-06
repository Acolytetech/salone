import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import AboutUs from './component/About/About';
import Footer from './component/footer/Footer';
import Home from './component/Home/Home';
import Contact from './component/contact/Contact';
// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contactus" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
