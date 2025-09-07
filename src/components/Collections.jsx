// src/components/Collections.jsx
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Collections = () => {
  const menItems = [
    { name: "Kani Weave Stole", img: "./images/Kani men.jpg" },
    { name: "Kani Weave Shawl", img: "./images/kani men2.jpg" },
  ];

  const womenItems = [
    { name: "Aari Work Embroidery Pheren", img: "./images/aari work2.jpg", hoverImg: "./images/aari work.jpg" },
    { name: "Kani Weave Shawl", img: "./images/Kani Weave Shawl.jpg", hoverImg: "./images/Kani Weave Shawl2.jpg" },
    { name: "Kani Weave Stole & Scarf", img: "./images/Kani Weave Stole & Scarf.jpg", hoverImg: "./images/Kani Weave Stole & Scarf2.jpg" },
    { name: "Sozni Embroidery Shawl & Stole", img: "./images/Sozni Embroidery Shawl & Stole.jpg", hoverImg: "./images/Sozni Embroidery Shawl & Stole2.jpg" },
    { name: "Sozni Work Embroidery Pheren", img: "./images/Sozni Work Embroidery Pheren.jpg", hoverImg: "./images/Sozni Work Embroidery Pheren2.jpg" },
    { name: "Tilla Embroidery Shawl", img: "./images/Tilla Embroidery Shawl.jpg", hoverImg: "./images/Tilla Embroidery Shawl2.jpg" },
    { name: "Sozni Embroidery Jamawar", img: "./images/Sozni Embroidery Jamawar.jpg", hoverImg: "./images/Sozni Embroidery Jamawar2.jpg" },
  ];

  const [activeTab, setActiveTab] = useState("men");
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (activeTab !== "women") return;

    let index = 0;
    const changeNext = () => {
      const intervals = [4000, 5000, 5000, 4000, 2000, 3000, 3000];
      setHoveredIndex(index);
      const timeout = setTimeout(() => {
        index = (index + 1) % womenItems.length;
        changeNext();
      }, intervals[index]);
      return () => clearTimeout(timeout);
    };

    const cleanup = changeNext();
    return () => {
      if (cleanup) cleanup();
    };
  }, [activeTab]);

  const handleTabChange = (tab) => {
    if (activeTab === tab) return;
    setLoading(true);
    setTimeout(() => {
      setActiveTab(tab);
      setLoading(false);
    }, 1000);
  };

  // ✅ Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const renderGrid = (items, isWomen = false) => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 400px))",
        justifyContent: "center",
        gap: "20px",
        marginTop: "20px",
      }}
    >
      {items.map((item, i) => (
        <div
          key={i}
          style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: "15px",
            cursor: "pointer",
            boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
            marginTop: isWomen && i % 2 !== 0 ? "30px" : "0",
            height: isWomen ? "360px" : "auto",
            display: "flex",
            flexDirection: "column",
            margin: "10px",
          }}
          data-aos={i % 2 === 0 ? "fade-right" : "fade-left"} // alternate animations
          data-aos-delay={i * 150} // stagger effect
        >
          <div style={{ position: "relative", width: "100%", flex: isWomen ? 1 : "none" }}>
            <img
              src={item.img}
              alt={item.name}
              style={{
                width: "100%",
                height: isWomen ? "100%" : "auto",
                maxHeight: isWomen ? "100%" : "280px",
                objectFit: "cover",
                borderRadius: "15px",
                display: "block",
                transition: "opacity 0.9s ease, transform 0.9s ease",
                opacity: isWomen && hoveredIndex === i ? 0 : 1,
                transform: isWomen && hoveredIndex === i ? "scale(1.03)" : "scale(1)",
                position: isWomen ? "absolute" : "relative",
                top: 0,
                left: 0,
              }}
            />
            {isWomen && (
              <img
                src={item.hoverImg}
                alt={item.name + " hover"}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "15px",
                  display: "block",
                  transition: "opacity 0.9s ease, transform 0.9s ease",
                  opacity: hoveredIndex === i ? 1 : 0,
                  transform: hoveredIndex === i ? "scale(1.03)" : "scale(1)",
                  position: "absolute",
                  top: 0,
                  left: 0,
                }}
              />
            )}
          </div>

          <p
            style={{
              color: "#333",
              fontWeight: "500",
              fontSize: "1rem",
              textAlign: "center",
              padding: "10px 5px",
              position: "relative",
              zIndex: 2,
            }}
          >
            {item.name}
          </p>
        </div>
      ))}
    </div>
  );

  const tabButtonStyle = (tab) => ({
    padding: "12px 35px",
    fontSize: "1rem",
    fontWeight: "600",
    background:
      activeTab === tab
        ? "linear-gradient(90deg, #ff7e5f, #feb47b)"
        : "linear-gradient(90deg, #f0f0f0, #e0e0e0)",
    color: activeTab === tab ? "#fff" : "#555",
    border: "none",
    borderRadius: "25px",
    cursor: loading ? "not-allowed" : "pointer",
    transition: "all 0.3s ease",
    boxShadow:
      activeTab === tab
        ? "0 5px 15px rgba(255,126,95,0.4)"
        : "0 2px 6px rgba(0,0,0,0.08)",
  });

  return (
    <section
      style={{
        padding: "50px 15px",
        // backgroundColor: "#f8f8f8",
        textAlign: "center",
        width: "80%",
        margin: "auto",
        borderRadius: "20px",
      }}
      data-aos="fade-up" // whole section animates in
    >
      <h2
        style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "30px" }}
        data-aos="zoom-in"
      >
        Collections
      </h2>

      <div
        style={{ display: "flex", justifyContent: "center", gap: "25px", marginBottom: "30px" }}
        data-aos="fade-up"
      >
        <button onClick={() => handleTabChange("men")} style={tabButtonStyle("men")} disabled={loading}>
          {loading && activeTab !== "men" ? "Loading..." : "Men"}
        </button>

        <button onClick={() => handleTabChange("women")} style={tabButtonStyle("women")} disabled={loading}>
          {loading && activeTab !== "women" ? "Loading..." : "Women"}
        </button>
      </div>

      {loading ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 400px))",
            justifyContent: "center",
            gap: "20px",
            marginTop: "20px",
          }}
          data-aos="fade-up"
        >
          {[1, 2, 3, 4].map((_, i) => (
            <div
              key={i}
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "15px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
                height: "360px",
                background: "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)",
                backgroundSize: "200% 100%",
                animation: "shimmer 1.5s infinite",
              }}
              data-aos="fade-up"
              data-aos-delay={i * 200}
            />
          ))}
        </div>
      ) : (
        <>
          {activeTab === "men" && renderGrid(menItems)}
          {activeTab === "women" && renderGrid(womenItems, true)}
        </>
      )}
    </section>
  );
};

export default Collections;
