import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Categories = () => {
  const cats = [
    { name: "KANI WEAVE SCARF", img: "./images/KANI WEAVE SCARF.jpg", size: "large" },
    { name: "KANI WEAVE SHAWL", img: "./images/KANI WEAVE SHAWL.jpg", size: "small" },
    { name: "KANI WEAVE STOLE", img: "./images/KANI WEAVE STOLE.jpg", size: "small" },
    { name: "SOZNI WORK EMBROIDERY", img: "./images/SOZNI WORK EMBROIDERY.jpg", size: "large" },
    { name: "PASHMINA STOLE", img: "./images/PASHMINA STOLE.jpg", size: "small" },
    { name: "AARI WORK SHAWL", img: "./images/AARI WORK SHAWL.jpg", size: "large" },
  ];

  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1200, // smoother and slower animation
      easing: "ease-in-out",
      once: true, // only animate once
      anchorPlacement: "top-bottom", // triggers when element enters viewport
    });
  }, []);

  return (
    <section
      style={{
        padding: "80px 20px",
        backgroundColor: "#fefefe",
        textAlign: "center",
        width: "80%",
        margin: "auto",
      }}
    >
      <h2
        style={{
          fontSize: "3rem",
          marginBottom: "60px",
          fontWeight: "bold",
          color: "#222",
        }}
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Featured Categories
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "30px",
        }}
      >
        {cats.map((cat, i) => (
          <div
            key={i}
            className="category-card"
            data-aos={i % 2 === 0 ? "fade-right" : "fade-left"} // alternate animations
            data-aos-delay={i * 200} // staggered effect
            data-aos-duration="1000" // smoother duration per card
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: "24px",
              cursor: "pointer",
              height: cat.size === "large" ? "420px" : "280px",
              boxShadow: "0 12px 35px rgba(0,0,0,0.2)",
              transition: "transform 0.7s ease, box-shadow 0.7s ease", // smoother hover
              marginTop: isDesktop ? (i % 2 === 0 ? "0" : "40px") : "0",
            }}
            onMouseEnter={(e) => {
              if (isDesktop) {
                e.currentTarget.style.transform = "scale(1.07)";
                e.currentTarget.style.boxShadow =
                  "0 25px 50px rgba(0,0,0,0.35)";
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow =
                "0 12px 35px rgba(0,0,0,0.2)";
            }}
          >
            <img
              src={cat.img}
              alt={cat.name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
                display: "block",
                borderRadius: "24px",
                transition: "transform 0.7s ease, filter 0.7s ease",
                filter: "brightness(0.95)",
              }}
            />

            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.55), rgba(0,0,0,0.05))",
                zIndex: 1,
              }}
            />

            <div
              style={{
                position: "absolute",
                bottom: "20px",
                left: "50%",
                transform: "translateX(-50%)",
                color: "#fff",
                fontSize: "1.5rem",
                fontWeight: "800",
                textAlign: "center",
                textShadow: "3px 3px 15px rgba(0,0,0,0.85)",
                zIndex: 2,
                padding: "0 10px",
              }}
            >
              {cat.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
