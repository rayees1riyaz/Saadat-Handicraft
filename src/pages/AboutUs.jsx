// src/pages/AboutUs.jsx
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
  }, []);

  const carouselItems = [
    { img: "./images/aboutimg1.jpg", title: "Kashmiri Shawls" },
    { img: "./images/aboutimg2.jpg", title: "Pashmina Stoles" },
    { img: "./images/aboutimg3.jpg", title: "Handmade Stoles" },
    { img: "./images/aboutimg4.jpg", title: "Traditional Work" },
    { img: "./images/aboutimg5.jpg", title: "Artisan Work" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div style={{ fontFamily: "Georgia, serif", color: "#333" }}>
      <Navbar />

      {/* Breadcrumb - always rendered, CSS will show only on mobile */}
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
          <h2 style={{ margin: 0, fontSize: "1.3rem" }}>About Us</h2>
          <div style={{ fontSize: "0.9rem", paddingTop: "10px" }}>
            <a href="/" style={{ color: "#fff", textDecoration: "none", marginRight: "10px" }}>Home</a>
            /
            <a href="/about" style={{ color: "#fff", textDecoration: "none", marginLeft: "10px" }}>About</a>
          </div>
        </div>
      </section>

      {/* About + Mission Section */}
      <section
        className="about-mission-section"
        style={{
          width: "100%",
          padding: "130px 20px 60px 20px",
          background: "linear-gradient(135deg, #fafafa 0%, #f0f0f0 100%)",
          display: "flex",
          justifyContent: "center",
          boxSizing: "border-box",
        }}
        data-aos="fade-up"
      >
        <div
          style={{
            width: "80%",
            display: "flex",
            flexWrap: "wrap",
            gap: "40px",
            alignItems: "flex-start",
          }}
        >
          {/* Left: About */}
          <div style={{ flex: "1", minWidth: "300px" }} data-aos="fade-right">
            <h6
              style={{
                fontSize: "1rem",
                color: "#bfa04b",
                marginTop: "20px",
                marginBottom: "15px",
                borderBottom: "1px solid #bfa04b",
                display: "inline-block",
                paddingBottom: "5px",
              }}
            >
              Some Words About Saadat Handicraft
            </h6>
            <h2 style={{ fontSize: "1.5rem", lineHeight: "1.7", marginTop: "10px" }}>
              Preserving Kashmiri handicrafts with authentic, <br />
              handmade artistry.
            </h2>
          </div>

          {/* Right: Mission */}
          <div style={{ flex: "1", minWidth: "300px" }} data-aos="fade-left">
            <h2
              style={{
                fontSize: "1rem",
                marginTop: "20px",
                marginBottom: "15px",
                borderBottom: "1px solid #bfa04b",
                display: "inline-block",
                paddingBottom: "5px",
              }}
            >
              Our Mission
            </h2>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.7", marginTop: "10px" }}>
              Our mission is to preserve the centuries-old Kashmiri craftsmanship for generations, empower local artisans with sustainable work, and provide high-quality handmade products that reflect the culture, tradition, and heritage of Kashmir. We aim to create a platform where art meets excellence, and every piece tells a unique story.
            </p>
          </div>
        </div>
      </section>

      {/* Carousel + About Us Section */}
      <section
        className="carousel-about-section"
        style={{
          display: "flex",
          flexWrap: "wrap",
          maxWidth: "80%",
          margin: "50px auto",
          gap: "40px",
          alignItems: "flex-start",
        }}
      >
        {/* Carousel */}
        <div style={{ flex: "1", minWidth: "300px" }} data-aos="fade-right">
          <Slider {...settings}>
            {carouselItems.map((item, index) => (
              <div key={index} style={{ textAlign: "center" }}>
                <img
                  src={item.img}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: "560px",
                    objectFit: "cover",
                    borderRadius: "12px",
                    marginBottom: "10px",
                  }}
                />
                <h3 style={{ fontSize: "1.2rem", fontWeight: "600" }}>{item.title}</h3>
              </div>
            ))}
          </Slider>
        </div>

        {/* About Us Text */}
        <div
          className="about-text"
          style={{
            flex: "1",
            minWidth: "300px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          data-aos="fade-left"
        >
          <div style={{ width: "80%" }}>
            <p style={{ fontSize: "1rem", color: "#bfa04b", marginBottom: "15px", display: "inline-block", paddingBottom: "5px" }}>
              Saadat Handicraft
            </p>
            <h2 style={{ fontSize: "2rem", color: "#0b3d91", marginBottom: "20px" }}>About Us</h2>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
              Preserving Kashmiri handicrafts with authentic, handmade artistry has always been at the heart of Saadat Handicraft. Every piece we create is not just a product, but a reflection of Kashmir’s rich culture, tradition, and timeless beauty.

              Our mission is to preserve craftsmanship for generations, empower artisans, and provide high-quality handmade products that tell a story of culture and tradition. We believe that every shawl, stole, and craft is a living expression of dedication, patience, and skill that has been passed down through centuries.

              We are committed to uplifting local artisans by giving them sustainable opportunities, fair wages, and global recognition for their extraordinary talent. By combining ancient weaving and embroidery techniques with modern designs, we aim to bring Kashmiri art to the world while keeping its authenticity intact.

              Every creation from Saadat Handicraft carries a piece of history, a touch of heritage, and the warmth of human hands. Through our work, we strive to bridge the gap between tradition and modern lifestyles, ensuring that the legacy of Kashmiri artisans continues to inspire and live on for future generations.
            </p>
          </div>
        </div>
      </section>

      {/* <Footer /> */}

      {/* Styles */}
      <style>
        {`
          /* Breadcrumb hidden by default, show only on mobile */
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
            }

            .about-mission-section {
              flex-direction: column !important;
              gap: 20px !important;
              padding: 20px 20px 60px 20px !important;
            }

            .about-mission-section div {
              width: 100% !important;
            }

            .carousel-about-section {
              flex-direction: column !important;
            }

            .carousel-about-section > div {
              width: 100% !important;
            }

            .carousel-about-section .about-text {
              width: 100% !important;
              text-align: center !important;
            }
          }
        `}
      </style>
      
    </div>
  );
};

export default AboutUs;
