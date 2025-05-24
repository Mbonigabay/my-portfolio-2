import { createRouter, useBase } from "h3";

const router = createRouter();

const experiences = [
  {
    id: 1,
    companyName: "Nyabiheke coding school",
    companyLocation: "Gatsibo District",
    jobTitle: "Learning Facilitator",
    jobDescription: "- Taught programming languages including PHP, Java, and Python to beginners through an initiative by Alight and Nyabiheke refugee camp.\n-Provided personalized support and guidance to students, developed lesson plans, and delivered lectures and hands-on exercises.\n- Adapted teaching methods to accommodate diverse cultural and linguistic backgrounds.\n- Contributed to program management and outreach, ensuring courses were aligned with initiative goals and promoting the program within and beyond the refugee camp.\n- Made a meaningful impact on students' lives and the wider community.",
    period: "JAN 2020 - MARCH 2020"
  },
  {
    id:2,
    companyName: "VNG Technology Limited",
    companyLocation: "Kigali City",
    jobTitle: "Fullstack software developer",
    jobDescription: "- Led development of empeta.rw, a wedding planning website at VNG Technology Ltd, using Spring MVC to deliver a reliable, user-friendly platform that met quality standards. \n- Configured and provisioned a VPS for UAT environment, orchestrating deployment of the application using Docker containerization and Docker Compose orchestration.",
    period: "MAY 2020 - OCT 2020"
  },
  {
    id: 3,
    companyName: "Energy Utility Corporation Limited",
    companyLocation: "Kigali City",
    jobTitle: "Application developer",
    jobDescription: "- Spearheaded the end-to-end backend development for REG/EUCL's critical e-recruitment.reg.rw application using [Java Spring Boot, PostgreSQL], encompassing system architecture design, API development, and database modeling to streamline the organization's hiring process. \n- Assisted the product team in  the design of application  and executed rigorous testing cycles to ensure the platform's stability and accuracy. \n- Configured and provisioned a VPS for UAT environment, orchestrating deployment of full-stack application components including backend services, frontend application, and PostgreSQL database using Docker containerization and Docker Compose orchestration.",
    period: "OCT 2020 - OCT 2021"
  },
  {
    id: 4,
    companyName: "Irembo",
    companyLocation: "Kigali City",
    jobTitle: "Software Engineer",
    jobDescription: "- Developed and launched key new services on the Irembo platform, including the E-provisional Driving License for Rwanda National Police and Voluntary Land Sale for the National Land Authority, collectively processing over a million applications annually, significantly enhancing public access to critical government functions. Also contributed to the Permit and Visa Transfer service for DGIE. \n- Ensured high platform reliability by proactively identifying and resolving bugs and critical incidents, and collaborating closely with TechOps and key external partners (including NPPA, DGIE, RSSB, RNP, and NLA) to maintain seamless integration and stability for essential government services. \n- Drove significant codebase enhancements by refactoring for improved performance, and maintainability, integrating crucial security features, and developing internal tools that streamlined day-to-day operations for the Customer Experience team.",
    period: "NOV 2021 - NOW"
  },
];

router.get("/", () => experiences);

export default useBase("/api/experiences", router.handler);
