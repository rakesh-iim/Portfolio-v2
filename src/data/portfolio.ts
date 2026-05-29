export const personalInfo = {
  name: 'Rakesh Kumar Behera',
  brand: 'RAKESH.KB',
  role: 'Software Engineer',
  tagline: 'Tech Innovator',
  about: [
    'I am a passionate Software Engineer driven by a relentless pursuit of technical excellence and innovative problem-solving. My engineering mindset is rooted in building scalable, robust architectures that translate complex requirements into elegant, high-performance solutions.',
    'With a focus on modern web technologies and a deep appreciation for polished product experiences, I strive to bridge the gap between complex backend systems and seamless, intuitive user experiences. Every line of code is an opportunity to craft something enduring.',
  ],
};

export const contactInfo = {
  email: 'hello@rakeshkb.dev',
};

export const heroPhrases = ['Software Engineer', 'Problem Solver', 'Tech Innovator'];

export const aboutStats = {
  yearsExperience: 5,
  projectsDone: 40,
};

export const socialLinks = [
  { href: '#', label: 'GitHub' },
  { href: '#', label: 'LinkedIn' },
  { href: '#', label: 'Twitter' },
  { href: `mailto:${contactInfo.email}`, label: 'Email' },
] as const;

export const skillCategories = {
  frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  backend: ['Node.js', 'Python', 'PostgreSQL', 'GraphQL'],
  devops: ['AWS', 'Docker', 'CI/CD', 'Kubernetes'],
};

export const techDetails: Record<string, string> = {
  React: 'Expert - 4+ years building complex SPAs',
  'Next.js': 'Advanced - Production SSR & full-stack apps',
  TypeScript: 'Expert - Strict type safety & advanced patterns',
  'Tailwind CSS': 'Expert - Utility-first responsive design',
  'Node.js': 'Advanced - REST APIs & scalable microservices',
  Python: 'Intermediate - Data processing & scripting',
  PostgreSQL: 'Advanced - Schema design & optimization',
  GraphQL: 'Intermediate - Type-safe APIs & graph queries',
  AWS: 'Intermediate - EC2, S3, ECS, Lambda',
  Docker: 'Advanced - Containerization & deployment pipelines',
  'CI/CD': 'Advanced - GitHub Actions & automated testing',
  Kubernetes: 'Competent - Container orchestration & scaling',
};

export const experiences = [
  {
    period: '2021 - Present',
    role: 'Senior Software Engineer',
    company: 'TechNova Solutions',
    summary:
      'Architected and deployed scalable microservices using Go and gRPC, reducing latency by 40%. Led a team of 5 engineers in migrating legacy monolith to a Kubernetes-based infrastructure.',
    technologies: ['Go', 'Kubernetes', 'AWS'],
  },
  {
    period: '2018 - 2021',
    role: 'Frontend Engineer',
    company: 'DataVizion Inc.',
    summary:
      'Developed high-performance frontend interfaces using React and WebGL for data visualization dashboards used by Fortune 500 clients.',
    technologies: ['React', 'WebGL', 'TypeScript'],
  },
];
