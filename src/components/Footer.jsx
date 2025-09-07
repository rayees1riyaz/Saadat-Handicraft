import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="grid">
        <div className="footer-section">
          <img src="/logo.jpeg" alt="saadathanicraft" />
          <p>
            At Saadat Handicraft, we bring the rich heritage of Kashmiri
            craftsmanship to life, creating timeless, handcrafted pieces
            with love, skill, and devotion.
          </p>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>📞 +91 9906776815</p>
          <p>📞 +91 7006045909</p>
          <p>📧 saadathandicraft@gmail.com</p>
          <p>
            📍 Old Ali Jan Road, Zoonimar Srinagar <br />
            Jammu and Kashmir 190011, India
          </p>
        </div>

        {/* Combine Useful Links in one line */}
        <div className="footer-section useful-links-container">
          <div className="useful-links">
            <h3>Useful Links</h3>
            <p><a href="#about">About Us</a></p>
            <p><a href="#contact">Contact Us</a></p>
            <p><a href="#privacy">Privacy Policy</a></p>
            <p><a href="#terms">Terms & Conditions</a></p>
          </div>
        
        </div>
      </div>

      <p className="text-center">
        © 2025 Saadat Handicraft
      </p>
      <p>Designed by <strong>Rayees Riyaz</strong></p>
    </footer>
  );
};

export default Footer;
