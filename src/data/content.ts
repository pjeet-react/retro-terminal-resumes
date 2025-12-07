// ============================================
// CONTENT CONFIGURATION
// Edit this file to update all portfolio content
// ============================================

export const personalInfo = {
  name: "PARTHJEET",
  role: "DevOps Engineer",
  tagline: "Building resilient infrastructure, one pipeline at a time",
  bio: "Passionate about automating everything, scaling systems to handle millions, and making deployment a breeze. I bridge the gap between development and operations with elegant solutions.",
  location: "San Francisco, CA",
  availability: "Open to opportunities",
};

export const socialLinks = {
  linkedin: "https://linkedin.com/in/parthjeet",
  github: "https://github.com/parthjeet",
  email: "parthjeet@example.com",
};

export const experience = [
  {
    id: 1,
    role: "Senior DevOps Engineer",
    company: "TechCorp Industries",
    period: "2022 - Present",
    description: "Leading infrastructure automation initiatives, managing Kubernetes clusters at scale, and implementing GitOps practices across 50+ microservices.",
    technologies: ["Kubernetes", "Terraform", "ArgoCD", "AWS"],
  },
  {
    id: 2,
    role: "DevOps Engineer",
    company: "CloudScale Solutions",
    period: "2020 - 2022",
    description: "Built and maintained CI/CD pipelines, reduced deployment time by 80%, and implemented infrastructure as code practices.",
    technologies: ["Jenkins", "Docker", "Ansible", "GCP"],
  },
  {
    id: 3,
    role: "Systems Engineer",
    company: "StartupXYZ",
    period: "2018 - 2020",
    description: "Managed cloud infrastructure, automated server provisioning, and established monitoring and alerting systems.",
    technologies: ["Linux", "Python", "Prometheus", "Grafana"],
  },
];

export const skills = {
  cloud: [
    { name: "AWS", level: "Expert", icon: "☁️" },
    { name: "GCP", level: "Advanced", icon: "🌐" },
    { name: "Azure", level: "Intermediate", icon: "⚡" },
  ],
  containers: [
    { name: "Docker", level: "Expert", icon: "🐳" },
    { name: "Kubernetes", level: "Expert", icon: "☸️" },
    { name: "Helm", level: "Advanced", icon: "⎈" },
  ],
  cicd: [
    { name: "Jenkins", level: "Expert", icon: "🔧" },
    { name: "GitHub Actions", level: "Advanced", icon: "🔄" },
    { name: "ArgoCD", level: "Advanced", icon: "🚀" },
  ],
  iac: [
    { name: "Terraform", level: "Expert", icon: "🏗️" },
    { name: "Ansible", level: "Advanced", icon: "📜" },
    { name: "Pulumi", level: "Intermediate", icon: "💨" },
  ],
  scripting: [
    { name: "Python", level: "Expert", icon: "🐍" },
    { name: "Bash", level: "Expert", icon: "💻" },
    { name: "Go", level: "Intermediate", icon: "🔹" },
  ],
  monitoring: [
    { name: "Prometheus", level: "Advanced", icon: "📊" },
    { name: "Grafana", level: "Advanced", icon: "📈" },
    { name: "ELK Stack", level: "Advanced", icon: "🔍" },
  ],
};

export const projects = [
  {
    id: 1,
    title: "K8s Auto-Scaler",
    description: "Custom Kubernetes autoscaler that predicts traffic patterns using ML and pre-scales infrastructure accordingly.",
    technologies: ["Kubernetes", "Python", "TensorFlow"],
    github: "https://github.com/parthjeet/k8s-autoscaler",
    live: null,
  },
  {
    id: 2,
    title: "Infrastructure Dashboard",
    description: "Real-time infrastructure monitoring dashboard with cost optimization recommendations.",
    technologies: ["React", "Go", "Prometheus"],
    github: "https://github.com/parthjeet/infra-dashboard",
    live: "https://dashboard.example.com",
  },
  {
    id: 3,
    title: "GitOps Pipeline Template",
    description: "Production-ready GitOps pipeline template with ArgoCD, automated testing, and rollback capabilities.",
    technologies: ["ArgoCD", "Helm", "GitHub Actions"],
    github: "https://github.com/parthjeet/gitops-template",
    live: null,
  },
  {
    id: 4,
    title: "Secret Manager CLI",
    description: "CLI tool for managing secrets across multiple cloud providers with encryption at rest.",
    technologies: ["Go", "AWS KMS", "HashiCorp Vault"],
    github: "https://github.com/parthjeet/secret-cli",
    live: null,
  },
];

export const education = [
  {
    id: 1,
    degree: "B.S. Computer Science",
    institution: "University of Technology",
    period: "2014 - 2018",
    details: "Focus on distributed systems and cloud computing",
  },
  {
    id: 2,
    degree: "AWS Solutions Architect Professional",
    institution: "Amazon Web Services",
    period: "2021",
    details: "Professional certification for designing distributed systems on AWS",
  },
  {
    id: 3,
    degree: "Certified Kubernetes Administrator",
    institution: "CNCF",
    period: "2020",
    details: "Certification for Kubernetes cluster administration",
  },
];

export const sections = [
  { id: "about", label: "ABOUT", icon: "👤" },
  { id: "experience", label: "LOG", icon: "📋" },
  { id: "skills", label: "TECH", icon: "🎮" },
  { id: "projects", label: "PROGRAMS", icon: "💾" },
  { id: "education", label: "CERTS", icon: "📜" },
  { id: "contact", label: "CONNECT", icon: "📡" },
];
