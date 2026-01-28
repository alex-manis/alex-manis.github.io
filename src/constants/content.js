// ============================================
// 🎯 MAIN CONTENT FILE - Edit all content here
// ============================================

// Project images imports
import newsExplorerImg from "../assets/news_explorer.JPG";
import w2wrImg from "../assets/w2wr.JPG";
import configToolImg from "../assets/config_tool.JPG";
import aroundTheUsImg from "../assets/around_the_us.JPG";
import promptBoxImg from "../assets/prompt_box.JPG";
import coffeeShopImg from "../assets/coffee_shop.JPG";
import incidentTrackerImg from "../assets/incident_tracker.JPG";
import img2pdfImg from "../assets/img2pdf.JPG";

// ============================================
// 👤 PERSONAL INFORMATION
// ============================================

export const PERSONAL_INFO = {
  name: "Alex Manis",
  fullName: "Alex Manis",
  title: "Full Stack Developer",
  email: "alex.manis@outlook.com",
  photo: "https://avatars.githubusercontent.com/u/176806302?v=4",
  tagline: "Full Stack Developer who takes strong ownership from idea to production.",
  description: "Actively using AI tools to improve development speed, code quality, and decision-making. Comfortable working in cross-functional and international teams with a strong product-oriented mindset.",
  about: "I'm a Full Stack Developer who takes ownership of features from concept to production. I actively use AI tools as part of my development workflow for exploration, refactoring, testing ideas, and improving code quality while always validating decisions through hands-on implementation. My experience spans modern frontend frameworks, backend services, and real-world production workflows. I enjoy collaborating with designers, product managers, and engineers to turn complex problems into clear, reliable solutions.",
  experience: "2+",
  projectsCompleted: "15+",
  copyright: `© ${new Date().getFullYear()} Alex Manis — Full-Stack Developer`,
};

// ============================================
// 🔗 SOCIAL LINKS
// ============================================

export const SOCIAL_LINKS = {
  email: "alex.manis@outlook.com",
  linkedin: "https://www.linkedin.com/in/alex-manis/",
  github: "https://github.com/alex-manis",
};

// ============================================
// 💻 SKILLS
// ============================================

export const SKILLS_DATA = {
  Frontend: {
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Vue.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Redux",
      "Component architecture",
      "Responsive design",
      "Web performance optimization",
      "Design systems",
      "Figma",
            ],
  },
  Backend: {
    skills: [
      "Node.js",
      "Express.js",
      "REST API design",
      "Authentication & Authorization (JWT)",
      "Error handling",
      "Data modeling",
      "PostgreSQL",
      "MongoDB",
      "Mongoose",
      "SQL",
    ],
  },
  "Tools & DevOps": {
    skills: [
      "Git",
      "GitHub",
      "npm",
      "Vite",
      "Webpack",
      "Docker",
      "CI/CD",
      "Environment variables",
      "Build & deployment",
      "Google Cloud / AWS",
      "Postman",
       "Cursor",
      "AI-assisted development",
          ],
  },
  Other: {
    skills: [
      "Feature ownership",
      "End-to-end delivery",
      "Product mindset",
      "Technical decision making",
      "Cross-functional collaboration",
      "Agile / Scrum",
      "Problem solving",
      "Unit testing",
      "Integration testing",
      "Vitest / Jest",
      "E2E testing",
      "Code review",
      "Production support",
       
    ],
  },
};

// ============================================
// 🚀 PROJECTS
// ============================================

