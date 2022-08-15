import { createRouter, useBase } from "h3";

const router = createRouter();

const projects = [
//   {
//     link: "https://empeta.rw",
//     screenshot: "../assets/img/projects/empeta.jpg",
//     name: "empeta.rw",
//     github: "#",
//     status: "inactive"
//   },
  {
    link: "https://mbonigabayusuf.netlify.app",
    screenshot: "../assets/img/projects/port.jpg",
    name: "mbonigabayusuf.netlify.app",
    github: "https://github.com/Mbonigabay/modern-portofolio",
    status: "active"
  }
];

router.get("/", () => projects);

export default useBase("/api/projects", router.handler);
