import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Srushti Venkatesh Reddy",
  author: "Srushti Venkatesh Reddy",
  description:
    "Masters student at CMU, building applied ML, optimization engines, and AI-driven applications",
  lang: "en",
  siteLogo: "/srushti-small.jpg",
  navLinks: [
    { text: "Education", href: "#education" },
    { text: "Experience", href: "#experience" },
    { text: "Skills", href: "#skills" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/srushti-venkatesh-reddy/" },
    { text: "Github", href: "https://github.com/sru1105" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://srushti.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Srushti Venkatesh Reddy",
    specialty: "Applied ML & Data Science",
    summary:
      "Masters student at CMU, building ML systems, optimization engines, and AI-driven applications. Experienced in data pipelines, portfolio optimization, and full-stack ML deployment.",
    email: "srushtiv@andrew.cmu.edu",
    skills: ["Python", "PyTorch", "AWS", "Docker", "SQL"],
  },
  education: [
    {
      institution: "Carnegie Mellon University",
      degree: "Master of Information Technolog Strategy - Data ",
      startDate: "Aug 2025",
      endDate: "Aug 2026",
      coursework: [
        "10-601 Intro to ML",
        "11-685 Intro to DL",
        "17-636 Devops"
      ]
    },
    {
      institution: "PES University",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      specialization: "Specialization: Machine Intelligence and Data Science",
      startDate: "2020",
      endDate: "2024",
      coursework: [
        "Data Structures and Algorithms",
        "Database Management Systems",
        "Operating Systems",
        "Computer Networks",
        "Computer Architecture",
        "Compiler Design",
        "Artificial Intelligence",
        "Machine Learning",
        "Data Science",
      ]
    },
  ],
  experience: [
    {
      company: "",
      position: "Lead Android Developer",
      startDate: "May 2018",
      endDate: "Sept 2020",
      summary: [
        "Implemented advanced memory management and code optimization techniques, reducing app load time by 40% and crashes by 25%, improving user retention by 20%.",
        "Led a team integrating new features using Jetpack components (LiveData, ViewModel), building scalable applications and reducing delivery time by 15%.",
        "Integrated Google Pay for in-app purchases, increasing transaction revenue by 35%, and implemented Firebase Analytics to optimize user engagement by 30%."
      ],
    },
    {
      company: "Bankit",
      position: "Mobile Developer",
      startDate: "Feb 2017",
      endDate: "May 2018",
      summary: [
        "Developed a cross-platform mobile app using Flutter, reducing development time by 50% and maintenance costs by 30%.",
        "Integrated biometric authentication and data encryption, improving security and user trust, reducing unauthorized access attempts by 25%."
      ],
    },
    {
      company: "Driveer",
      position: "Frontend Developer",
      startDate: "Jun 2015",
      endDate: "Oct 2016",
      summary:
        "Built a real-time vehicle tracking system using WebSockets, improving data accuracy and update speed, increasing user satisfaction by 30% and reducing support inquiries by 25%.",
    },
  ],
  skills: {
    categories: [
      {
        name: "Programming Languages",
        items: ["Python", "Java", "SQL"]
      },
      {
        name: "AI/ML",
        items: ["Pandas", "NumPy", "PyTorch", "Scikit-learn", "OpenCV", "Matplotlib", "LangGraph"]
      },
      {
        name: "Cloud",
        items: ["Git", "Docker", "AWS (EC2, S3, SageMaker)"]
      }
    ]
  },
  projects: [
    {
      name: "Diamond Price Prediction",
      summary: [
        "Developed a high-precision Diamond Price Prediction engine using CatBoost Regression, achieving a state-of-the-art R² score of 0.99",
        "Optimized model performance by performing Correlation Analysis, PCA, and Recursive Feature Elimination to identify key price drivers",
        "Analyzed 54,000+ data points with 11 features including physical attributes (Carat, dimensions) and categorical features (Cut, Color, Clarity)",
      ],
      techStack: ["Python", "CatBoost", "Scikit-learn", "Pandas", "NumPy", "PCA", "Matplotlib", "Seaborn"],
      linkSource: "https://github.com/sru1105/diamond-price-prediction.git",
    },
    {
      name: "Project 2",
      summary: [
        "Bullet point 1 for project 2",
        "Bullet point 2 for project 2",
        "Bullet point 3 for project 2",
      ],
      techStack: ["Tech 1", "Tech 2", "Tech 3"],
      linkSource: "https://github.com/sru1105/project2",
    },
    {
      name: "Project 3",
      summary: [
        "Bullet point 1 for project 3",
        "Bullet point 2 for project 3",
        "Bullet point 3 for project 3",
      ],
      techStack: ["Tech 1", "Tech 2", "Tech 3"],
      linkSource: "https://github.com/sru1105/project3",
    },
    {
      name: "Project 4",
      summary: [
        "Bullet point 1 for project 4",
        "Bullet point 2 for project 4",
        "Bullet point 3 for project 4",
      ],
      techStack: ["Tech 1", "Tech 2", "Tech 3"],
      linkSource: "https://github.com/sru1105/project4",
    },
    {
      name: "Project 5",
      summary: [
        "Bullet point 1 for project 5",
        "Bullet point 2 for project 5",
        "Bullet point 3 for project 5",
      ],
      techStack: ["Tech 1", "Tech 2", "Tech 3"],
      linkSource: "https://github.com/sru1105/project5",
    },
    {
      name: "Project 6",
      summary: [
        "Bullet point 1 for project 6",
        "Bullet point 2 for project 6",
        "Bullet point 3 for project 6",
      ],
      techStack: ["Tech 1", "Tech 2", "Tech 3"],
      linkSource: "https://github.com/sru1105/project6",
    },
  ],
  about: {
    description: `
      Hi, I’m Srushti Venkatesh Reddy, a Masters student at CMU passionate about Applied Machine Learning and Data Science. 
      I specialize in building ML systems, optimization engines, and AI-driven applications that combine modeling, data engineering, and deployment.

      My work spans from designing robust data workflows and feature engineering to implementing optimization algorithms and full-stack ML applications. 
      I enjoy creating solutions that are both technically sound and impactful in real-world scenarios.
    `,
    image: "/srushti-big.jpg",
  },
};
