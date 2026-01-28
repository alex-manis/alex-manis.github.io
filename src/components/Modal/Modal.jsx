import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { MODAL_TRANSITION_DURATION } from "../../constants";
import "./Modal.css";

const TRANSITION_DURATION_SECONDS = MODAL_TRANSITION_DURATION / 1000;

export default function Modal({ isOpen, onClose, project }) {
  if (!project) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="modal"
          onClick={handleOverlayClick}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: TRANSITION_DURATION_SECONDS }}
            className="modal__content"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={onClose} 
              className="modal__close"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            <div className="modal__image-wrapper">
              <img 
                src={project.image} 
                alt={project.title} 
                className="modal__image"
              />
            </div>

            <div className="modal__body">
              <h3 className="modal__title">{project.title}</h3>

              {project.about && (
                <div className="modal__section">
                  <h4 className="modal__section-title">About</h4>
                  <p className="modal__section-text">{project.about}</p>
                </div>
              )}

              {project.features && project.features.length > 0 && (
                <div className="modal__section">
                  <h4 className="modal__section-title">Key Features</h4>
                  <ul className="modal__features-list">
                    {project.features.map((feature, index) => (
                      <li key={index} className="modal__feature-item">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.technologies && project.technologies.length > 0 && (
                <div className="modal__section">
                  <h4 className="modal__section-title">Technologies</h4>
                  <div className="modal__technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="modal__tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="modal__actions">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal__button modal__button--github"
                  >
                    GitHub
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal__button modal__button--live"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
