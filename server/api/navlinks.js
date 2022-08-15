import { createRouter, useBase } from "h3";

const router = createRouter();

const navlinks = [
  {
    name: "Home",
    link: "/",
    status: "active"
  },
  {
    name: "About Me",
    link: "/about",
    status: "active"
  },
  {
    name: "My Work",
    link: "/work",
    status: "active"
  },
  {
    name: "How to Reach Me",
    link: "/contact",
    status: "active"
  },
];

router.get("/", () => navlinks);

export default useBase("/api/navlinks", router.handler);
