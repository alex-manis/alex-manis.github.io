import { motion } from "framer-motion";
import { Briefcase, FolderGit2 } from "lucide-react";
import { PERSONAL_INFO, FADE_IN_LEFT, FADE_IN_RIGHT, DEFAULT_VIEWPORT } from "../../constants";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="section about">
      <h3 className="section__title">About Me</h3>

      <div className="about__container">
        <motion.div
          initial={FADE_IN_LEFT.initial}
          whileInView={FADE_IN_LEFT.animate}
          viewport={DEFAULT_VIEWPORT}
          transition={{ duration: 0.6 }}
          className="about__image-wrapper"
        >
          <img
            src={PERSONAL_INFO.photo}
            alt={PERSONAL_INFO.name}
            className="about__image"
          />
        </motion.div>

        <motion.div
          initial={FADE_IN_RIGHT.initial}
          whileInView={FADE_IN_RIGHT.animate}
          viewport={DEFAULT_VIEWPORT}
          transition={{ duration: 0.6 }}
          className="about__content"
        >
          <h4 className="about__subtitle">{PERSONAL_INFO.title}</h4>
          <p className="about__description">{PERSONAL_INFO.about}</p>

          <div className="about__stats">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={DEFAULT_VIEWPORT}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="about__stat"
            >
              <div className="about__stat-icon">
                <Briefcase size={32} />
              </div>
              <div className="about__stat-content">
                <p className="about__stat-number">{PERSONAL_INFO.experience}</p>
                <p className="about__stat-label">Years of Experience</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={DEFAULT_VIEWPORT}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="about__stat"
            >
              <div className="about__stat-icon">
                <FolderGit2 size={32} />
              </div>
              <div className="about__stat-content">
                <p className="about__stat-number">{PERSONAL_INFO.projectsCompleted}</p>
                <p className="about__stat-label">Projects Completed</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
