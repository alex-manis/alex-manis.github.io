import { motion } from "framer-motion";
import "./Projects.css";
import newsExplorerImg from "../../assets/news_explorer.JPG";
import w2wrImg from "../../assets/w2wr.JPG";
import configToolImg from "../../assets/config_tool.JPG";
import aroundTheUsImg from "../../assets/around_the_us.JPG";
import promptBoxImg from "../../assets/prompt_box.JPG";
import coffeeShopImg from "../../assets/coffee_shop.JPG";
import incidentTrackerImg from "../../assets/incident_tracker.JPG";
import img2pdfImg from "../../assets/img2pdf.JPG";

const projects = [
  {
    id: 1,
    title: "News Explorer",
    description:
      "The News Explorer is a web-based app that allows users to search for news articles, save their favorites, and manage their account. The app features user authentication, interactive UI, and responsive design.",
    liveUrl: "https://alex-manis.github.io/news_frontend/",
    githubUrl: "https://github.com/alex-manis/news_frontend",
    image: newsExplorerImg, 
  },
  {
    id: 2,
    title: "W2WR",
    description:
      "The idea of the application is pretty simple - we make a call to an API, which then responds with the daily weather forecast. We collect the weather data, process it, and then based on the forecast, we recommend suitable clothing to the user.",
    liveUrl: "https://wtwr.alexmanis.org/",
    githubUrl: "https://github.com/alex-manis/se_project_react",
    image: w2wrImg, 
  },
  {
    id: 3,
    title: "JSON config tool",
    description:
      "A web-based GUI for managing JSON configuration files. This tool simplifies the process of creating, editing, and deleting configurations, which are stored as JSON files. It provides a user-friendly interface to prevent manual errors when editing complex JSON data.",
    liveUrl: "https://alex-manis.github.io/config_tool_frontend",
    githubUrl: "https://github.com/alex-manis/config_tool_frontend",
    image: configToolImg, 
  },
  {
    id: 4,
    title: "Around The U.S.",
    description:
      "The App is storage for travellers who wants to save and show their most beautiful photos of fantastical locations. The app is developed on vanilla JS.",
    liveUrl: "https://alex-manis.github.io/se_project_aroundtheus",
    githubUrl: "https://github.com/alex-manis/se_project_aroundtheus",
    image: aroundTheUsImg, 
  },
  {
    id: 5,
    title: "Prompt Box - AI Prompt Manager",
    description:
      "A lightweight AI prompt library for organizing, editing, and testing reusable prompts. Features dynamic template variables, live preview, and a clean, developer-friendly UI.",
    liveUrl: "https://alex-manis.github.io/prompt_box",
    githubUrl: "https://github.com/alex-manis/prompt-box",
    image: promptBoxImg, 
  },
  {
    id: 6,
    title: "Triple Peaks Coffee Shop",
    description:
      "The App is simple solution for the Coffee Shop. The app is developed on HTML and CSS.",
    liveUrl: "https://alex-manis.github.io/se_project_coffeeshop/",
    githubUrl: "https://github.com/alex-manis/se_project_coffeeshop",
    image: coffeeShopImg, 
  },
  {
    id: 7,
    title: "Incident Tracker",
    description:
      "Production-style full-stack application for managing and monitoring operational incidents. Built with TypeScript, React, Node.js, and PostgreSQL, featuring secure authentication, role-based access, incident lifecycle management, audit logs, and a metrics dashboard. Designed as a realistic internal tool with a focus on clean architecture, scalability, and maintainability.",
    liveUrl: "https://tracker.alexmanis.org",
    githubUrl: "hhttps://github.com/alex-manis/incident_tracker_frontend",
    image: incidentTrackerImg, 
  },
  {
    id: 8,
    title: "img2pdf",
    description:
      "Web application for converting images (JPG/PNG) to PDF file. The app is developed on React.",
    liveUrl: "https://alex-manis.github.io/img2pdf",
    githubUrl: "https://github.com/alex-manis/img2pdf",
    image: img2pdfImg, 
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
                src={project.image} 
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
