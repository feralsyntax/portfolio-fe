export interface Project {
  year: number;
  category: string;
  name: string;
  description: string;
  technologies: string[];
  batch: number;
  accent?: 'logistics' | 'ai' | 'fintech';
}

export const projects: Project[] = [
    {
      year: 2023,
      category: 'LOGISTICS',
      name: 'Fuel Station Management',
      description:
        'Enterprise dashboard for real-time telemetry, inventory tracking, and predictive dispatch across 500+ nodes.',
      technologies: ['REACT', 'NODE.JS', 'POSTGRES'],
      batch: 0,
      accent: 'logistics',
    },
    {
      year: 2024,
      category: 'AI/ML',
      name: 'Nia Intelligence',
      description:
        'Context-aware conversational agent architecture leveraging local LLMs and vector databases for internal knowledge retrieval.',
      technologies: ['PYTHON', 'LANGCHAIN', 'WEAVIATE'],
      batch: 0,
      accent: 'ai',
    },
    {
      year: 2022,
      category: 'FINTECH',
      name: 'Zenth Core',
      description:
        'High-throughput transaction processing engine built for resilience. Handles ledger conciliation with microsecond latency.',
      technologies: ['GOLANG', 'KAFKA', 'REDIS'],
      batch: 0,
      accent: 'fintech',
    },
    {
      year: 2024,
      category: 'AGENTIC',
      name: 'AI Agent Project',
      description:
        'Autonomous task orchestration framework utilizing multi-agent negotiation patterns.',
      technologies: [],
      batch: 1,
    },
    {
      year: 2023,
      category: 'INFRA',
      name: 'Distributed Systems',
      description:
        'Implementation of consensus algorithms for decentralized state machines.',
      technologies: [],
      batch: 1,
    },
    {
      year: 2023,
      category: 'HARDWARE',
      name: 'IoT Edge Computing',
      description:
        'Firmware and coordination layer for low-power sensor networks.',
      technologies: [],
      batch: 1,
    },
    {
      year: 2022,
      category: 'UI/UX',
      name: 'Frontend Component Lib',
      description:
        'Accessible, headless design system primitives for rapid application assembly.',
      technologies: [],
      batch: 2,
    },
    {
      year: 2021,
      category: 'SAAS',
      name: 'SaaS Starter',
      description:
        'Monorepo boilerplate integrating auth, billing, and multi-tenancy.',
      technologies: [],
      batch: 2,
    },
    {
      year: 2024,
      category: 'ML',
      name: 'Edge AI Inference',
      description:
        'Optimizing ONNX models for execution on resource-constrained microcontrollers.',
      technologies: [],
      batch: 2,
    },
  ];
