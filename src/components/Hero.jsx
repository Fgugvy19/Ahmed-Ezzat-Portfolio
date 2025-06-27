// src/components/Hero.jsx
import { motion } from "framer-motion";
import React, { useState } from "react";

const Hero = () => {
  const [guessColor, setGuessColor] = useState("");
  const [colorMessage, setColorMessage] = useState("");

  const handleColorGuess = (color) => {
    if (color === "#007BFF") {
      setColorMessage("🎉 Correct! #007BFF is my favorite!");
    } else {
      setColorMessage("❌ Try again!");
    }
  };

  const [guessTech, setGuessTech] = useState("");
  const [techMessage, setTechMessage] = useState("");

  const handleTechGuess = (tech) => {
    if (tech === "React.js") {
      setTechMessage("🧠 Yep! I'm learning React.js right now.");
    } else {
      setTechMessage("🚫 Nope! Try again.");
    }
  };

  return (
    <section
      style={{
        height: "100vh",
        background: "linear-gradient(to bottom, #020202, rgb(30, 31, 87))",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "#fff",
        padding: "2rem",
        flexDirection: "column",
      }}
    >
      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          maxWidth: "1000px",
          margin: "auto",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "2rem",
          alignItems: "center",
        }}
      >
        {/* Left Side - Image & Bio */}
        <div style={{ flex: "1 1 300px", textAlign: "left" }}>
          <motion.img
            src="/public/wqccj_WhatsApp Image 2025-06-20 at 5.29.59 PM.jpeg"
            alt="Ahmed Ezzat"
            style={{
              width: "250px",
              height: "270px",
              borderRadius: "20%",
              objectFit: "cover",
              border: "4px solid #007BFF",
              marginBottom: "1rem",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          />

          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              marginBottom: "0.5rem",
            }}
          >
            Ahmed Ezzat
          </h1>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#ccc",
              marginBottom: "1rem",
            }}
          >
            Front-End Developer | Web Designer | React Enthusiast
          </p>
          <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
            I build responsive, modern websites with a focus on performance and
            user experience. Currently pursuing a degree in Computer Science and
            building projects using HTML, CSS, JavaScript, and React.
          </p>

          {/* Buttons */}
          <div
            style={{
              marginTop: "2rem",
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            <motion.a
              href="#about"
              className="btn"
              style={{
                display: "inline-block",
                padding: "12px 24px",
                background: "#007BFF",
                color: "#fff",
                borderRadius: "30px",
                fontWeight: "bold",
                textDecoration: "none",
              }}
              whileHover={{ backgroundColor: "#0056b3" }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More About Me
            </motion.a>

            <motion.a
              href="/resume.pdf"
              download
              style={{
                display: "inline-block",
                padding: "12px 24px",
                border: "2px solid #007BFF",
                color: "#fff",
                borderRadius: "30px",
                textDecoration: "none",
                fontWeight: "bold",
              }}
              whileHover={{
                backgroundColor: "rgba(0, 123, 255, 0.1)",
                borderColor: "#0056b3",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Download My Resume
            </motion.a>
          </div>
        </div>

        {/* Right Side - Mini Games */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          style={{
            flex: "1 1 300px",
            background: "#1a1a1a",
            padding: "2rem",
            borderRadius: "12px",
            boxShadow: "0 0 100px rgba(0, 123, 255, 0.3)",
            textAlign: "center",
          }}
        >
          {/* Game 1: Color Guesser */}
          <div style={{ marginBottom: "2rem" }}>
            <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
              🎯 Quick Fact Game!
            </h2>
            <p style={{ marginBottom: "1rem" }}>
              Can you guess my favorite color?
            </p>

            <div
              style={{
                display: "flex",
                gap: "1rem",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              {["#007BFF", "#FF5733", "#4CAF50", "#9C27B0"].map(
                (color, index) => (
                  <motion.button
                    key={index}
                    onClick={() => handleColorGuess(color)}
                    style={{
                      width: "60px",
                      height: "60px",
                      backgroundColor: color,
                      border: "none",
                      borderRadius: "10px",
                      cursor: "pointer",
                      boxShadow: "0 4px 8px rgba(0,0,0,0.4)",
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  />
                )
              )}
            </div>

            {colorMessage && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{ marginTop: "1rem", fontSize: "1.1rem", color: "#fff" }}
              >
                {colorMessage}
              </motion.p>
            )}

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              style={{ marginTop: "1rem", fontSize: "0.9rem", color: "#aaa" }}
            >
              Hint: It's the same as this button 👆
            </motion.p>
          </div>

          {/* Game 2: Tech Stack Quiz */}
          <div>
            <h2
              style={{
                fontSize: "1.5rem",
                marginBottom: "1rem",
                marginTop: "3rem",
              }}
            >
              💻 What Am I Learning?
            </h2>
            <p style={{ marginBottom: "1rem" }}>
              Which tech am I currently learning?
            </p>

            <div
              style={{
                display: "flex",
                gap: "5px",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              {["HTML5", "CSS3", "JavaScript", "React.js"].map(
                (tech, index) => (
                  <motion.button
                    key={index}
                    onClick={() => handleTechGuess(tech)}
                    style={{
                      padding: "10px 16px",
                      background: "#222",
                      color: "#007BFF",
                      border: "2px solid #007BFF",
                      borderRadius: "20px",
                      cursor: "pointer",
                      fontSize: "1rem",
                      transition: "all 0.3s ease",
                    }}
                    whileHover={{ backgroundColor: "#333" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {tech}
                  </motion.button>
                )
              )}
            </div>

            {techMessage && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{ marginTop: "1rem", fontSize: "1.1rem", color: "#fff" }}
              >
                {techMessage}
              </motion.p>
            )}

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              style={{ marginTop: "1rem", fontSize: "0.9rem", color: "#aaa" }}
            >
              Hint: It's not HTML/CSS/JS... yet 😉
            </motion.p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
