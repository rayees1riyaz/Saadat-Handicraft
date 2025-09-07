import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Collections from "./components/Collections";
import AboutUs from "./pages/AboutUs"; 
import Gallery from "./pages/Gallery";
import CraftHistory from "./pages/CraftHistory";
import VideoSection from "./components/VideoSection";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Navbar /> {/* Always visible */}
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Categories />
            <Collections />
            <VideoSection />
          </>
        }/>
        <Route path="/about" element={<AboutUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/history" element={<CraftHistory />} />
        <Route path="/contact" element={<Contact />} /> {/* Contact page */}
      </Routes>
      <Footer /> 
       <a
              href="https://wa.me/919906776815"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                position: "fixed",
                bottom: "20px",
                right: "20px",
                backgroundColor: "#25D366",
                borderRadius: "50%",
                width: "60px",
                height: "60px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
                zIndex: 1000,
                transition: "transform 0.3s, box-shadow 0.3s",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(1.1)";
                e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.4)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.3)";
              }}
            >
              <FaWhatsapp size={32} color="#fff" />
            </a>
    </Router>
  );
}

export default App;
