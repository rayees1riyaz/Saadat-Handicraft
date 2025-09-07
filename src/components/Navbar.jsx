import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X, ChevronRight } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const links = [
    { name: "HOME", to: "/" },
    { name: "ABOUT US", to: "/about" },
    { name: "GALLERY", to: "/gallery" },
    { name: "CRAFT HISTORY", to: "/history" },
    { name: "CONTACT US", to: "/contact" },
  ];

  const handleClick = (to) => {
    setOpen(false);
    setLoading(true);
    setFadeIn(false);

    window.scrollTo(0, 0);

    setTimeout(() => {
      navigate(to);
      setTimeout(() => {
        setLoading(false);
        setFadeIn(true);
      }, 500);
    }, 500);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
    setTimeout(() => setFadeIn(true), 200);
  }, [location]);

  return (
    <>
      {/* Loader Overlay */}
      {loading && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(255,255,255,0.9)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 2000,
          }}
        >
          <div
            style={{
              border: "6px solid #f3f3f3",
              borderTop: "6px solid #bfa04b",
              borderRadius: "50%",
              width: "50px",
              height: "50px",
              animation: "spin 1s linear infinite",
            }}
          ></div>
          <style>
            {`@keyframes spin {0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); }}`}
          </style>
        </div>
      )}

      {/* Navbar */}
      <header>
        <div className="navbar-container">
          <div className="nav-right">
            <h1
              className="desktop-only"
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "1.6rem",
                fontWeight: 700,
                color: "#0b3d91",
                textAlign: "center",
                letterSpacing: "2px",
                margin: "30px 0",
                textTransform: "uppercase",
                textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
              }}
            >
              Saadat Handicraft
            </h1>
            <div className="mobile-menu-button" onClick={() => setOpen(!open)}>
              <Menu size={28} />
            </div>
          </div>

          {/* Desktop Links (hidden in mobile with CSS) */}
          <nav className="nav-links">
            {links.map((link) => (
              <div key={link.name}>
                <span
                  onClick={() => handleClick(link.to)}
                  style={{
                    cursor: "pointer",
                    color: location.pathname === link.to ? "#bfa04b" : "#0b3d91",
                    textDecoration: "none",
                    fontWeight: 600,
                    fontSize: "1.1rem",
                    paddingBottom: "5px",
                    borderBottom:
                      location.pathname === link.to
                        ? "3px solid #bfa04b"
                        : "3px solid transparent",
                    transition: "border-bottom 0.3s, color 0.3s",
                  }}
                >
                  {link.name}
                </span>
              </div>
            ))}
          </nav>

          <img
            src="/logo.jpeg"
            alt="saadathandicraft"
            style={{ height: "60px" }}
          />
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu-overlay ${open ? "open" : ""}`}
        onClick={() => setOpen(false)}
      ></div>
      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <div className="mobile-menu-top">
          <img
            src="/logo.jpeg"
            alt="Saadat Handicraft"
            className="mobile-menu-logo-left"
          />
          <div className="mobile-menu-close" onClick={() => setOpen(false)}>
            <X size={28} />
          </div>
        </div>
        <div className="mobile-links">
          {links.map((link) => (
            <div key={link.name} style={{ marginBottom: "10px" }}>
              <span
                onClick={() => handleClick(link.to)}
                style={{
                  cursor: "pointer",
                  color:
                    location.pathname === link.to ? "#bfa04b" : "#333",
                  textDecoration: "none",
                  fontWeight: 500,
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "1.1rem",
                }}
              >
                <ChevronRight size={20} className="link-icon" />
                {link.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
