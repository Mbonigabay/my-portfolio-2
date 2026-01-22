import { createRouter, useBase } from "h3";

const router = createRouter();

const projects = [
  {
    link: "https://mbonigabayusuf.netlify.app",
    screenshot: "img/projects/port.jpg",
    name: "My portofolio",
    github: "https://github.com/Mbonigabay/modern-portofolio",
    status: "active",
    stack: ["Nuxt"],
    video: "videos/porto-demo.mp4",
    description: "A modern, responsive portfolio website built to showcase personal projects and skills. Features a clean UI and smooth transitions."
  },
  {
    link: "https://masjid-rw.netlify.app/",
    screenshot: "img/projects/masjid.png",
    name: "masjid.rw",
    github: "https://github.com/Mbonigabay/masjid",
    status: "active",
    stack: ["Nuxt", "Bootstrap"],
    video: "videos/masjid-demo.mp4",
    description: "A platform dedicated to local muslim community services, providing a digital presence for spiritual and social engagement."
  },
  {
    screenshot: "img/projects/kigali-talent.png",
    name: "kigali talent",
    github: "https://github.com/Mbonigabay/kigali-talent",
    status: "active",
    stack: ["NodeJS", "React"],
    video: "videos/kigali-talent-demo.mp4",
    dockerPath: "docker/kigali-talent.yml",
    description: "Kigali Talent is a scalable Node.js/React service for job boards. It features a layered architecture, JWT authentication with RBAC, and state machines for application tracking. Using SQLite and Docker, it provides robust RESTful endpoints for managing jobs, profiles, and recruitment workflows with integrated logging and email verification."
  },
  {
    screenshot: "img/projects/mmdb.png",
    name: "my movie database",
    github: "https://github.com/Mbonigabay/mmdb",
    status: "active",
    stack: ["Spring Boot", "JTE"],
    video: "videos/mmdb-demo.mp4",
    description: "A personal movie database to help you organize your movie database."
  },
  {
    link: "https://recruitment.reg.rw",
    screenshot: "img/projects/reg-recruitment.png",
    name: "REG/EUCL recruitment system",
    status: "active",
    stack: ["Spring Boot"],
    video: "videos/reg-recruit-demo.mp4",
    description: "Spearheaded the backend development of REG/EUCL’s e-recruitment platform using Java Spring Boot and PostgreSQL. I designed the system architecture, developed RESTful APIs, and modeled databases. Additionally, I managed full-stack deployment via Docker on a VPS, ensuring high stability through rigorous testing and containerized orchestration for UAT environments."
  }
];

router.get("/", () => projects);

export default useBase("/api/projects", router.handler);
