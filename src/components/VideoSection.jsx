import React, { useState, useRef, useEffect } from "react";
import { Play, Pause } from "lucide-react";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [visible, setVisible] = useState(false); // Track if in viewport
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current.paused || videoRef.current.ended) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
  };

  // Intersection Observer to detect when section scrolls into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target); // animate only once
          }
        });
      },
      { threshold: 0.3 } // 30% visible triggers animation
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="video-section"
      style={{
        position: "relative",
        margin: "80px auto",
        overflow: "hidden",
        borderRadius: "14px",
        maxWidth: "1500px",
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1)" : "scale(0.98)",
        transition: "opacity 1s ease, transform 1s ease",
      }}
    >
      <video
        ref={videoRef}
        src="./images/video-bg.mp4"
        style={{
          width: "100%",
          height: "auto",
          minHeight: "552px",
          display: "block",
          objectFit: "cover",
          borderRadius: "14px",
          opacity: visible ? 1 : 0,
          transform: visible ? "scale(1)" : "scale(1.02)",
          transition: "opacity 1s ease, transform 1s ease",
        }}
        preload="auto"
        onEnded={handleEnded}
      />

      {/* Bottom-left Play/Pause Button */}
      <button
        onClick={togglePlay}
        style={{
          position: "absolute",
          bottom: "20px",
          left: "20px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          backgroundColor: "rgba(0,0,0,0.5)",
          color: "#fff",
          padding: "10px 16px",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
          fontWeight: "600",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 1s ease, transform 1s ease",
        }}
      >
        {isPlaying ? <Pause size={24} /> : <Play size={24} />}
        Saadat Handicraft
      </button>
    </section>
  );
};

export default VideoSection;
