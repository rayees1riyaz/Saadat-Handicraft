// src/pages/Gallery.jsx
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const Gallery = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  // 48 images with zig-zag margins
  const images = [
    { src: "/images/gallery/gallery1.jpg", marginTop: "20px", marginBottom: "0px" },
    { src: "/images/gallery/gallery2.jpg", marginTop: "0px", marginBottom: "20px" },
    { src: "/images/gallery/gallery3.jpg", marginTop: "20px", marginBottom: "0px" },
    { src: "/images/gallery/gallery4.jpg", marginTop: "0px", marginBottom: "20px" },
    { src: "/images/gallery/gallery5.jpg", marginTop: "20px", marginBottom: "0px" },
    { src: "/images/gallery/gallery6.jpg", marginTop: "0px", marginBottom: "20px" },
    { src: "/images/gallery/gallery7.jpg", marginTop: "20px", marginBottom: "0px" },
    { src: "/images/gallery/gallery8.jpg", marginTop: "0px", marginBottom: "20px" },
    { src: "/images/gallery/gallery9.jpg", marginTop: "20px", marginBottom: "0px" },
    { src: "/images/gallery/gallery10.jpg", marginTop: "0px", marginBottom: "20px" },
    { src: "/images/gallery/gallery11.jpg", marginTop: "20px", marginBottom: "0px" },
    { src: "/images/gallery/gallery12.jpg", marginTop: "0px", marginBottom: "20px" },
    { src: "/images/gallery/gallery13.jpg", marginTop: "20px", marginBottom: "0px" },
    { src: "/images/gallery/gallery14.jpg", marginTop: "0px", marginBottom: "20px" },
    { src: "/images/gallery/gallery15.jpg", marginTop: "20px", marginBottom: "0px" },
    { src: "/images/gallery/gallery16.jpg", marginTop: "0px", marginBottom: "20px" },
    { src: "/images/gallery/gallery17.jpg", marginTop: "20px", marginBottom: "0px" },
    { src: "/images/gallery/gallery18.jpg", marginTop: "0px", marginBottom: "20px" },
    { src: "/images/gallery/gallery19.jpg", marginTop: "20px", marginBottom: "0px" },
    { src: "/images/gallery/gallery20.jpg", marginTop: "0px", marginBottom: "20px" },
    { src: "/images/gallery/gallery21.jpg", marginTop: "20px", marginBottom: "0px" },
    { src: "/images/gallery/gallery22.jpg", marginTop: "0px", marginBottom: "20px" },
    { src: "/images/gallery/gallery23.jpg", marginTop: "20px", marginBottom: "0px" },
    { src: "/images/gallery/gallery24.jpg", marginTop: "0px", marginBottom: "20px" },
    { src: "/images/gallery/gallery25.jpg", marginTop: "20px", marginBottom: "0px" },
    { src: "/images/gallery/gallery26.jpg", marginTop: "0px", marginBottom: "20px" },
    { src: "/images/gallery/gallery27.jpg", marginTop: "20px", marginBottom: "0px" },
    { src: "/images/gallery/gallery28.jpg", marginTop: "0px", marginBottom: "20px" },
    { src: "/images/gallery/gallery29.jpg", marginTop: "20px", marginBottom: "0px" },
    { src: "/images/gallery/gallery30.jpg", marginTop: "0px", marginBottom: "20px" },
    { src: "/images/gallery/gallery31.jpg", marginTop: "20px", marginBottom: "0px" },
    { src: "/images/gallery/gallery32.jpg", marginTop: "0px", marginBottom: "20px" },
    { src: "/images/gallery/gallery33.jpg", marginTop: "20px", marginBottom: "0px" },
    { src: "/images/gallery/gallery34.jpg", marginTop: "0px", marginBottom: "20px" },
    { src: "/images/gallery/gallery35.jpg", marginTop: "20px", marginBottom: "0px" },
    { src: "/images/gallery/gallery36.jpg", marginTop: "0px", marginBottom: "20px" },
    { src: "/images/gallery/gallery37.jpeg", marginTop: "20px", marginBottom: "0px" },
    { src: "/images/gallery/gallery38.jpg", marginTop: "0px", marginBottom: "20px" },
    { src: "/images/gallery/gallery39.jpg", marginTop: "20px", marginBottom: "0px" },
    { src: "/images/gallery/gallery40.jpg", marginTop: "0px", marginBottom: "20px" },
    { src: "/images/gallery/gallery41.jpg", marginTop: "20px", marginBottom: "0px" },
    { src: "/images/gallery/gallery42.jpg", marginTop: "0px", marginBottom: "20px" },
    { src: "/images/gallery/gallery43.jpg", marginTop: "20px", marginBottom: "0px" },
    { src: "/images/gallery/gallery44.jpg", marginTop: "0px", marginBottom: "20px" },
    { src: "/images/gallery/gallery45.jpg", marginTop: "20px", marginBottom: "0px" },
    { src: "/images/gallery/gallery46.jpg", marginTop: "0px", marginBottom: "20px" },
    { src: "/images/gallery/gallery47.jpg", marginTop: "20px", marginBottom: "0px" },
    { src: "/images/gallery/gallery48.jpg", marginTop: "0px", marginBottom: "20px" },
  ];

  return (
    <div style={{ fontFamily: "Georgia, serif", color: "#333" }}>
      <Navbar />

      {/* Breadcrumb - mobile only with animation */}
      <section className="breadcrumb-section" data-aos="fade-down">
        <div
          style={{
            width: "90%",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2 style={{ margin: 0, fontSize: "1.3rem" }}>Gallery</h2>
          <div style={{ fontSize: "0.9rem", paddingTop: "10px" }}>
            <a href="/" style={{ color: "#fff", textDecoration: "none", marginRight: "10px" }}>
              Home
            </a>
            /
            <a href="/gallery" style={{ color: "#fff", textDecoration: "none", marginLeft: "10px" }}>
              Gallery
            </a>
          </div>
        </div>
      </section>

      {/* Title */}
      <div className="gallery-title" data-aos="fade-up">
        <h1>Our Gallery</h1>
        <p style={{ fontSize: "1.1rem", color: "#777" }}>
          A glimpse into the artistry of Saadat Handicraft
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="gallery-grid">
        {images.map((img, index) => (
          <div
            key={index}
            className="gallery-item"
            style={{ marginTop: img.marginTop, marginBottom: img.marginBottom }}
            data-aos="fade-up"
            data-aos-delay={(index % 6) * 100}
          >
            <img src={img.src} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* <Footer /> */}

      {/* Styles */}
      <style>
        {`
          .breadcrumb-section {
            display: none;
            width: 100%;
            background-color: #111;
            color: #fff;
            padding: 15px 20px;
            margin-top: 100px;
          }
          @media (max-width: 768px) {
            .breadcrumb-section {
              display: block;
              margin-top: 100px;
            }
          }
          .gallery-title {
            text-align: center;
            margin-top: 180px;
            margin-bottom: 40px;
          }
          @media (max-width: 768px) {
            .gallery-title {
              margin-top: 40px;
            }
          }
          .gallery-title h1 {
            font-size: 2.5rem;
            color: #0b3d91;
          }
          .gallery-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 24px;
            padding: 0 40px 80px 40px;
            max-width: 1400px;
            margin: 0 auto;
          }
          .gallery-item {
            overflow: hidden;
            border-radius: 16px;
            box-shadow: 0 8px 16px rgba(0,0,0,0.15);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .gallery-item:hover {
            transform: scale(1.03);
            box-shadow: 0 12px 20px rgba(0,0,0,0.2);
          }
          .gallery-item img {
            width: 100%;
            height: 350px;
            object-fit: cover;
            display: block;
            transition: transform 0.5s ease;
          }
          .gallery-item img:hover {
            transform: scale(1.05);
          }
          @media (max-width: 1024px) {
            .gallery-grid {
              grid-template-columns: repeat(3, 1fr);
              gap: 20px;
            }
            .gallery-item img {
              height: 280px;
            }
          }
          @media (max-width: 768px) {
            .gallery-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 16px;
              padding: 0 20px 60px 20px;
            }
            .gallery-item img {
              height: 250px;
            }
          }
          @media (max-width: 480px) {
            .gallery-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 12px;
            }
            .gallery-item img {
              height: 200px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Gallery;
