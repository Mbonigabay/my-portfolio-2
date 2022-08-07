import { createRouter, useBase } from "h3";

const router = createRouter();

const socials = [
  {
    name: "Linkedin",
    icon: "fa-linkedin",
    link: "https://www.linkedin.com/in/yusuf-mbonigaba-033691187",
    status: "active"
  },
  {
    name: "Docker",
    icon: "fa-docker",
    link: "https://hub.docker.com/u/mbonigabay",
    status: "inactive"
  },
  {
    name: "Gitlab",
    icon: "fa-gitlab",
    link: "https://gitlab.com/mbonigabay",
    status: "inactive"
  },
  {
    name: "Github",
    icon: "fa-github",
    link: "https://github.com/mbonigabay",
    status: "active"
  },
];

router.get("/", () => socials);

export default useBase("/api/socials", router.handler);
