import { createRouter, useBase } from "h3";

const router = createRouter();

const experiences = [
  
];

router.get("/", () => experiences);

export default useBase("/api/experiences", router.handler);
