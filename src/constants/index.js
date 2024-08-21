import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  prism,
  stackTech,
  carrent,
  jobit,
  tripguide,
  threejs,
  demo,
  royal,
  rph,
  makeen,
  pigeon,
  carpediem,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front-end Developer",
    icon: web,
  },
  {
    title: "React Js Developer",
    icon: mobile,
  },
  {
    title: "Next Js Developer",
    icon: backend,
  },
  {
    title: "Web Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Front-end Developer React.js/Next.js",
    company_name: "Prism Digital",
    icon: prism,
    iconBg: "#383E56",
    date: "June 2021 - Present",
    points: [
      "Developed interactive websites using a combination of technologies including HTML5, CSS3, JS, web API, React js and SCSS.",
      "Utilized Redux to effectively create and manage data flow in React websites, ensuring seamless store management and state control.",
      "Enhanced customer satisfaction by creating custom websites in React that empowered admins to have full control over their content.",
      "Designed and implemented various types of websites including business-related, portfolio, ERP solutions for business processes, and E-commerce sites.",
      "Increased performance and scalability by optimizing the existing code base.",
      "Integrated third-party APIs into the web applications for additional features and functionality.",
      "Utilized caching strategies for faster webpage loading.",
      "Leveraged Google Analytics to identify user behavior trends.",
      "Upgraded existing software system to improve performance and introduce new features.",
      "Debugged code and resolved problems based on priority systems.",
      "Provided technical support for end users regarding any issue related to the web application.",
      "Worked collectively with developers to review code, resolve bugs, and develop new features.",
      "Researched and implemented innovative technologies, enhancing the development process.",
    ],
  },
  {
    title: "Front-end Developer",
    company_name: "Stack Tech",
    icon: stackTech,
    iconBg: "#E6DEDD",
    date: "June 2020 - May 2021",
    points: [
      "Utilized HTML, CSS, JavaScript & React concepts to identify and develop highly responsive user interface components for web-based interactions.",
      "Implemented high-performance coding practices to enhance code quality.",
      "Implemented various projects including Business related Websites, Portfolio Websites and ERP Solution for Business Process with focus on E-commerce.",
      "Utilized coding skills to convert Figma designs into responsive and interactive web pages.",
      "Utilized React Bootstrap, React Strap and SCSS to develop a Responsive Design.",
      "Successfully integrated multiple APl's to enhance functionality and improve user experience.",
      "Implemented Redux for effective data flow, store management, and state management in React websites.",
      "Developed fully customizable websites using React, empowering website administrators with complete control.",
      "Created powerful Content Management Systems to serve as interface for client.",
      "Optimized websites for international audiences by integrating multilingual features and localization settings.",
      "Reduced load times by optimizing images, code minification, and implementing caching techniques.",
      "Resolved front-end bugs promptly, ensuring optimal website performance at all times.",
      "Streamlined the development process through efficient use of version control systems like Git.",
      "Stayed up-to-date with industry trends and emerging technologies to continuously improve skills and implement innovative solutions.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Demo Films",
    description: `Created a dynamic portfolio website for Demo Films Projects, featuring a 
comprehensive range of services including film-making, advertising, and new 
technology solutions. Utilized Node js and MySQL to develop backend. Develop a 
robust CMS for seamless admin control, with React JS frontend integration via APIs. 
Maintained efficient collaboration through Git version control.`,
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "saas",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
    ],
    image: demo,
    source_code_link: "https://github.com/faiza-khan1866/filmshub",
  },
  {
    name: "Royal Spirit",
    description: `Developed a highly efficient, mobile-responsive e-commerce website using HTML, 
CSS, JavaScript, SCSS, React JS, React Bootstrap, and Material UI, with Node js
backend and MySQL database. Integrated payment gateway for online transactions. 
Implemented a customizable CMS for admin control, including product management, 
discount offers, sales report generation and order management, and seamless API 
integration for client-side access. Integrated comprehensive query filters for product 
search to enhance user experience. Proficient in version control using Git.`,
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "material-ui",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: royal,
    source_code_link: "https://github.com/faiza-khan1866/wine-world",
  },
  {
    name: "RPH (Royal Premium Homes)",
    description: `Created a multi-language website for Royal Premium Homes featuring user-friendly 
design, highlighting residential and commercial projects, services, and luxurious 
properties. Integrated Calendly for consultations and developed a comprehensive 
CMS for admin management. Conducted rigorous testing and utilized HTML-
, CSS, JavaScript, Node js, React JS, and Git for version control, ensuring optimal 
performance and quality assurance`,
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    image: rph,
    source_code_link: "https://github.com/faiza-khan1866/royal-homes",
  },
  {
    name: "Carpe Diem",
    description: `Developed a robust Booking website using React js, facilitating property showcase, 
room availability, and booking reports. Integrated payment gateway for seamless 
transactions. Leveraged React JS and Redux for frontend development, along with 
HTML, CSS, and JavaScript. Utilized Git for version control and ensured API 
integration for data exchange between CMS and client-side website`,
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    image: carpediem,
    source_code_link: "https://github.com/faiza-khan1866/property-booking",
  },
  {
    name: "Makeen Properties",
    description: `Developed a highly efficient, mobile-responsive real estate website using HTML, 
CSS, JavaScript,React JS, React Bootstrap, and Material UI, with Node js backend 
and MySQL database. Implemented a customizable CMS for admin control, including 
building and property management, team showcase, and seamless API integration 
for client-side access. Integrated comprehensive query filters for property search to 
enhance user experience. Proficient in version control using Git.`,
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    image: makeen,
    source_code_link: "https://github.com/faiza-khan1866/real-estate",
  },
  {
    name: "Pigeon",
    description: `Pigeon Mother and Baby Care is an E-Commerce platform offering a comprehensive 
CMS for admin control, enabling easy management of products, categories, discounts, 
and orders. Utilizing a tech stack including HTML, CSS, JavaScript, React JS, Node js, 
MySQL, and various React libraries, Integrated Google Tag Manager for advanced user 
behavior analysis and transaction tracking. Providing functionalities such as shipment 
tracking and detailed sales reports.`,
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    image: pigeon,
    source_code_link: "https://github.com/faiza-khan1866/baby-products",
  },
];

export { services, technologies, experiences, testimonials, projects };
