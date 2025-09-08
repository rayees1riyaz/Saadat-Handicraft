import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [successMsg, setSuccessMsg] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMsg("✅ Thank you for contacting us! We’ll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", company: "", message: "" });

    // hide message after 5 seconds
    setTimeout(() => setSuccessMsg(""), 5000);
  };

  const contactCards = [
    { icon: <FiPhone size={40} color="#1e3a8a" />, title: "Phone", details: ["+91 9906776815", "+91 7006045909"] },
    { icon: <FiMail size={40} color="#1e3a8a" />, title: "Email", details: ["saadathandicraft@gmail.com"] },
    { icon: <FiMapPin size={40} color="#1e3a8a" />, title: "Location", details: ["Old Ration Ghat, Srinagar", "Jammu and Kashmir 190011, India"] },
    { icon: <FaWhatsapp size={40} color="#1e3a8a" />, title: "WhatsApp", details: ["+91 9906776815"] },
  ];

  return (
    <>
      {/* Breadcrumb */}
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
          <h2 style={{ margin: 0, fontSize: "1.3rem" }}>Contact</h2>
          <div style={{ fontSize: "0.9rem", paddingTop: "10px" }}>
            <a href="/" style={{ color: "#fff", textDecoration: "none", marginRight: "10px" }}>Home</a>
            /
            <a href="/contact" style={{ color: "#fff", textDecoration: "none", marginLeft: "10px" }}>Contact</a>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="contact-container">
        {/* Google Maps */}
        <section
          data-aos="fade-up"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "40px auto",
            width: "80%",
          }}
        >
          <h2 style={{ color: "#1e3a8a", fontSize: "2rem", marginBottom: "20px" }}>Our Location</h2>
          <div
            style={{
              width: "100%",
              height: "400px",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3302.853870905283!2d74.79645507626175!3d34.12449057312988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e1850020deaea1%3A0x30d612d5315574ad!2sOld%20Ration%20Ghat!5e0!3m2!1sen!2sin!4v1757234983765!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Old Ration Ghat"
            />
          </div>
        </section>

        {/* Contact Cards */}
        <section
          data-aos="fade-up"
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            margin: "60px auto",
            gap: "25px",
            width: "80%",
          }}
        >
          {contactCards.map((item, index) => (
            <div
              key={index}
              style={{
                textAlign: "center",
                padding: "25px",
                flex: "1 1 200px",
                minWidth: "220px",
                borderRadius: "15px",
                backgroundColor: "#fff",
                boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
                transition: "all 0.3s ease-in-out",
                cursor: "pointer",
              }}
            >
              {item.icon}
              <h3 style={{ margin: "12px 0", color: "#1e3a8a" }}>{item.title}</h3>
              {item.details.map((detail, i) => (
                <p key={i} style={{ margin: "5px 0", color: "#555" }}>{detail}</p>
              ))}
            </div>
          ))}
        </section>

        {/* Contact Form */}
        <section
          data-aos="fade-up"
          style={{
            maxWidth: "800px",
            margin: "0 auto 80px auto",
            padding: "45px 35px",
            backgroundColor: "#fff",
            borderRadius: "15px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            width: "80%",
          }}
        >
          <h2 style={{ textAlign: "center", marginBottom: "40px", color: "#1e3a8a" }}>Get In Touch</h2>
          <form onSubmit={handleSubmit} style={{ display: "grid", gap: "20px" }}>
            {["name", "email", "phone", "company"].map((field) => (
              <input
                key={field}
                type={field === "email" ? "email" : "text"}
                name={field}
                placeholder={field === "company" ? "Company Name" : `Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                value={formData[field]}
                onChange={handleChange}
                required={field !== "company"}
                style={{
                  padding: "14px",
                  borderRadius: "10px",
                  border: "1px solid #ccc",
                  fontSize: "16px",
                  width: "100%",
                  boxSizing: "border-box",
                }}
              />
            ))}
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              style={{
                padding: "14px",
                borderRadius: "10px",
                border: "1px solid #ccc",
                fontSize: "16px",
                width: "100%",
                boxSizing: "border-box",
              }}
            />
            <button
              type="submit"
              style={{
                padding: "14px",
                backgroundColor: "#1e3a8a",
                color: "#fff",
                borderRadius: "12px",
                border: "none",
                cursor: "pointer",
                fontWeight: "600",
                fontSize: "16px",
                boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
                transition: "all 0.3s ease-in-out",
              }}
            >
              Send Message
            </button>
          </form>

          {/* ✅ Success message */}
          {successMsg && (
            <p
              style={{
                marginTop: "20px",
                textAlign: "center",
                color: "green",
                fontWeight: "600",
                fontSize: "16px",
              }}
            >
              {successMsg}
            </p>
          )}
        </section>
      </div>

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

          .contact-container {
            font-family: Arial, sans-serif;
            color: #333;
            padding-top: 130px;
            margin-bottom: 50px;
          }
          @media (max-width: 1024px) {
            .contact-container {
              padding-top: 5px;
            }
          }
        `}
      </style>
    </>
  );
};

export default Contact;
