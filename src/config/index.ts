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
    { text: "Research", href: "#research" },
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
      degree: "Master of Information Technology Strategy - Data Analytics",
      startDate: "Aug 2025",
      endDate: "Aug 2026",
      coursework: [
        "10-601 Introduction to Machine Learning",
        "11-685 Intro to Deep Learning",
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
        ".",
      ]
    },
  ],
  experience: [
    {
      company: "Ernst & Young",
      position: "Associate Consultant in Cybersecurity",
      startDate: "Aug 2024",
      endDate: "July 2025",
      summary: [
        "Partnered with product owners to perform security assessments for a global FMCG client, leveraging knowledge of cloud infrastructure, application architecture, and SDLC to ensure adherence with NIST, SOC 2, and ICF frameworks, and prepared detailed reports on security gaps, helping improve each application security by ~30%.",
        "Reviewed and optimized the assessment procedure, contributing to the migration from ICF to NIST framework, expanding test criteria from 78 to 250 controls, making evaluations more thorough and detailed.",
      ],
      techStack: [],
    },
  ],
  research: [
    {
      company: "Center of Academic Analytics, PES University Research Foundation",
      position: "Undergraduate Researcher",
      startDate: "Feb 2024",
      endDate: "May 2024",
      summary: [
        "Feature-engineered a 50-variable likert-scale dataset; applied correlation analysis & K-means clustering to reduce dimensions by 50%, boosting model accuracy to 94%, uncovering patterns between the Learnability Index (LI) and feature clusters.",
        "Implemented and compared predictive models (Polynomial MLR, SVM, Random Forest, Neural Networks) to validate LI's impact, achieving 96% accuracy with Polynomial MLR performing the best and quantifying that non-cognitive skills contribute ~18% to academic performance.",
        "Collaborated with academic stakeholders to deploy a data-driven intervention platform; translated analytical findings into actionable product features improving early-warning accuracy by ~18%.",
      ],
    },
  ],
  skills: {
    items: [
      "Python",
      "Java",
      "SQL",
      "Pandas",
      "NumPy",
      "PyTorch",
      "Scikit-learn",
      "OpenCV",
      "Matplotlib",
      "LangGraph",
      "Git",
      "Docker",
      "AWS (EC2, S3, SageMaker)"
    ]
  },
  projects: [
    {
      name: "Exploring Branch Popularity and Student Demand in Engineering (GraphSAGE)",
      summary: [
        "Implemented an inductive GraphSAGE pipeline in PyTorch on a student–branch graph built with NetworkX, reaching 90% node classification accuracy after hyperparameter optimization.",
        "Ranked 2nd among all participants in a Kaggle competition conducted as part of an undergraduate course",
      ],
      techStack: ["Python", "NetworkX", "PyTorch", "GraphSAGE", "Jupyter Notebook"],
      linkSource: "https://github.com/sru1105/graphsage-prediction.git",
    },
    {
      name: "Diamond Price Prediction",
      summary: [
        "Built a high-precision diamond price prediction model using CatBoost Regression, achieving an R² score of 0.9872",
        "Identified key price drivers through correlation analysis, PCA, and recursive feature elimination on 54,000+ samples with numerical and categorical features",
      ],
      techStack: ["Python", "CatBoost", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
      linkSource: "https://github.com/sru1105/diamond-price-prediction.git",
    },
    {
      name: "Strategic Portfolio Management System Using Bio-Inspired Algorithms",
      summary: [
        "Feature engineered and structured 12+ years of historical and real-time stock data collected via the YFinance API; enabled user interaction through a lightweight rule-based NLP chatbot for input and risk profiling",
        "Implemented and evaluated a portfolio optimization engine using Particle Swarm Optimization (PSO), enhanced with rebalancing and diversification via the Firefly Algorithm, achieving ~5% higher returns and ~2% lower portfolio risk",
        "Simulated long-term investment strategies delivering 24% profit within the first 28% of the time horizon, outperforming the market average return (~20%)",
        "Published and presented this work at the International Conference on Interdisciplinary Research in Technology & Management (2024)",
      ],
      techStack: [
        "Python",
        "Pandas",
        "NumPy",
        "YFinance",
        "pyswarm (PSO)",
        "Firefly Algorithm",
        "Matplotlib",
      ],
      linkSource: "https://github.com/sru1105/portfolio-management-system-bioinspiredalgos.git",
    }
    ,
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
