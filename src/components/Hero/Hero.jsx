import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { useScrollToSection } from "../../hooks";
import { PERSONAL_INFO } from "../../constants";
import "./Hero.css";

export default function Hero() {
  const { scrollToSection } = useScrollToSection();

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      toast.success("Email copied to clipboard!", {
        duration: 3000,
        position: "bottom-center",
      });
    } catch (error) {
      toast.error("Failed to copy email", {
        duration: 3000,
        position: "bottom-center",
      });
    }
  };

  return (
    <section id="hero" className="hero">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="hero__title"
      >
        Hi, I'm <span className="hero__title-accent">{PERSONAL_INFO.name}</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="hero__description"
      >
        {PERSONAL_INFO.tagline} {PERSONAL_INFO.description}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="hero__buttons"
      >
        <button
          className="hero__btn hero__btn--primary"
          onClick={() => scrollToSection("projects")}
        >
          View My Work
        </button>
        <button className="hero__btn hero__btn--secondary" onClick={handleCopyEmail}>
          Get in Touch
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="hero__scroll-hint"
        onClick={() => scrollToSection("about")}
      >
        <span>Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="hero__scroll-arrow"
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
}
