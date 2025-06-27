// src/components/Header.jsx
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header
      style={{
        padding: "1rem 2rem",
        backgroundColor: "#000", // Dark background for contrast
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontFamily: "''Franklin Gothic Medium', 'Arial Narrow', sans-serif",
        color: "#fff",
      }}
    >
      {/* Logo / Ahmed Ezzat - Move 20px more to the right */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          fontSize: "1.7rem",
          fontWeight: "600",
          color: "#fff", // Blue name for pop
          flex: "1 1 auto",
          textAlign: "center",
          paddingRight: "20px", // Moved 20px more to the right
        }}
      >
        Ahmed Ezzat
      </motion.div>

      {/* Navigation Links - Move 20px more to the left */}
      <nav
        style={{
          flex: "1 1 auto",
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          paddingLeft: "20px", // Moved 20px more to the left
          fontSize: "1rem",
        }}
      >
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          style={{
            textDecoration: "none",
            color: "#fff",
            fontWeight: "500",
            transition: "color 0.3s ease",
            padding: "0.5rem 1rem",
            borderRadius: "20px",
          }}
          onMouseEnter={(e) =>
            (e.target.style.backgroundColor = "rgba(255, 255, 255, 0.1)")
          }
          onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
        >
          About
        </Link>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          style={{
            textDecoration: "none",
            color: "#fff",
            fontWeight: "500",
            transition: "color 0.3s ease",
            padding: "0.5rem 1rem",
            borderRadius: "20px",
          }}
          onMouseEnter={(e) =>
            (e.target.style.backgroundColor = "rgba(255, 255, 255, 0.1)")
          }
          onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
        >
          Projects
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          style={{
            textDecoration: "none",
            color: "#fff",
            fontWeight: "500",
            transition: "color 0.3s ease",
            padding: "0.5rem 1rem",
            borderRadius: "20px",
          }}
          onMouseEnter={(e) =>
            (e.target.style.backgroundColor = "rgba(255, 255, 255, 0.1)")
          }
          onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
