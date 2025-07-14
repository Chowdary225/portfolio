// Personal Information Data
// Update this file with your actual details from your resume

export const personalInfo = {
  name: "Chowdary",
  title: "Aspiring Front-End Developer",
  location: "Your City, Country", // Update with your location
  email: "your.email@example.com", // Update with your email
  phone: "+1 (555) 123-4567", // Update with your phone
  linkedin: "https://linkedin.com/in/yourprofile", // Update with your LinkedIn
  github: "https://github.com/yourusername", // Update with your GitHub
  twitter: "https://twitter.com/yourusername", // Update with your Twitter (optional)
};

export const education = [
  {
    degree: "Bachelor of Technology in Computer Science", // Update with your degree
    institution: "Your University Name", // Update with your university
    year: "2020 - 2024", // Update with your years
    grade: "CGPA: 8.5/10", // Update with your grade
    location: "Your City", // Update with location
  },
  {
    degree: "Higher Secondary Education",
    institution: "Your School Name", // Update with your school
    year: "2018 - 2020", // Update with your years
    grade: "Percentage: 85%", // Update with your grade
    location: "Your City", // Update with location
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
    "Attention to Detail",
    "Eagerness to Learn"
  ]
};

export const projects = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    description: "A responsive portfolio website built with React showcasing my skills, projects, and experience. Features smooth animations and mobile-first design.",
    techStack: ["React", "CSS3", "JavaScript", "HTML5"],
    category: "web",
    githubLink: "https://github.com/yourusername/portfolio", // Update with your GitHub
    liveLink: "https://yourportfolio.com", // Update with your live link
    featured: true,
    image: "/api/placeholder/400/250"
  },
  // Add more projects from your resume
  {
    id: 2,
    title: "Project Name", // Replace with your actual project
    description: "Description of your project. What it does, technologies used, and your role in it.",
    techStack: ["Technology1", "Technology2", "Technology3"],
    category: "web",
    githubLink: "https://github.com/yourusername/project",
    liveLink: "https://yourproject.com",
    featured: false,
    image: "/api/placeholder/400/250"
  }
];

export const certificates = [
  {
    id: 1,
    title: "Introduction to Front-End Development",
    issuer: "Meta",
    date: "November 2022",
    description: "Comprehensive frontend development certification covering modern web technologies, responsive design, and user interface development best practices.",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Responsive Design", "UI/UX Principles"],
    credentialId: "VEDW9MU5Q2B3",
    certificateImage: "/certificates/images/Frontend-Development.svg",
    certificateFile: "/certificates/pdfs/Frontend-Development.pdf",
    verifyLink: "https://coursera.org/verify/VEDW9MU5Q2B3",
    logo: "⚛️",
    featured: true,
    completionDate: "November 25, 2022",
    validityPeriod: "Lifetime",
    certificateType: "Professional",
    duration: "120 hours",
    grade: "Completed",
    instructorName: "Meta Development Team",
  },
  {
    id: 2,
    title: "Responsive Website Basics: Code with HTML, CSS, and JavaScript",
    issuer: "University of London",
    date: "November 2022",
    description: "Complete web development certification covering HTML5, CSS3, and JavaScript fundamentals including DOM manipulation, responsive design, and modern development practices.",
    skills: ["HTML5", "CSS3", "JavaScript", "DOM Manipulation", "Responsive Design", "Web Standards"],
    credentialId: "FER7HQJ5VBZ7",
    certificateImage: "/certificates/images/HTML-CSS-JS.svg",
    certificateFile: "/certificates/pdfs/HTML-CSS-JS.pdf",
    verifyLink: "https://coursera.org/verify/FER7HQJ5VBZ7",
    logo: "🌐",
    featured: true,
    completionDate: "November 28, 2022",
    validityPeriod: "Lifetime",
    certificateType: "Completion",
    duration: "80 hours",
    grade: "Completed",
    instructorName: "University of London Team",
  },
  {
    id: 3,
    title: "Server side JavaScript with Node.js",
    issuer: "NIIT",
    date: "April 2023",
    description: "Advanced Node.js certification covering server-side JavaScript, Express.js framework, database integration, and RESTful API development.",
    skills: ["Node.js", "Express.js", "REST APIs", "Database Integration", "Server-Side Development", "NPM"],
    credentialId: "55XVS3VAKC72",
    certificateImage: "/certificates/images/NodeJS.jpg",
    certificateFile: "/certificates/pdfs/NodeJS.pdf",
    verifyLink: "https://coursera.org/verify/55XVS3VAKC72",
    logo: "⚡",
    featured: true,
    completionDate: "April 21, 2023",
    validityPeriod: "Lifetime",
    certificateType: "Professional",
    duration: "100 hours",
    grade: "Completed",
    instructorName: "NIIT Experts",
  },
  {
    id: 4,
    title: "Building Web Applications in PHP",
    issuer: "University of Michigan",
    date: "October 2023",
    description: "PHP programming certification covering server-side scripting, database connectivity, object-oriented programming, and web application development.",
    skills: ["PHP", "MySQL", "Object-Oriented Programming", "Web Applications", "Database Design", "LAMP Stack"],
    credentialId: "AN2HDULGYR4",
    certificateImage: "/certificates/images/PHP-MOOCS.svg",
    certificateFile: "/certificates/pdfs/PHP-MOOCS.pdf",
    verifyLink: "https://coursera.org/verify/AN2HDULGYR4",
    logo: "🐘",
    featured: true,
    completionDate: "October 27, 2023",
    validityPeriod: "Lifetime",
    certificateType: "Professional",
    duration: "90 hours",
    grade: "Completed",
    instructorName: "University of Michigan Team",
  },
  {
    id: 5,
    title: "Oracle Database Course Online",
    issuer: "E-Box (Amphisoft)",
    date: "2022",
    description: "Oracle database certification covering database design, SQL programming, data modeling, and database administration fundamentals.",
    skills: ["Oracle Database", "SQL", "Database Design", "Data Modeling", "Database Administration", "PL/SQL"],
    credentialId: "ORACLE-EBOX-2022",
    certificateImage: "/certificates/images/Oracle.jpg",
    certificateFile: "/certificates/pdfs/Oracle.pdf",
    verifyLink: "#",
    logo: "🗄️",
    featured: false,
    completionDate: "July 2022",
    validityPeriod: "Lifetime",
    certificateType: "Professional",
    duration: "60 hours",
    grade: "Completed",
    instructorName: "E-Box Training Team",
  },
  {
    id: 6,
    title: "Introduction to HTML5",
    issuer: "University of Michigan",
    date: "November 2022",
    description: "HTML5 fundamentals certification covering semantic markup, modern web standards, and accessibility best practices.",
    skills: ["HTML5", "Semantic HTML", "Web Standards", "Accessibility", "Modern Markup"],
    credentialId: "NXFMMP46G9BK",
    certificateImage: "/certificates/images/HTML5.jpg",
    certificateFile: "/certificates/pdfs/HTML5.pdf",
    verifyLink: "https://coursera.org/verify/NXFMMP46G9BK",
    logo: "📄",
    featured: false,
    completionDate: "November 28, 2022",
    validityPeriod: "Lifetime",
    certificateType: "Completion",
    duration: "40 hours",
    grade: "Completed",
    instructorName: "University of Michigan Team",
  }
];

// Instructions for updating:
// 1. Replace all placeholder text with your actual information
// 2. Add your certificate PDF files to the public/certificates/ folder
// 3. Update the certificateFile paths to match your actual files
// 4. Add more projects, certificates, and skills as needed
// 5. Update social media links with your actual profiles
