// Personal Information Data
// Update this file with your actual details from your resume

export const personalInfo = {
  name: "Alapati Satyanarayana Sunil",
  title: "Aspiring Front-End Developer",
  location: "Rajahmundry, Andhra Pradesh", // Update with your location
  email: "sunilchowdaryalapati1@gmail.com.com", // Update with your email
  phone: "+91 9848429377", // Update with your phone
  linkedin: "https://linkedin.com/in/yourprofile", // Update with your LinkedIn
  github: "https://github.com/Chowdary225", // Updated with your actual GitHub
  twitter: "https://twitter.com/yourusername", // Update with your Twitter (optional)
};

export const education = [
  {
    degree: "Bachelor of Technology in Computer Science", // Update with your degree
    institution: "Lovely Professional University", // Update with your university
    year: "2021 - 2024", // Update with your years
    grade: "CGPA: 7.22", // Update with your grade
    location: "Punjab", // Update with location
  },
  {
    degree: "Diploma in Automobile Engineering", // Update with your diploma
    institution: "Godavari Institute of Engineering Technology", // Update with your school
    year: "2017 - 2020", // Update with your years
    grade: "Percentage: 71.14%", // Update with your grade
    location: "Rajahmundry, Andhra Pradesh", // Update with location
  }
];

export const experience = [
  // Add your work experience here
  // {
  //   title: "Intern Frontend Developer",
  //   company: "Company Name",
  //   period: "Month Year - Month Year",
  //   location: "City, Country",
  //   description: [
  //     "Description of your work",
  //     "Another achievement or responsibility"
  //   ]
  // }
];

export const skills = {
  technical: [
    { name: "HTML5", level: 90, category: "Frontend" },
    { name: "CSS3", level: 85, category: "Frontend" },
    { name: "JavaScript", level: 80, category: "Frontend" },
    { name: "React", level: 75, category: "Frontend" },
    { name: "Node.js", level: 75, category: "Backend" },
    { name: "PHP", level: 70, category: "Backend" },
    { name: "Express.js", level: 70, category: "Backend" },
    { name: "MySQL", level: 75, category: "Database" },
    { name: "Oracle Database", level: 65, category: "Database" },
    { name: "REST APIs", level: 75, category: "Backend" },
    { name: "Responsive Design", level: 88, category: "Frontend" },
    { name: "DOM Manipulation", level: 80, category: "Frontend" },
    { name: "Git & GitHub", level: 85, category: "Tools" },
    { name: "VS Code", level: 90, category: "Tools" },
    { name: "Web Standards", level: 80, category: "Frontend" },
    { name: "UI/UX Principles", level: 70, category: "Design" }
  ],
  soft: [
    "Communication",
    "Team Collaboration", 
    "Problem Solving",
    "Time Management",
    "Adaptability",
    "Critical Thinking",
    "Attention to Detail"
  ]
};