export const PROJECTS = [
  {
    id: 7,
    title: "Incident Tracker",
    description:
      "Full-stack incident management system built as a production-ready internal tool. I owned the architecture and end-to-end implementation, focusing on security, scalability, and maintainability.",
    about:
      "Incident Tracker is a full-stack application designed to manage operational incidents across teams. I owned the system end to end — from backend architecture and database design to frontend implementation and deployment. The project focuses on clean architecture, secure authentication, and real-world workflows such as role-based access control, audit logs, and incident lifecycle management.",
    features: [
      "JWT-based authentication and role-based access control (RBAC)",
      "End-to-end incident lifecycle management",
      "Audit logs and activity tracking",
      "Metrics and analytics dashboard",
      "PostgreSQL database with migrations",
      "Dockerized services and production deployment",
    ],
    technologies: [
      "TypeScript",
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "JWT",
      "Docker",
    ],
    liveUrl: "https://tracker.alexmanis.org",
    githubUrl: "https://github.com/alex-manis/incident_tracker_frontend",
    image: incidentTrackerImg,
  },

  {
    id: 5,
    title: "Prompt Box – AI Prompt Manager",
    description:
      "A lightweight, developer-focused prompt library for organizing and maintaining reusable AI prompts. Designed with productivity and clarity in mind.",
    about:
      "Prompt Box is a frontend-focused application for storing, organizing, and editing AI prompts. The project explores practical AI-era workflows by treating prompts as reusable, structured assets. I focused on clean UI, prompt organization, and a smooth editing experience, while leaving room for future AI integrations.",
    features: [
      "Prompt library with categories and search",
      "Reusable prompt templates",
      "Dynamic template variables",
      "Live preview while editing prompts",
      "Local storage–based persistence",
      "Copy-to-clipboard workflow",
    ],
    improvements: [
      "Integrate prompt testing using an AI API",
      "Add prompt versioning and history",
      "Support prompt evaluation notes and iterations",
    ],
    technologies: [
      "React",
      "JavaScript",
      "CSS3",
      "Local Storage",
    ],
    liveUrl: "https://alex-manis.github.io/prompt_box",
    githubUrl: "https://github.com/alex-manis/prompt-box",
    image: promptBoxImg,
  },

  {
    id: 2,
    title: "W2WR (What To Wear Right)",
    description:
      "Full-stack application that provides clothing recommendations based on real-time weather data and user preferences.",
    about:
      "W2WR is a full-stack web application that combines external weather data with user-managed wardrobes to generate clothing recommendations. I owned both frontend and backend development, focusing on data flow, authentication, and a clear, intuitive user experience.",
    features: [
      "Real-time weather API integration",
      "Rule-based clothing recommendations",
      "User authentication and profiles",
      "Wardrobe CRUD management",
      "Responsive and mobile-friendly UI",
    ],
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Weather API",
      "CSS3",
    ],
    liveUrl: "https://wtwr.alexmanis.org/",
    githubUrl: "https://github.com/alex-manis/se_project_react",
    image: w2wrImg,
  },

  {
    id: 1,
    title: "News Explorer",
    description:
      "Full-stack news search application with authentication and saved articles functionality.",
    about:
      "News Explorer is a full-stack application that allows users to search for news articles and save them to a personal collection. I implemented the authentication flow, protected routes, and backend integration, focusing on predictable data flow and error handling.",
    features: [
      "Keyword-based article search",
      "User registration and JWT authentication",
      "Saved articles with backend persistence",
      "Protected routes",
      "Pagination, loading, and error states",
      "Responsive layout",
    ],
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "News API",
      "CSS3",
    ],
    liveUrl: "https://alex-manis.github.io/news_frontend/",
    githubUrl: "https://github.com/alex-manis/news_frontend",
    image: newsExplorerImg,
  },

  {
    id: 3,
    title: "JSON Config Tool",
    description:
      "Web-based GUI for safely creating and managing JSON configuration files without manual editing.",
    about:
      "JSON Config Tool is a full-stack application that provides a visual interface for creating, editing, and validating JSON configuration files. The goal was to reduce human error when working with complex JSON structures by enforcing validation and structured editing.",
    features: [
      "Visual JSON editor interface",
      "Create, update, and delete configurations",
      "Schema-based validation and error prevention",
      "Real-time JSON structure preview",
      "Import and export of configuration files",
    ],
    technologies: [
      "React",
      "Node.js",
      "Express",
      "JSON",
      "CSS3",
    ],
    liveUrl: "https://alex-manis.github.io/config_tool_frontend",
    githubUrl: "https://github.com/alex-manis/config_tool_frontend",
    image: configToolImg,
  },

  {
    id: 8,
    title: "img2pdf",
    description:
      "Client-side web application for converting image files (JPG/PNG) into downloadable PDF documents.",
    about:
      "img2pdf is a frontend application that allows users to generate PDF files directly in the browser from image uploads. I focused on client-side processing, file handling, and a smooth drag-and-drop user experience.",
    features: [
      "Convert JPG and PNG images to PDF",
      "Multiple image support",
      "Drag-and-drop file upload",
      "Image preview before conversion",
      "Client-side PDF generation",
    ],
    technologies: [
      "React",
      "JavaScript",
      "pdf-lib",
      "CSS3",
    ],
    liveUrl: "https://alex-manis.github.io/img2pdf",
    githubUrl: "https://github.com/alex-manis/img2pdf",
    image: img2pdfImg,
  },

  {
    id: 4,
    title: "Around The U.S.",
    description:
      "Interactive photo-sharing application built with vanilla JavaScript.",
    about:
      "Around The U.S. is a frontend-focused project that demonstrates core JavaScript concepts, DOM manipulation, and modular architecture. The application allows users to manage a photo gallery with interactive UI elements.",
    features: [
      "Interactive photo gallery",
      "Add, delete, and like photos",
      "Modal dialogs and form validation",
      "Client-side data handling",
      "Responsive design",
    ],
    technologies: [
      "JavaScript",
      "HTML5",
      "CSS3",
      "BEM",
      "Webpack",
    ],
    liveUrl: "https://alex-manis.github.io/se_project_aroundtheus",
    githubUrl: "https://github.com/alex-manis/se_project_aroundtheus",
    image: aroundTheUsImg,
  },

  {
    id: 6,
    title: "Triple Peaks Coffee Shop",
    description:
      "Responsive static website showcasing a fictional coffee shop.",
    about:
      "Triple Peaks Coffee Shop is a clean, responsive landing page built with semantic HTML and modern CSS. The project demonstrates attention to layout, typography, and structured styling using the BEM methodology.",
    features: [
      "Semantic HTML structure",
      "Responsive layout",
      "Modern CSS styling",
      "BEM methodology",
    ],
    technologies: [
      "HTML5",
      "CSS3",
      "BEM",
    ],
    liveUrl: "https://alex-manis.github.io/se_project_coffeeshop/",
    githubUrl: "https://github.com/alex-manis/se_project_coffeeshop",
    image: coffeeShopImg,
  },
];

// ============================================
// 🎓 CERTIFICATES
// ============================================

export const CERTIFICATES = [
  {
    id: 1,
    title: "Full Stack Development",
    issuer: "TripleTen Israel",
    date: "2025",
    credentialUrl: "#",
  },
  {
    id: 2,
    title: "Agile Project Management",
    issuer: "Google",
    date: "July 2025",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/9YUI04EVSSWT",
  },
  {
    id: 3,
    title: "Generative AI: Prompt Engineering Basics",
    issuer: "IBM",
    date: "August 2025",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/TZAE7FA4NDTY",
  },
  {
    id: 4,
    title: "Agile with Atlassian Jira",
    issuer: "Atlassian ",
    date: "August 2025",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/Q6W17SZ8H81M",
  },
];
