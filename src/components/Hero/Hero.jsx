import { motion } from "framer-motion";
import "./Hero.css";

export default function Hero() {
  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    projectsSection?.scrollIntoView({ behavior: "smooth" });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("alex.manis@outlook.com");
    alert("Email copied to clipboard!");
  };

  return (
    <section id="about" className="hero">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="hero-title"
      >
        Hi, I'm <span className="hero-title-accent">Alex Manis</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="hero-description"
      >
        Frontend Developer with a Full Stack knowledge and with hands-on
        experience in Javascript, React.js, Node.js, Express.js, MongoDB, CSS,
        HTML. I'm a team player with experience in cross-functional teams and
        international environments.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="hero-buttons"
      >
        <button className="btn btn-primary" onClick={handleScrollToProjects}>
          View My Work
        </button>
        <button className="btn btn-secondary" onClick={handleCopyEmail}>
          Get in Touch
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="hero-scroll-hint"
      >
        <span>Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="scroll-arrow"
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
}
