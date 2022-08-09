import { createRouter, useBase } from "h3";

const router = createRouter();

const experiences = [
  {
    companyName: "Nyabiheke coding school",
    companyLocation: "Gatsibo District",
    jobTitle: "Learning Facilitator",
    jobDescription: "I taught PHP:\n- Java and \n- Python to programming beginners in this coding school.",
    period: "JAN 2020 - MARCH 2020"
  },
  {
    companyName: "VNG Technology Limited",
    companyLocation: "Kigali City",
    jobTitle: "Fullstack software developer",
    jobDescription: "I analyzed, design , develop and deploy Spring Boot applications.",
    period: "MAY 2020 - OCT 2020"
  },
  {
    companyName: "Energy Utility Corporation Limited",
    companyLocation: "Kigali City",
    jobTitle: "Application developer",
    jobDescription: "I analyzed, design , develop and deploy Spring Boot applications.",
    period: "OCT 2020 - OCT 2021"
  },
  {
    companyName: "Irembo",
    companyLocation: "Kigali City",
    jobTitle: "Software Engineer",
    jobDescription: "I analyzed, design , develop and deploy Spring Boot applications.",
    period: "NOV 2021 - NOW"
  },
];

router.get("/", () => experiences);

export default useBase("/api/experiences", router.handler);
