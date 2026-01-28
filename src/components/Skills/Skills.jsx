import { motion } from "framer-motion";
import { Code2, Server, Wrench, Lightbulb } from "lucide-react";
import { SKILLS_DATA, DEFAULT_VIEWPORT } from "../../constants";
import "./Skills.css";

const SKILLS_ICONS = {
  Frontend: <Code2 size={20} />,
  Backend: <Server size={20} />,
  "Tools & DevOps": <Wrench size={20} />,
  Other: <Lightbulb size={20} />,
};

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <h3 className="section__title">Skills</h3>

      <div className="skills__grid">
        {Object.entries(SKILLS_DATA).map(([category, data], categoryIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={DEFAULT_VIEWPORT}
            transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
            className="skills__category"
          >
            <div className="skills__category-header">
              <h4 className="skills__category-title">{category}</h4>
              <div className="skills__category-icon">{SKILLS_ICONS[category]}</div>
            </div>
            <ul className="skills__list">
              {data.skills.map((skill, index) => (
                <motion.li
                  key={skill}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={DEFAULT_VIEWPORT}
                  transition={{ duration: 0.3, delay: categoryIndex * 0.1 + index * 0.05 }}
                  className="skills__item"
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
