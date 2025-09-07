import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const CraftHistory = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1200, once: true, easing: "ease-in-out" });
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const craftSections = [
    {
      title: "THE KASHMIRI LEGACY: SOZNI KAARI",
      img: "/images/sozni-kaari.jpg",
      desc: `Sozni Kaari is one of the most exquisite forms of Kashmiri embroidery. It originated in the royal courts of Kashmir during the 15th century, known for its intricate, fine needlework done with silk threads on luxurious woolen shawls. 
      The designs often include elaborate floral motifs, paisleys, and vine patterns, reflecting Persian influences blended with local artistry. Traditionally, Sozni embroidery was a mark of high social status and wealth, often adorning shawls, garments, and ceremonial attire. Artisans, mostly women, would spend months creating a single piece, making each work unique. Even today, Sozni Kaari is revered for its finesse, symbolizing the timeless craftsmanship and cultural richness of Kashmir.`
    },
   

    {
      title: "KANI SHAWL OF KASHMIR",
      img: "/images/kani-shawl.jpg",
      desc: `The Kani Shawl is perhaps the most iconic handwoven product of Kashmir, known worldwide for its intricate patterns and unparalleled craftsmanship. The term 'Kani' refers to the small wooden sticks used instead of a shuttle in traditional weaving. 
      Each pattern is meticulously created by hand, with artisans often memorizing complex designs passed down through generations. The weaving process is extremely time-consuming; a single shawl can take several months to complete, depending on the complexity of the design. 
      Kani Shawls gained immense popularity during the 18th and 19th centuries, becoming prized possessions among European royalty and nobility. They remain a symbol of luxury, artistry, and the rich cultural legacy of Kashmir. Owning a Kani Shawl is not just about fashion—it is about cherishing a centuries-old tradition of skill, patience, and heritage.`
    },
     {
  title: "TRADITIONAL KASHMIRI CRAFTS",
  img: "/images/traditional-crafts.jpg",
  desc: `Kashmir has a rich heritage of traditional crafts that have been preserved over centuries. From the exquisite Kani and Jamawar weaving techniques to the delicate embroidery styles like Aari and Sozni, each craft reflects the region's artistry and cultural identity. 
  Historically, these crafts were patronized by kings and nobles, serving both functional and decorative purposes in households and royal courts. Handwoven shawls, carpets, and embroidered garments were not only symbols of wealth and status but also testaments to Kashmiri craftsmanship. 
  Today, these traditional crafts continue to thrive, representing the cultural legacy of Kashmir and the skill, patience, and creativity of its artisans.`
}
  ];

  return (
    <>
      <Navbar />
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
          <h6 style={{ margin: 0, fontSize: "1.3rem" }}>CraftHistory</h6>
          <div style={{ fontSize: "0.9rem", paddingTop: "10px" }}>
            <a href="/" style={{ color: "#fff", textDecoration: "none", marginRight: "10px" }}>Home</a>
            /
            <a href="/history" style={{ color: "#fff", textDecoration: "none", marginLeft: "10px" }}>CraftHistory</a>
          </div>
        </div>
      </section>
      {/* Craft Sections */}
      <div className="craft-section-container">
        {craftSections.map((section, index) => (
          <div
            key={index}
            className="craft-card"
            data-aos="fade-up"
            style={{ flexDirection: "column" }}
          >
            <div className="craft-img">
              <img src={section.img} alt={section.title} />
            </div>
            <div className="craft-content">
              <h3>{section.title}</h3>
              <p>{section.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* <Footer /> */}

      <style>
        {`
        /* Craft Sections */
        .craft-section-container {
          max-width: 1150px;
          margin: 180px auto 100px auto; /* Desktop spacing */
          padding: 0 20px;
          display: flex;
          flex-direction: column;
          gap: 80px;
        }
        .craft-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 30px;
          border-radius: 20px;
          box-shadow: 0 15px 35px rgba(0,0,0,0.15);
          padding: 25px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .craft-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.2);
        }
        .craft-img img {
          width: 100%;
          border-radius: 15px;
          height: 300px;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .craft-img img:hover {
          transform: scale(1.05);
        }
        .craft-content {
          text-align: left;
          max-width: 900px;
        }
        .craft-content h3 {
          color: #bfa04b;
          font-size: 1.5rem;
          margin: 20px 0 15px 0;
        }
        .craft-content p {
          color: #444;
          font-size: 1.1rem;
          line-height: 1.8;
          text-align: justify;
        }

        /* Mobile adjustments */
        @media (max-width: 768px) {
          .craft-section-container {
            margin-top: 40px; /* 100px space on mobile */
          }
          .craft-img img {
            height: 220px;
          }
        }
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
        `}
      </style>
    </>
  );
};

export default CraftHistory;
