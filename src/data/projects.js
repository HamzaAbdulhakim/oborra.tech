import HIU_logo from "../assets/HIU.png";
import lightMode_PortFolio_logo from "../assets/lightMode_oborraPortfolio.png";
import darkMode_portfolio_logo from "../assets/DarkMode_oborraPortfolio.png";
const projects = [
  {
    id: 1,
    title: "Dar Al-ulum Harari Islamic University",
    category: "React",
    year: "2026",
    featured: true,

    shortDescription:
      "A modern university website designed to present academic programs, admission information, faculties, student services and campus news.",

    fullDescription:
      "This project is a complete university management and information website built using React. It focuses on responsive design, reusable components, accessibility, and a modern user experience.",

    technologies: [
      "React",
      "JavaScript",
      "CSS",
      "Vite",
    ],

    github: "#",
    demo: "#",

    LightMode_image:  HIU_logo,
    DarkMode_image: HIU_logo,
  },

  {
    id: 2,
    title: "The Harargee-GSA",
    category: "React",
    year: "2026",
    featured: true,

    shortDescription:
      "A professional website introducing the council, scholars, educational resources, articles and announcements.",

    fullDescription:
      "The platform preserves and shares Islamic knowledge through a modern responsive web application with clean navigation and organized content.",

    technologies: [
      "React",
      "JavaScript",
      "CSS",
    ],

    github: "#",
    demo: "#",

    LightMode_image: "#",
  },

  {
    id: 3,
    title: "Personal Portfolio",
    category: "React",
    year: "2026",
    featured: true,

    shortDescription:
      "A modern personal portfolio featuring animations, dark mode, responsive layouts and reusable React components.",

    fullDescription:
      "Developed to showcase my background, education, projects and technical skills while applying modern frontend development principles.",

    technologies: [
      "React",
      "CSS",
      "Framer Motion",
      "JavaScript",
    ],

    github: "#",
    demo: "http://localhost:5173/",

    LightMode_image: lightMode_PortFolio_logo,
    DarkMode_image: darkMode_portfolio_logo,
  },

  {
    id: 4,
    title: "Online Marketh Management",
    category: "Java",
    year: "2025",

    featured: false,

    shortDescription:
      "Effective and professional application for managing students, attendance and academic records.",

    fullDescription:
      "Built using Java and Object-Oriented Programming concepts to strengthen backend and software engineering knowledge.",

    technologies: [
      "Java",
      "OOP",
    ],

    github: "#",
    demo: "#",

    LightMode_image: "/images/projects/student.jpg",
  },
];

export default projects;