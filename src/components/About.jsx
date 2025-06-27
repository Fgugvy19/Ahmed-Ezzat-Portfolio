// src/components/About.jsx
import { motion } from "framer-motion";
import React, { useState } from "react";

const About = () => {
  const [message, setMessage] = useState("");

  const handleSkillClick = (skill) => {
    if (skill === "HTML") {
      setMessage("🎉 Correct! HTML is my foundation.");
    } else if (skill === "CSS") {
      setMessage("🧠 CSS powers all my designs!");
    } else if (skill === "JavaScript") {
      setMessage("⚡ JavaScript makes everything work!");
    } else if (skill === "React.js") {
      setMessage("💡 Yep! I'm learning React right now.");
    } else {
      setMessage("❌ Not quite. Try again!");
    }
  };

  return (
    <section
      id="about"
      style={{
        padding: "8rem 2rem 6rem",
        background: "#0f0f0f",
        color: "#fff",
        textAlign: "center",
      }}
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          marginBottom: "4rem",
        }}
      >
        About Me
      </motion.h2>

      {/* Bio Text */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
        style={{
          maxWidth: "800px",
          margin: "auto",
          textAlign: "left",
          fontSize: "1rem",
          lineHeight: "1.6",
          padding: "0 1rem",
        }}
      >
        <p style={{ marginBottom: "1.5rem" }}>
          👋 Hello! I'm Ahmed Ezzat — a passionate front-end developer based in
          Egypt. I specialize in creating responsive, accessible, and
          user-friendly websites using:
        </p>

        {/* Skills Tags - Clickable + Animated */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            justifyContent: "left",
            marginBottom: "1.5rem",
          }}
        >
          {["HTML", "CSS", "JavaScript", "React.js", "Git", "GitHub"].map(
            (skill, index) => (
              <motion.button
                key={index}
                type="button"
                onClick={() => handleSkillClick(skill)}
                whileHover={{
                  scale: 1.1,
                  rotate: 2,
                  backgroundColor: "#007BFF",
                  color: "#fff",
                }}
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: "10px 16px",
                  background: "#222",
                  border: "2px solid #007BFF",
                  borderRadius: "50px",
                  color: "#007BFF",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {skill}
              </motion.button>
            )
          )}
        </div>

        <p style={{ marginBottom: "1.5rem" }}>
          🎓 Currently pursuing a Bachelor’s degree in Computer Science at
          Mansoura University. Always eager to learn new technologies and build
          impactful projects.
        </p>

        <p style={{ marginBottom: "1.5rem" }}>
          💼 Experience includes personal and team-based web development
          projects like:
        </p>

        {/* Project Highlights */}
        <ul
          style={{
            listStyle: "none",
            paddingLeft: 0,
            textAlign: "left",
          }}
        >
          <li>📚 Educational clones (W3Schools-style pages)</li>
          <li>🖼️ Pixel-perfect landing pages (Leon & Kasper clones)</li>
          <li>🌐 Immersive 3D museum simulation</li>
        </ul>

        <p style={{ marginTop: "1.5rem" }}>
          🧠 Quick learner | 🔍 Attention to detail | 🤝 Team player
        </p>
      </motion.div>

      {/* Mini Game Result */}
      {message && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            marginTop: "2rem",
            fontSize: "1.1rem",
            color: "#fff",
          }}
        >
          {message}
        </motion.p>
      )}

      {/* Mini Game Hint */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        style={{
          marginTop: "2rem",
          fontSize: "0.9rem",
          color: "#aaa",
        }}
      >
        🎯 Hint: My top skill starts with “H” 😉
      </motion.p>
    </section>
  );
};

export default About;
