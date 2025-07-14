# Portfolio Website

A modern, responsive portfolio website built with React for showcasing skills, projects, and achievements.

## 🚀 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Fully Responsive**: Mobile-first design that works on all devices
- **Interactive Components**: Smooth scrolling navigation, animated skill bars, project filters
- **Certificate Viewer**: Modal popup to view and download certificates
- **Contact Form**: Working contact form with validation
- **Resume Integration**: Direct resume download and viewing
- **Customizable**: Easy to update with your personal information

## 🛠️ Tech Stack

- **Frontend**: React, HTML5, CSS3, JavaScript (ES6+)
- **Build Tool**: Vite
- **Styling**: Pure CSS with CSS custom properties
- **Icons**: Emoji-based icons for fast loading
- **Animations**: CSS-based animations and transitions

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── Navbar.jsx       # Navigation bar
│   ├── Hero.jsx         # Hero/Home section
│   ├── About.jsx        # About section
│   ├── Skills.jsx       # Skills showcase
│   ├── Projects.jsx     # Projects portfolio
│   ├── Certificates.jsx # Certificates with viewer
│   ├── Contact.jsx      # Contact form
│   └── Footer.jsx       # Footer
├── data/
│   └── personalData.js  # Your personal information
├── styles/
│   └── global.css       # Global styles and variables
└── App.jsx              # Main app component

public/
├── certificates/        # Store your certificate PDFs here
└── Resumemain.pdf      # Your resume file
```

## 🎯 Customization Guide

### 1. Update Personal Information

Edit `src/data/personalData.js` with your details:

```javascript
export const personalInfo = {
  name: "Your Name",
  title: "Your Professional Title",
  email: "your.email@example.com",
  phone: "+1 (555) 123-4567",
  location: "Your City, Country",
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourusername",
  twitter: "https://twitter.com/yourusername"
};
```

### 2. Add Your Projects

Update the `projects` array in `personalData.js`:

```javascript
{
  id: 1,
  title: "Project Name",
  description: "Project description...",
  techStack: ["React", "CSS3", "JavaScript"],
  category: "web", // or "design"
  githubLink: "https://github.com/username/project",
  liveLink: "https://yourproject.com",
  featured: true, // Show in featured section
  image: "/api/placeholder/400/250"
}
```

### 3. Add Your Certificates

1. **Save certificate PDFs** in `public/certificates/` folder
2. **Update the certificates array** in `personalData.js`:

```javascript
{
  id: 1,
  title: "Certificate Name",
  issuer: "Issuing Organization",
  date: "2024",
  description: "What this certificate covers...",
  skills: ["Skill1", "Skill2", "Skill3"],
  credentialId: "credential-id",
  certificateFile: "/certificates/your-certificate.pdf",
  verifyLink: "https://verify-link.com", // or "#" if none
  logo: "📜",
  featured: true
}
```

### 4. Update Skills

Modify the `skills` object in `personalData.js`:

```javascript
export const skills = {
  technical: [
    { name: "HTML5", level: 90, category: "Frontend" },
    { name: "CSS3", level: 85, category: "Frontend" },
    // Add more skills...
  ],
  soft: [
    "Communication",
    "Problem Solving",
    // Add more soft skills...
  ]
};
```

### 5. Update Education

Edit the `education` array in `personalData.js`:

```javascript
{
  degree: "Your Degree",
  institution: "Your University",
  year: "Start Year - End Year",
  grade: "Your Grade/CGPA",
  location: "City, Country"
}
```

### 6. Replace Resume

1. **Replace** `public/Resumemain.pdf` with your resume
2. **Update filename** in Contact component if needed

## 🚀 Getting Started

1. **Clone the repository**
```bash
git clone <repository-url>
cd portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Build for production**
```bash
npm run build
```

## 📱 Responsive Design

The portfolio is built with a mobile-first approach and includes:

- **Mobile**: < 768px - Single column layout
- **Tablet**: 768px - 1024px - Adapted layouts
- **Desktop**: > 1024px - Full multi-column layouts

## 🎨 Customizing Styles

### Colors and Theme

Edit CSS custom properties in `src/styles/global.css`:

```css
:root {
  --primary-color: #2563eb;      /* Main brand color */
  --secondary-color: #1e40af;    /* Secondary brand color */
  --accent-color: #3b82f6;       /* Accent color */
  /* ... more variables */
}
```

### Adding Dark Mode

The portfolio includes basic dark mode support through CSS media queries. You can extend this by adding a toggle button.

## 📄 Certificate Management

### Adding Certificates

1. **Save your certificates** as PDF files in `public/certificates/`
2. **Use descriptive filenames**: `react-certification.pdf`, `javascript-course.pdf`
3. **Update the data file** with correct paths
4. **Test the modal** to ensure certificates load properly

### Certificate Features

- **Modal viewer**: Click to view certificates in a popup
- **Download function**: Direct download of certificate files
- **Verification links**: Link to credential verification pages
- **Responsive design**: Works on all screen sizes

## 🔧 Development Tips

### Adding New Sections

1. **Create component** in `src/components/`
2. **Add styles** with matching CSS file
3. **Import and use** in `App.jsx`
4. **Update navigation** in `Navbar.jsx`

### Performance Optimization

- **Images**: Optimize images before adding
- **CSS**: Use CSS custom properties for consistency
- **JavaScript**: Keep components lightweight
- **Build**: Run `npm run build` for production optimization

## 📧 Contact Form

The contact form includes:

- **Client-side validation**
- **Loading states**
- **Success/error messaging**
- **Mobile-friendly design**

To add backend functionality, integrate with services like:
- **Netlify Forms**
- **Formspree**
- **EmailJS**
- **Custom backend API**

## 🚀 Deployment

### Netlify (Recommended)

1. **Build the project**: `npm run build`
2. **Deploy the `dist` folder** to Netlify
3. **Configure redirects** for SPA routing if needed

### Vercel

1. **Connect your GitHub repository**
2. **Vercel will auto-detect** Vite configuration
3. **Deploy automatically** on each push

### GitHub Pages

1. **Install gh-pages**: `npm install --save-dev gh-pages`
2. **Add deploy script** to package.json
3. **Run**: `npm run deploy`

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**
3. **Make your changes**
4. **Submit a pull request**

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙋‍♂️ Support

If you have questions or need help customizing your portfolio:

1. **Check the documentation** above
2. **Review the code comments** in the files
3. **Create an issue** on GitHub
4. **Contact** through the portfolio contact form

---

**Built with ❤️ using React and Vite**+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
