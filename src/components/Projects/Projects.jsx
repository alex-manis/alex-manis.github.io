import { useState } from "react";
import { motion } from "framer-motion";
import Modal from "../Modal/Modal";
import { PROJECTS, MODAL_TRANSITION_DURATION, DEFAULT_VIEWPORT } from "../../constants";
import "./Projects.css";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), MODAL_TRANSITION_DURATION);
  };

  return (
    <section id="projects" className="section projects">
      <h3 className="section__title">Projects</h3>

      <div className="projects__grid">
        {PROJECTS.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={DEFAULT_VIEWPORT}
            transition={{ duration: 0.4 }}
            className="projects__card"
          >
            <div
              className="projects__image-wrapper"
              onClick={() => handleProjectClick(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="projects__image"
              />
            </div>
            <div className="projects__content">
              <h4 className="projects__title-card">{project.title}</h4>
              <p className="projects__description">{project.description}</p>
              <div className="projects__links">
                <a
                  href={project.liveUrl}
                  className="projects__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  className="projects__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </section>
  );
}
