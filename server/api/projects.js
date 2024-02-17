import { createRouter, useBase } from "h3";

const router = createRouter();

const projects = [
  {
    link: "https://mbonigabayusuf.netlify.app",
    screenshot: "img/projects/port.jpg",
    name: "mbonigabayusuf.netlify.app",
    github: "https://github.com/Mbonigabay/modern-portofolio",
    status: "active"
  },
  {
    link: "https://masjid.rw",
    screenshot: "img/projects/masjid.png",
    name: "masjid.rw",
    github: "https://github.com/Mbonigabay/masjid",
    status: "active"
  }
];

router.get("/", () => projects);

export default useBase("/api/projects", router.handler);
