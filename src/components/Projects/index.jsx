import { motion } from 'framer-motion'
import './Projects.css'

const projects = [
  { id: 1, title: 'Project 1', description: 'Short 1‑line description of the project.', liveUrl: '#', githubUrl: '#' },
  { id: 2, title: 'Project 2', description: 'Short 1‑line description of the project.', liveUrl: '#', githubUrl: '#' },
  { id: 3, title: 'Project 3', description: 'Short 1‑line description of the project.', liveUrl: '#', githubUrl: '#' },
]

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h3 className="projects-title">Projects</h3>

      <div className="projects-grid">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="project-card group"
          >
            <div className="project-image-wrapper">
              <img
                src={`https://picsum.photos/seed/${project.id}/800/500`}
                alt={project.title}
                className="project-image"
              />
            </div>
            <div className="project-content">
              <h4 className="project-title">{project.title}</h4>
              <p className="project-description">{project.description}</p>
              <div className="project-links">
                <a 
                  href={project.liveUrl} 
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
                <a 
                  href={project.githubUrl} 
                  className="project-link"
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
    </section>
  )
}