export const projects = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "A modern, responsive portfolio website built with React showcasing my skills, projects, and certifications. Features smooth animations, mobile-first design, and interactive components.",
    techStack: ["React", "CSS3", "JavaScript", "HTML5", "Vite"],
    category: "web",
    githubLink: "https://github.com/Chowdary225/portfolio",
    liveLink: "https://chowdary225.github.io/portfolio/",
    featured: true,
    image: "/images/React-Portfolio-Website.jpg",
    demoVideo: ""
  },
  {
    id: 2,
    title: "BookKaro - Ticket Booking System",
    description: "An online ticket booking portal for train and bus reservations with user authentication, booking management, payment flow, and an admin dashboard.",
    techStack: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript"],
    category: "web",
    githubLink: "https://github.com/Chowdary225/BookKaro",
    liveLink: "#",
    featured: true,
    image: "/images/projects/bookkaro.jpg",
    demoVideo: "/videos/projects/bookkaro.mp4"
  },
  {
    id: 3,
    title: "Real-Time Chat Room",
    description: "A real-time chat application where users can connect and message instantly. Built with a MERN-style stack and Socket.io for live communication.",
    techStack: ["JavaScript", "React", "Node.js", "Socket.io", "MongoDB", "Express"],
    category: "web",
    githubLink: "https://github.com/Chowdary225/-A-real-time-chat-room",
    liveLink: "#",
    featured: true,
    image: "/images/projects/real-time-chat-room.jpg",
    demoVideo: "/videos/projects/real-time-chat-room.mp4"
  },
  {
    id: 4,
    title: "INT252 E-Store",
    description: "A React e-commerce storefront with routing, reusable components, and context-based state for browsing and managing products.",
    techStack: ["React", "JavaScript", "CSS3"],
    category: "web",
    githubLink: "https://github.com/Chowdary225/INT252Estore",
    liveLink: "#",
    featured: false,
    image: "/images/projects/int252-estore.jpg",
    demoVideo: "/videos/projects/int252-estore.mp4"
  },
  {
    id: 5,
    title: "Movie Entertainment Hub",
    description: "A React entertainment app for discovering movies and TV series with search, carousels, and API-driven content browsing.",
    techStack: ["React", "JavaScript", "Material UI", "Axios", "CSS3"],
    category: "web",
    githubLink: "https://github.com/Chowdary225/react-project-movie",
    liveLink: "#",
    featured: false,
    image: "/images/projects/movie-entertainment-hub.jpg",
    demoVideo: "/videos/projects/movie-entertainment-hub.mp4"
  },
  {
    id: 6,
    title: "Online Resume Builder",
    description: "A desktop-style resume builder that helps users create and manage CV content, backed by Java and MySQL.",
    techStack: ["Java", "MySQL", "HTML", "CSS", "JavaScript"],
    category: "web",
    githubLink: "https://github.com/Chowdary225/online-resume-builder",
    liveLink: "#",
    featured: false,
    image: "/images/projects/online-resume-builder.jpg",
    demoVideo: "/videos/projects/online-resume-builder.mp4"
  },
  {
    id: 7,
    title: "E-Commerce Website",
    description: "A front-end e-commerce website layout with product pages, styling, and interactive UI built using HTML, CSS, and JavaScript.",
    techStack: ["HTML5", "CSS3", "JavaScript"],
    category: "web",
    githubLink: "https://github.com/Chowdary225/E-commerce-",
    liveLink: "#",
    featured: false,
    image: "/images/projects/e-commerce.jpg",
    demoVideo: "/videos/projects/e-commerce.mp4"
  },
  {
    id: 8,
    title: "Web Project Game",
    description: "A browser game with easy, medium, and hard levels where players find gifts to win. Built with HTML, CSS, and JavaScript.",
    techStack: ["HTML5", "CSS3", "JavaScript"],
    category: "web",
    githubLink: "https://github.com/Chowdary225/Web-Project-Game",
    liveLink: "#",
    featured: false,
    image: "/images/projects/web-project-game.jpg",
    demoVideo: "/videos/projects/web-project-game.mp4"
  },
  {
    id: 9,
    title: "INT219 Apple Landing Page",
    description: "A multi-page HTML/CSS practice project inspired by Apple product pages, focused on layout and visual presentation.",
    techStack: ["HTML5", "CSS3"],
    category: "web",
    githubLink: "https://github.com/Chowdary225/INT219",
    liveLink: "#",
    featured: false,
    image: "/images/projects/int219-apple.jpg",
    demoVideo: "/videos/projects/int219-apple.mp4"
  },
  {
    id: 10,
    title: "React Learning Project",
    description: "Early React practice project exploring components and basic UI structure. Demo media will be uploaded later.",
    techStack: ["React", "JavaScript"],
    category: "web",
    githubLink: "https://github.com/Chowdary225/React",
    liveLink: "#",
    featured: false,
    image: "/images/projects/react-learning.jpg",
    demoVideo: "/videos/projects/react-learning.mp4"
  },
  // Empty/private repos — name + placeholder files only; upload code, images, and video later
  {
    id: 11,
    title: "E-commerce",
    description: "Project details, demo images, and video coming soon. Placeholder reserved for future upload.",
    techStack: ["Coming Soon"],
    category: "web",
    githubLink: "#",
    liveLink: "#",
    featured: false,
    isPrivate: true,
    comingSoon: true,
    image: "/images/projects/e-commerce-private.jpg",
    demoVideo: "/videos/projects/e-commerce-private.mp4"
  },
  {
    id: 12,
    title: "Estore",
    description: "Project details, demo images, and video coming soon. Placeholder reserved for future upload.",
    techStack: ["Coming Soon"],
    category: "web",
    githubLink: "#",
    liveLink: "#",
    featured: false,
    isPrivate: true,
    comingSoon: true,
    image: "/images/projects/estore-private.jpg",
    demoVideo: "/videos/projects/estore-private.mp4"
  }
];

export const certificates = [];

// Instructions for updating:
// 1. Replace all placeholder text with your actual information
// 2. Add your certificate PDF files to the public/certificates/ folder
// 3. Update the certificateFile paths to match your actual files
// 4. Add more projects, certificates, and skills as needed
// 5. Update social media links with your actual profiles
