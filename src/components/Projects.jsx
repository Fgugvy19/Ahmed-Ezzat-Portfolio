// src/components/Projects.jsx
import { motion } from "framer-motion";
import React, { useState } from "react";

const projects = [
  {
    title: "Leon & Kasper Landing Pages",
    image: "/src/assets/Pasted image (3).png",
    description:
      "Pixel-perfect landing pages with animation and responsiveness.",
    link: "https://github.com/Fgugvy19/kasper-service-template",
    techUsed: ["React", "Framer Motion", "CSS"],
  },
  {
    title: "W3Schools Learning Clone",
    image: "/src/assets/Pasted image.png",
    description:
      "Educational pages demonstrating key HTML and CSS concepts like color theory, multimedia, Canvas, SVG.",
    link: "https://github.com/Fgugvy19/W3school-simulation",
    techUsed: ["HTML", "CSS", "Responsive Design"],
  },
  {
    title: "3D Museum Website",
    image: "/src/assets/Pasted image (2).png",
    description: "A virtual museum website with immersive 3D features.",
    link: "https://github.com/Fgugvy19/3D-virtual-Musuem ",
    techUsed: ["HTML", "CSS", "JavaScript", "Three.js"],
  },
];

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section
      id="projects"
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
        My Projects
      </motion.h2>

      {/* Project Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "2rem",
          maxWidth: "1200px",
          margin: "auto",
          justifyContent: "center",
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{
              background: "#1a1a1a",
              border: "1px solid #333",
              borderRadius: "30px", // Increased rounding
              overflow: "hidden",
              boxShadow:
                hoveredIndex === index
                  ? "0 0 30px rgba(0, 123, 255, 0.7)"
                  : "0 0 20px rgba(0, 123, 255, 0.1)",
              cursor: "pointer",
              transition: "all 0.4s ease",
              transform:
                hoveredIndex === index ? "translateY(-10px)" : "translateY(0)",
              position: "relative",
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Image Container */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{
                overflow: "hidden",
                height: "200px",
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.3s ease",
                }}
              />
            </motion.div>

            {/* Project Info */}
            <div style={{ padding: "2rem" }}>
              <h3
                style={{
                  fontSize: "1.3rem",
                  fontWeight: "bold",
                  marginBottom: "0.5rem",
                }}
              >
                {project.title}
              </h3>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "#ccc",
                  marginBottom: "1.5rem",
                }}
              >
                {project.description}
              </p>

              {/* Tech Stack Tags */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                  marginBottom: "1.5rem",
                }}
              >
                {project.techUsed.map((tech, idx) => (
                  <motion.span
                    key={idx}
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "#007BFF",
                      color: "#fff",
                    }}
                    style={{
                      padding: "6px 14px",
                      background: "#222",
                      color: "#007BFF",
                      borderRadius: "50px", // Fully rounded tags
                      fontSize: "0.85rem",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              {/* GitHub Button */}
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  padding: "10px 20px",
                  background: "#007BFF",
                  color: "#fff",
                  borderRadius: "40px", // Fully rounded button
                  textDecoration: "none",
                  fontWeight: "bold",
                  fontSize: "0.9rem",
                }}
                whileHover={{ backgroundColor: "#0056b3" }}
                whileTap={{ scale: 0.95 }}
              >
                View on GitHub →
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
