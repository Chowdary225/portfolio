// Personal Information Data
// Update this file with your actual details from your resume

export const personalInfo = {
  name: "Alapati Satyanarayana Sunil",
  title: "Aspiring Front-End Developer",
  location: "Rajahmundry, Andhra Pradesh", // Update with your location
  email: "sunilchowdaryalapati1@gmail.com.com", // Update with your email
  phone: "+91 9848429377", // Update with your phone
  linkedin: "https://linkedin.com/in/yourprofile", // Update with your LinkedIn
  github: "https://github.com/yourusername", // Update with your GitHub
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
    category: "Web Development",
    githubLink: "https://github.com/Chowdary225/portfolio",
    liveLink: "https://chowdary-portfolio.netlify.app", // Update with your actual deployment
    featured: true,
    image: "/api/placeholder/400/250"
  },
  {
    id: 2,
    title: "E-commerce Shopping Website",
    description: "A fully responsive e-commerce website with product catalog, shopping cart functionality, user authentication, and order management. Built with modern web technologies.",
    techStack: ["HTML5", "CSS3", "JavaScript", "Local Storage", "Responsive Design"],
    category: "Web Development",
    githubLink: "https://github.com/Chowdary225/e-commerce-store",
    liveLink: "#", // Update when deployed
    featured: true,
    image: "/api/placeholder/400/250"
  },
  {
    id: 3,
    title: "Bookkaro - Online Bookstore",
    description: "A dynamic bookstore application allowing users to browse, search, and purchase books online. Features include user authentication, shopping cart, and order management system.",
    techStack: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript"],
    category: "Web Development",
    githubLink: "https://github.com/Chowdary225/bookkaro",
    liveLink: "#",
    featured: false,
    image: "/api/placeholder/400/250"
  },
  {
    id: 4,
    title: "JavaScript Calculator",
    description: "A feature-rich calculator application built with vanilla JavaScript. Includes basic arithmetic operations, memory functions, and keyboard support with a clean, modern interface.",
    techStack: ["HTML5", "CSS3", "JavaScript", "DOM Manipulation"],
    category: "Web Development",
    githubLink: "https://github.com/Chowdary225/calculator",
    liveLink: "#", // Update when deployed
    featured: false,
    image: "/api/placeholder/400/250"
  },
  {
    id: 5,
    title: "Weather App",
    description: "A responsive weather application that fetches real-time weather data using OpenWeatherMap API. Features current weather, 5-day forecast, and location-based weather updates.",
    techStack: ["JavaScript", "CSS3", "HTML5", "REST API", "Fetch API"],
    category: "Web Development",
    githubLink: "https://github.com/Chowdary225/weather-app",
    liveLink: "#",
    featured: false,
    image: "/api/placeholder/400/250"
  },
  {
    id: 6,
    title: "To-Do List Application",
    description: "An interactive task management application with add, edit, delete, and mark complete functionality. Data persistence using local storage and drag-and-drop features.",
    techStack: ["HTML5", "CSS3", "JavaScript", "Local Storage", "DOM Events"],
    category: "Web Development",
    githubLink: "https://github.com/Chowdary225/todo-app",
    liveLink: "#",
    featured: false,
    image: "/api/placeholder/400/250"
  },
  {
    id: 7,
    title: "Restaurant Landing Page",
    description: "A beautiful, responsive landing page for a restaurant featuring modern design, smooth animations, menu showcase, and contact information. Optimized for all devices.",
    techStack: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "CSS Grid"],
    category: "Web Development",
    githubLink: "https://github.com/Chowdary225/restaurant-website",
    liveLink: "#",
    featured: false,
    image: "/api/placeholder/400/250"
  },
  {
    id: 8,
    title: "Personal Blog Website",
    description: "A clean and modern blog website with article listing, individual post pages, categories, and responsive design. Built with semantic HTML and accessible design principles.",
    techStack: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "SEO"],
    category: "Web Development",
    githubLink: "https://github.com/Chowdary225/personal-blog",
    liveLink: "#",
    featured: false,
    image: "/api/placeholder/400/250"
  }
];

export const certificates = [];

// Instructions for updating:
// 1. Replace all placeholder text with your actual information
// 2. Add your certificate PDF files to the public/certificates/ folder
// 3. Update the certificateFile paths to match your actual files
// 4. Add more projects, certificates, and skills as needed
// 5. Update social media links with your actual profiles
