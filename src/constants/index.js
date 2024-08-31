import {
    assembly,
    mobile,
    backend,
    creator,
    CountryExplorer,
    ContactManager,
    web,
    javascript,
    typescript,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    docker,
    seneca,
    servicetitan,
    fragments,
    Library,
    portfolio,
    threejs,
    android,
    angular,
    aws,
    azure,
    bootstrap,
    c,
    cpp,
    github2,
    ionic,
    java,
    jest,
    linux,
    mysql,
    postgresql,
    powershell,
    python,
    solidity,
    swift,
    vitejs,
    vuejs,
    intellicycles,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Mobile App Developer (IOS, Android & Cross-platform)",
      icon: mobile,
    },
    {
      title: "Java Developer",
      icon: backend,
    },
    {
      title: "Cloud Computing",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Android Studio",
      icon: android,
    },
    {
      name: "AWS",
      icon: aws,
    },
    // {
    //   name: "Bootstrap",
    //   icon: bootstrap,
    // },
    {
      name: "C",
      icon: c,
    },
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "Azure",
      icon: azure,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name:"Angular",
      icon: angular,
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
      name: "Git Hub",
      icon: github2,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Ionic",
      icon: ionic,
    },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
    {
      name: "Three JS",
      icon: threejs,
    },
    // {
    //   name: "git",
    //   icon: git,
    // },
    {
      name: "Java",
      icon: java,
    },
    // {
    //   name: "Linux",
    //   icon: linux,
    // },
    // {
    //   name: "MySQL",
    //   icon: mysql,
    // },
    // {
    //   name: "PostgreSQL",
    //   icon: postgresql,
    // },
    // {
    //   name: "PowerShell",
    //   icon: powershell,
    // },
    // {
    //   name: "Python",
    //   icon: python,
    // },
    // {
    //   name: "Solidity",
    //   icon: solidity,
    // },
    // {
    //   name: "Swift",
    //   icon: swift,
    // },
    // {
    //   name: "Vite JS",
    //   icon: vitejs,
    // },
    // {
    //   name: "Vue JS",
    //   icon: vuejs,
    // },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
    // { 
    //   name: "Jest",
    //   icon: jest,
    // }
  ];
  
  const experiences = [
    {
      title: "Senior Co-op Technologist",
      company_name: "Seneca Polytechnic",
      icon: seneca,
      iconBg: "#383E56",
      date: "May 2023 - December 2023",
      points: [
        "Developed dynamic web-based project for student information on academic pathways at Seneca and from other schools.",
        "Replaced static, hard-to-edit website, enabling easy client updates without programming expertise.",
        "Updated various Angular projects, optimizing backend, and restructuring code for latest technology.",
        "Implemented cloud computing solution for large web projects, ensuring independent component existence.",
        "Facilitated development process, reducing project crashes and conflicts during updates or changes.",
        "Completed tasks assigned by manager, including uploading JSON files for shuttle bus schedules.",
        "Assisted in testing new features of Seneca mobile app for airport shuttle services.",
        "Made quick fixes to bugs, contributing to app functionality and user experience.",
      ],
    },
    {
      title: "Live Services Agent",
      company_name: "ServiceTitan",
      icon: servicetitan,
      iconBg: "#FFFFFF",
      date: "Dec 2022 - Present",
      points: [
        "Handled inbound calls efficiently and professionally, demonstrating strong communication and customer service skills while providing support, information, and assistance to clients and customers.",
        "Assisted service-based companies in streamlining operations, improving customer service, and increasing sales.",
        "Collected and processed paperwork to schedule appointments for over 100 customers daily.",
        "Skills: Calendaring · Customer Experience · Search Engine Optimization (SEO) · Problem Solving · Teamwork · Customer Service · Organization Skills · Marketing Strategy · Communication",
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "very knowledgeable on all things web development.",
      name: "Vincent Leung",
      designation: "Senior Programmer Analyst",
      company: "Seneca Polytechnic",
      image: "",
    },
  ];
  
  const projects = [
    {
      name: "Personal Portfolio Website",
      description:
        "Designed and developed a personal portfolio website using Vite, React, Tailwind CSS, and Framer Motion, showcasing my skills, projects, and experiences. The website features a responsive design, smooth animations, and a user-friendly interface, providing a professional platform to display my work and connect with potential clients and employers.",
      tags: [
        {
          name: "React JS",
          color: "pink-text-gradient",
        },
        {
          name: "Three Js",
          color: "blue-text-gradient",
        },
        {
          name: "React Three Fiber",
          color: "green-text-gradient",
        },
        {
          name: "React Three Drei",
          color: "orange-text-gradient",
        },
        {
          name: "Email Js",
          color: "blue-text-gradient",
        },
        {
          name: "Vite",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "pink-text-gradient",
        }
      ],
      image: portfolio,
      source_code_link: "https://github.com/okuti2/ToyosiKuti_Portfolio",
    },
    {
      name: "Country Explorer App",
      description:
        "Developed a cross-platform mobile app using Ionic and Capacitor to display information about world countries. Features include a country list, detailed views with a favorite option, and a favorites management screen. The app integrates REST Countries API, uses Ionic Web Components for UI, and Capacitor Preferences API for data persistence, showcasing API integration, TypeScript data modeling, and a user-friendly interface.",
      tags: [
        {
          name: "Ionic",
          color: "pink-text-gradient",
        },
        {
          name: "Capacitor",
          color: "blue-text-gradient",
        },
        {
          name: "TypeScript",
          color: "green-text-gradient",
        }
      ],
      image: CountryExplorer,
      source_code_link: "https://github.com/okuti2/CountryExplorer",
    },
    {
      name: "Fragments Data Microservice",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "Jest",
          color: "blue-text-gradient",
        },
        {
          name: "Hurl",
          color: "pink-text-gradient",
        },
        {
          name: "S3",
          color: "green-text-gradient",
        },
        {
          name: "ECS",
          color: "orange-text-gradient",
        },
        {
          name: "ECR",
          color: "green-text-gradient",
        },
        {
          name: "DynamoDB",
          color: "pink-text-gradient",
        },
        {
          name: "Docker",
          color: "blue-text-gradient",
        },
        {
          name: "ExpressJS",
          color: "orange-text-gradient",
        },
        {
          name: "Github Actions",
          color: "green-text-gradient",
        }
      ],
      image: fragments,
      source_code_link: "https://github.com/okuti2/fragments",
    },
    {
      name: "IntelliCycles",
      description:
        "This web app helps users manage daily activities with personalized accounts, task and habit tracking, calendar views, a yearly overview, a chatbot assistant, and a streak system for motivation and goal completion.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "vite",
          color: "pink-text-gradient",
        },
        {
          name: "tailwind css",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "orange-text-gradient",
        },
        {
          name: "ExpressJS",
          color: "blue-text-gradient",
        },
        {
          name: "NodeJS",
          color: "green-text-gradient",
        },
        {
          name: "Docker",
          color: "blue-text-gradient",
        },
        {
          name: "Jest",
          color: "pink-text-gradient" 
        }
      ],
      image: intellicycles,
      source_code_link: "https://github.com/yemregumus/IntelliCycles",
    },
    {
      name: "Simulation of assembly Line with Any Number of Stations",
      description:
        "A C++ multithreaded OOP project simulating a manufacturing plant that produces various products and parts to meet customer demands, utilizing text files for data storage.",
      tags: [
        {
          name: "C++",
          color: "blue-text-gradient",
        },
      ],
      image: assembly,
      source_code_link: "https://github.com/",
    },
    {
      name: "Library Mobile App",
      description:
        "Developed a cross-platform mobile application using Xamarin Forms and Visual Studio, simulating a library management system with login functionality and book management. Features include user authentication, book checkout/return, and SQLite database integration for data persistence, ensuring a smooth experience on both Android and iOS platforms.",
      tags: [
        {
          name: "Xamarin Forms",
          color: "pink-text-gradient",
        },
        {
          name: "C#",
          color: "blue-text-gradient",
        },
        {
          name: "SQLite",
          color: "green-text-gradient",
        },
        {
          name: "Visual Studio",
          color: "orange-text-gradient",
        }
      ],
      image: Library,
      source_code_link: "https://github.com/okuti2/LibraryApp",
    },
    {
      name: "Contact Manager App",
      description:
        "Contact Manager is an Android app that demonstrates CRUD operations using Room Database, allowing users to create, retrieve, update, and delete contact information. Each contact includes a name, email address, and phone number, with the app pre-loaded with at least five distinct contacts. The app is designed to showcase efficient data handling within a customizable layout, providing a practical example of database integration in mobile development.",
      tags: [
        {
          name: "Android Studio",
          color: "blue-text-gradient",
        },
        {
          name: "Java",
          color: "pink-text-gradient",
        },
        {
          name: "RoomDB",
          color: "green-text-gradient",
        },
      ],
      image: ContactManager,
      source_code_link: "https://github.com/okuti2/LibraryApp",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  