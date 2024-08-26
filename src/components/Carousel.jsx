"use client";
import React, { useRef, useEffect } from "react";

const Carousels = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play();
    }
  }, []);

  const containerStyle = {
    position: "relative",
    width: "100%",
    height: "100vh",
    overflow: "hidden",
    backgroundColor: "black",
    borderRadius: "20px",
    background: `
      radial-gradient(circle at center, rgba(255, 215, 0, 0.4), rgba(0, 0, 0, 0) 70%), /* Yellow spotlight effect */
      black`, // Fallback background color
  };

  const videoContainerStyle = {
    position: "relative",
    width: "100%",
    height: "100%",
    overflow: "hidden",
    boxShadow: `0 0 50px rgba(255, 215, 0, 0.8)`, // Enhanced yellow shadow around the video
  };

  const videoStyles = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    filter: "brightness(1.1) contrast(1.2)",
    imageRendering: "crisp-edges",
    borderRadius: "20px",
  };

  const overlayStyle = {
    position: "absolute",
    inset: 0,
    backgroundColor: "rgba(0,0,0,0.6)",
    borderRadius: "20px",
  };

  const textContainerStyle = {
    position: "absolute",
    inset: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    zIndex: 1,
    color: "white",
  };

  const topTextStyle = {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#FFD700", // Matte yellow color
    fontFamily: "'Arial', sans-serif",
    textTransform: "uppercase",
    position: "absolute",
    top: "5%", // Adjust position as needed
    width: "80%",
    zIndex: 2,
  };

  const bigTextStyle = {
    fontSize: "12rem",
    fontWeight: "900",
    fontFamily: "'Roboto Condensed', sans-serif",
    textTransform: "uppercase",
    lineHeight: "1",
    letterSpacing: "0.1em",
    color: "#FFD700", // Matte yellow color
    textShadow: `
      0 0 10px rgba(255, 215, 0, 0.8), /* Yellow flow shadow */
      0 0 20px rgba(255, 215, 0, 0.6),
      0 0 30px rgba(255, 215, 0, 0.4)`,
    position: "absolute",
    top: "15%", // Adjust position as needed
  };

  const subheadingStyle = {
    marginBottom: "1.25rem",
    fontSize: "3rem",
    fontWeight: "bold",
    color: "#FFA500",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
    zIndex: 2,
    fontFamily: "'Roboto', sans-serif",
    textTransform: "uppercase",
    position: "absolute",
    bottom: "15%", // Adjust position as needed
    width: "80%",
  };

  const circleContainerStyle = {
    position: "absolute",
    bottom: "10%",
    left: "10%",
    display: "flex",
    alignItems: "center",
  };

  const circleStyle = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    backgroundColor: "#FFD700", // Yellow color
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 0 10px rgba(255, 215, 0, 0.8)", // Flow shadow effect
    marginRight: "-15px", // Adjust to overlap with message box
    zIndex: 2,
  };

  const messageBoxStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    backgroundColor: "#FFD700", // Yellow color
    padding: "10px 20px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(255, 215, 0, 0.8)", // Flow shadow effect
    zIndex: 1,
  };

  return (
    <div style={containerStyle}>
      <div style={videoContainerStyle}>
        <video
          ref={videoRef}
          src="videos/181537-866999852_small.mp4"
          style={videoStyles}
          muted
          loop
          autoPlay
          playsInline
        />
        <div style={overlayStyle}></div>
      </div>
      <div style={textContainerStyle}>
        <div style={topTextStyle}>Your Dream Car Awaits</div>
        <h1 style={bigTextStyle}>BMW</h1>
        <h3 style={subheadingStyle}>Drive your dream car today</h3>
        <p style={{ fontSize: "1.25rem", width: "80%", zIndex: 2 }}>
          Rent with ease
        </p>
      </div>
      <div style={circleContainerStyle}>
        <div style={circleStyle}>
          <div style={messageBoxStyle}>News Car</div>
        </div>
      </div>
    </div>
  );
};

export default Carousels;

