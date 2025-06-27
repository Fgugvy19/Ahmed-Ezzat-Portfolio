// src/components/Contact.jsx
import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      style={{
        padding: "10rem 2rem 8rem",
        background: "#0f0f0f",
        textAlign: "center",
        color: "#fff",
      }}
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          marginBottom: "4rem",
        }}
      >
        Let's Connect!
      </motion.h2>

      {/* Container for Form + Info */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "3rem",
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            flex: "1 1 400px",
            backgroundColor: "#1a1a1a",
            borderRadius: "16px",
            boxShadow: "0 0 20px rgba(0, 123, 255, 0.2)",
            padding: "2rem",
          }}
        >
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
            }}
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              style={{
                padding: "14px",
                width: "100%",
                border: "1px solid #333",
                background: "#222",
                color: "#fff",
                borderRadius: "10px",
                fontSize: "1rem",
              }}
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              style={{
                padding: "14px",
                width: "100%",
                border: "1px solid #333",
                background: "#222",
                color: "#fff",
                borderRadius: "10px",
                fontSize: "1rem",
              }}
            />
            <textarea
              placeholder="Your Message"
              rows="11"
              required
              style={{
                padding: "14px",
                width: "100%",
                border: "1px solid #333",
                background: "#222",
                color: "#fff",
                borderRadius: "10px",
                fontSize: "1rem",
              }}
            ></textarea>
            <motion.button
              whileHover={{ backgroundColor: "#0056b3" }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              style={{
                padding: "14px",
                background: "#007BFF",
                color: "#fff",
                border: "none",
                borderRadius: "30px",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "1rem",
                transition: "background-color 0.3s ease",
              }}
            >
              Send Message 💬
            </motion.button>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            flex: "1 1 400px",
            backgroundColor: "#1a1a1a",
            borderRadius: "16px",
            boxShadow: "0 0 20px rgba(0, 123, 255, 0.2)",
            padding: "2rem",
            textAlign: "left",
          }}
        >
          <h3 style={{ fontSize: "1.5rem", marginBottom: "1.5rem" }}>
            👋 Say Hi!
          </h3>
          <p style={{ marginBottom: "1rem" }}>
            I'm always excited to connect with other developers, collaborators,
            or potential clients.
          </p>
          <p style={{ marginBottom: "1rem" }}>Feel free to reach out about:</p>
          <ul
            style={{
              listStyle: "inside",
              paddingLeft: "1rem",
              marginBottom: "1.5rem",
            }}
          >
            <li>💡 Project ideas</li>
            <li>🤝 Collaboration</li>
            <li>🎓 Learning together</li>
            <li>🎮 Or just to say hi!</li>
          </ul>

          <h4 style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>
            My Links:
          </h4>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
          >
            <a
              href="mailto:ae9122948@gmail.com"
              style={{ color: "#007BFF", textDecoration: "none" }}
            >
              📧 ae9122948@gmail.com
            </a>
            <a href="#" style={{ color: "#007BFF", textDecoration: "none" }}>
              📞 +20 155 725 6952
            </a>
            <a
              href="https://linkedin.com/in/ahmed-ezzat-7932b3242 "
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#007BFF", textDecoration: "none" }}
            >
              👥 linkedin.com/in/ahmed-ezzat-7932b3242
            </a>
            <a
              href="https://github.com/fgugvy19 "
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#007BFF", textDecoration: "none" }}
            >
              💼 github.com/fgugvy19
            </a>
          </div>

          {/* Fun Fact */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            style={{
              marginTop: "2rem",
              fontSize: "0.95rem",
              color: "#aaa",
            }}
          >
            🎮 Fun fact: I play football like it's my second job. Chess too —
            but not as pro 😉
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
