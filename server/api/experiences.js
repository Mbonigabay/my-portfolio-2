import { createRouter, useBase } from "h3";

const router = createRouter();

const experiences = [
  {
    companyName: "Nyabiheke coding school",
    companyLocation: "Gatsibo District",
    jobTitle: "Learning Facilitator",
    jobDescription: "- Taught programming languages including PHP, Java, and Python to beginners through an initiative by Alight and Nyabiheke refugee camp.\n-Provided personalized support and guidance to students, developed lesson plans, and delivered lectures and hands-on exercises.\n- Adapted teaching methods to accommodate diverse cultural and linguistic backgrounds.\n- Contributed to program management and outreach, ensuring courses were aligned with initiative goals and promoting the program within and beyond the refugee camp.\n- Made a meaningful impact on students' lives and the wider community.",
    period: "JAN 2020 - MARCH 2020"
  },
  {
    companyName: "VNG Technology Limited",
    companyLocation: "Kigali City",
    jobTitle: "Fullstack software developer",
    jobDescription: "- Led development and implementation of empeta.rw application at VNG Technology Ltd.\n- Developed a comprehensive software application using Bootstrap 4 for frontend and Spring MVC for backend.\n- Collaborated with a team of developers to ensure functionality, reliability, and user-friendliness.\n- Led design, development, and troubleshooting of new features.\n- Worked closely with Product Manager to meet requirements and deliver expected functionality.\n- Deployed application using Docker on Linux server through DigitalOcean.\n- Ensured proper configuration and optimization for deployment.",
    period: "MAY 2020 - OCT 2020"
  },
  {
    companyName: "Energy Utility Corporation Limited",
    companyLocation: "Kigali City",
    jobTitle: "Application developer",
    jobDescription: "- Developed and led implementation of backend system for e-recruitment.reg.rw application at REG/EUCL.\n- Built REST API application using Spring Boot, focusing on robustness and scalability.\n- Designed and developed new features, troubleshooted issues, and optimized performance and reliability.\n- Deployed application on Linux server using Docker, ensuring proper configuration and optimization.\n- Monitored application performance and made necessary adjustments for smooth operation.\n- Collaborated with developers and stakeholders to meet requirements and deliver expected functionality.\n- Worked closely with Product Manager to ensure seamless integration with frontend and optimal user experience.\n- Managed various responsibilities from feature development to deployment and maintenance.",
    period: "OCT 2020 - OCT 2021"
  },
  {
    companyName: "Irembo",
    companyLocation: "Kigali City",
    jobTitle: "Software Engineer",
    jobDescription: "- Worked on improving and maintaining Irembo platform as a Full Stack Developer.\n- Added new services, fixed bugs, and refactored codebase to enhance performance, scalability, and maintainability.\n- Collaborated with development team to understand requirements and implement services using AngularJS and Spring Boot.\n- Troubleshooted and fixed bugs by identifying root causes, developing, testing, and deploying fixes.\n- Ensured platform's architectural integrity and ease of maintenance by refactoring codebase to improve quality, readability, and maintainability.\n- Worked with other developers to identify areas for improvement and implemented changes to enhance overall code structure.\n- Found role challenging and rewarding, contributing to significant impact on Rwandan lives through Irembo platform.\n- Leveraged diverse skills and technologies to add features, fix bugs, and improve system quality.",
    period: "NOV 2021 - NOW"
  },
];

router.get("/", () => experiences);

export default useBase("/api/experiences", router.handler);
