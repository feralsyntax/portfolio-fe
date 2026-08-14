import { Component } from '@angular/core';
interface Milestone {
  label: string;
  title: string;
  description: string;
}
@Component({
  selector: 'app-about-timeline',
  imports: [],
  templateUrl: './about-timeline.html',
  styleUrl: './about-timeline.scss',
})
export class AboutTimeline {
  milestones: Milestone[] = [
    {
      label: 'Early Days',
      title: 'The Spark',
      description: 'First lines of code, driven by curiosity about how systems work.',
    },
    {
      label: 'Full-Stack Era',
      title: 'Full-Stack Foundations',
      description:
        'Built a fuel station management app and learned the realities of production software.',
    },
    {
      label: 'Human-Centered AI',
      title: 'Nia & Zenth',
      description:
        'Created AI tools that help Kenyan youth discover themselves and people with ADHD manage daily challenges.',
    },
    {
      label: 'AI Agents',
      title: 'Agentic Workflows',
      description:
        'Exploring conversational AI agents integrated into real-world products and workflows.',
    },
    {
      label: 'The Path Ahead',
      title: 'Distributed Systems',
      description: 'Diving deep into IoT, Edge computing, and the infrastructure of the future.',
    },
    {
      label: 'Building in Public',
      title: 'Open Source',
      description:
        'Sharing what I learn, contributing to the community, and building software that lasts.',
    },
  ];
}
