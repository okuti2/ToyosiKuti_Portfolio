import {
    assembly,
    mobile,
    backend,
    creator,
    CountryExplorer,
    ContactManager,
    web,
    javascript,
    express,
    typescript,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    intellij,
    docker,
    seneca,
    servicetitan,
    fragments,
    Library,
    portfolio,
    threejs,
    android,
    angular,
    figma,
    aws,
    azure,
    bootstrap,
    c,
    cpp,
    github2,
    vscode,
    ionic,
    java,
    jest,
    linux,
    mysql,
    postgresql,
    postman,
    powershell,
    nomai,
    python,
    solidity,
    swift,
    vitejs,
    vuejs,
    intellicycles,
    Xcode,
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
      category: "Languages",
      techs: [
        {
          name: "JavaScript",
          icon: javascript,
        },
        {
          name: "TypeScript",
          icon: typescript,
        },
        {
          name: "Java",
          icon: java,
        },
        {
          name: "Python",
          icon: python,
        },
        {
          name: "C++",
          icon: cpp,
        },
        {
          name: "Solidity",
          icon: solidity,
        },
        {
          name: "Swift",
          icon: swift,
        },
        {
          name: "\u00A0\u00A0\u00A0C\u00A0\u00A0\u00A0\u00A0",
          icon: c,
        }
      ]
    },
    {
      category: "Frameworks",
      techs: [
        {
          name: "React JS",
          icon: reactjs,
        },
        {
          name: "Angular",
          icon: angular,
        },
        {
          name: "Vue JS",
          icon: vuejs,
        },
        {
          name: "Express JS",
          icon: express,
        },
        {
          name: "Ionic",
          icon: ionic,
        },
        {
          name: "Vite JS",
          icon: vitejs,
        },
      ]
    },
    {
      category: "Databases",
      techs: [
        {
          name: "MongoDB",
          icon: mongodb,
        },
        {
          name: "MySQL",
          icon: mysql,
        },
        {
          name: "PostgreSQL",
          icon: postgresql,
        },
      ]
    },
    {
      category: "Cloud Computing",
      techs: [
        {
          name: "AWS",
          icon: aws,
        },
        {
          name: "Azure",
          icon: azure,
        },
        {
          name: "Docker",
          icon: docker,
        },
        {
          name: "GitHub",
          icon: github2,
        },
      ]
    },
    {
      category: "Tools",
      techs: [
        {
          name: "\u00A0\u00A0Git\u00A0\u00A0",
          icon: git,
        },
        {
          name: "Linux",
          icon: linux,
        },
        {
          name: "Figma",
          icon: figma,
        },
        {
          name: "PowerShell",
          icon: powershell,
        },
       
      ]
    },
    {
      category: "Libraries",
      techs: [
        {
          name: "Tailwind CSS",
          icon: tailwind,
        },
        {
          name: "Three JS",
          icon: threejs,
        },
        {
          name: "Bootstrap",
          icon: bootstrap,
        },
        {
          name: "\u00A0\u00A0Jest\u00A0\u00A0",
          icon: jest,
        },
      ]
    },
    {
      category: "Others",
      techs: [
        {
          name: "Android Studio",
          icon: android,
        },
        {
          name: "Postman",
          icon: postman,
        },
        {
          name: "Node JS",
          icon: nodejs,
        },
       
        {
          name: "VS Code",
          icon: vscode,
        },
        {
          name: "IntelliJ IDEA",
          icon: intellij,
        },
        {
          name: "Xcode",
          icon: Xcode,
        }
      ]
    }
  ]
  
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
    {
      testimonial:
        "Toyosi is a very thorough and hardworking. I’ve had the pleasure to work with her and I will say she is a delight to work with. It was easy to work with her in groups, and she was always receptive to feedback. I admire her resolve and determination. She is devoted to producing high quality work that satisfies all requirements. She would be a lovely addition to any organization!",
      name: "Nomai Emina",
      designation: "Junior Safety Engineer",
      company: "AtkinsRealis",
      image: nomai,
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
      youtube_link: "https://youtu.be/GRFFJqGn2V0",
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
      youtube_link: "https://youtu.be/GRFFJqGn2V0",
      source_code_link: "https://github.com/okuti2/CountryExplorer",
    },
    {
      name: "Fragments Data Microservice",
      description:
        "CRUD API for storing and converting data in different formats like app JSON, text and images. Includes CI/CD pipeline, Docker Compose and Jest and Hurl testing",
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
      youtube_link: "https://youtu.be/GRFFJqGn2V0",
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
      youtube_link: "https://youtu.be/GRFFJqGn2V0",
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
      youtube_link: "",
      source_code_link: "https://github.com/okuti2/OOP345-Works/tree/main/Project",
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
      youtube_link: "https://youtu.be/GRFFJqGn2V0",
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
      youtube_link: "https://youtu.be/GRFFJqGn2V0",
      source_code_link: "https://github.com/okuti2/LibraryApp",
    },
  ];

  const technologies2 = [
    {
      name: "AWS",
      icon: aws,
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
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Express JS",
      icon: express,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name : "MySQL",
      icon: mysql,
    },
    {
      name: "Git",
      icon: git,
    },
    {
      name: "GitHub",
      icon: github2,
    },
    {
      name: "Docker",
      icon: docker,
    },
    {
      name: "Linux",
      icon: linux,
    }
    
  ];

  
  export { services, technologies, experiences, testimonials, projects, technologies2 };
  

