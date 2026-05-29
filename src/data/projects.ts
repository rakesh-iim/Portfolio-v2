import { Code, ExternalLink } from 'lucide-react';

export const projects = [
  {
    id: 'aether',
    title: 'Aether Analytics',
    description:
      'Real-time threat detection dashboard leveraging machine learning models to identify network anomalies with minimal latency.',
    longDescription:
      'Aether Analytics provides real-time visibility into network traffic, combining advanced machine learning with a highly optimized frontend to detect, flag, and mitigate security threats. Built with a strong focus on minimal latency, processing thousands of events per second while maintaining a smooth experience.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3',
    techList: ['Python', 'TensorFlow', 'Vue.js'],
    links: [
      { label: 'Live Demo', icon: ExternalLink, href: '#', primary: true },
      { label: 'GitHub', icon: Code, href: '#', primary: false },
    ],
  },
  {
    id: 'nexus',
    title: 'Project Nexus',
    description:
      'A decentralized application platform built on Ethereum, focusing on reducing gas fees through optimistic rollups.',
    longDescription:
      'Project Nexus tackles the core challenge of blockchain scalability by integrating optimistic rollups into a comprehensive developer platform. It allows decentralized applications to operate at a fraction of the traditional cost, offering elegant tooling for developers to deploy their smart contracts efficiently and securely.',
    image:
      'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=2574&ixlib=rb-4.0.3',
    techList: ['Solidity', 'Next.js', 'Ethers.js'],
    links: [{ label: 'View Project', icon: ExternalLink, href: '#', primary: true }],
  },
] as const;
