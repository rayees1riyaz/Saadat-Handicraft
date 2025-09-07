import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const slides = ["./images/banner1.jpg", "./images/banner2.jpg", "./images/banner3.jpg"];
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  return (
    <>
      <style>
        {`
          .hero-title {
            position: absolute;
            top: 200px;
            left: 80px;
            font-family: Georgia, serif;
            font-size: 2.5rem;
            font-weight: 700;
            color: #fff;
            text-transform: uppercase;
            text-shadow: 2px 2px 8px rgba(0,0,0,0.6);
            z-index: 2;
            margin: 0;
            opacity: 0;
            transform: translateY(30px);
            animation: fadeSlideIn 1s ease forwards;
          }

          .overlay {
            position: absolute;
            inset: 0;
            background-color: rgba(0,0,0,0.4);
            z-index: 1;
          }

          @keyframes fadeSlideIn {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @media (max-width: 768px) {
            .hero-title {
              top: 130px;
              left: 20px;
              font-size: 1.5rem;
            }
          }
        `}
      </style>

      <section style={{ width: "100%", position: "relative", margin: 0, padding: 0 }}>
        <Slider {...settings}>
          {slides.map((src, i) => (
            <div key={i} style={{ position: "relative", height: "80vh" }}>
              <div
                style={{
                  backgroundImage: `url(${src})`,
                  height: "80vh",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "100%",
                  position: "relative",
                }}
              >
                <div className="overlay"></div>
                {/* Trigger animation only for the current slide */}
                <h1
                  className="hero-title"
                  style={{
                    animation: currentSlide === i ? "fadeSlideIn 1s ease forwards" : "none",
                  }}
                >
                  Saadat Handicraft
                </h1>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </>
  );
};

export default Hero;
