import { motion } from "framer-motion";
import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "News Explorer",
    description:
      "The News Explorer is a web-based app that allows users to search for news articles, save their favorites, and manage their account. The app features user authentication, interactive UI, and responsive design.",
    liveUrl: "https://alex-manis.github.io/news_frontend/",
    githubUrl: "https://github.com/alex-manis/news_frontend",
    image: "news_explorer.jpg",
  },
  {
    id: 2,
    title: "W2WR",
    description:
      "The idea of the application is pretty simple - we make a call to an API, which then responds with the daily weather forecast. We collect the weather data, process it, and then based on the forecast, we recommend suitable clothing to the user.",
    liveUrl: "https://what2wear.undo.it/",
    githubUrl: "https://github.com/alex-manis/se_project_react",
    image: "w2wr.jpg",
  },
  {
    id: 3,
    title: "JSON config tool",
    description:
      "A web-based GUI for managing JSON configuration files. This tool simplifies the process of creating, editing, and deleting configurations, which are stored as JSON files. It provides a user-friendly interface to prevent manual errors when editing complex JSON data.",
    liveUrl: "https://alex-manis.github.io/ddive_config_tool/",
    githubUrl: "https://github.com/alex-manis/ddive_config_tool",
    image: "config_tool.jpg",
  },
  {
    id: 4,
    title: "Around The U.S.",
    description:
      "The App is storage for travellers who wants to save and show their most beautiful photos of fantastical locations. The app is developed on vanilla JS.",
    liveUrl: "https://alex-manis.github.io/se_project_aroundtheus",
    githubUrl: "https://github.com/alex-manis/se_project_aroundtheus",
    image: "around_the_us.jpg",
  },
];

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
                src={`../../src/assets/${project.image}`}
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
  );
}
