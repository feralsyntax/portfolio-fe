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
  readonly timelineTitle = 'The Path So Far';

  readonly milestone1: Milestone = {
    label: 'Early Days (2017)',
    title: 'The Spark',
    description: `Joined Kenya Highlands University to pursue Certificate in IT, driven by curiosity about
            how systems work.`,
  };

  readonly milestone2: Milestone = {
    label: 'Full-Stack Era (2022)',
    title: 'Developer Foundations',
    description: `Joined Moringa School to pursue a certificate in Full-Stack Software Development with
            Angular, Django, and Flask. Built a fuel station management app and learned the realities of production software.`,
  };

  readonly milestone3: Milestone = {
    label: 'Front-End Era (2023)',
    title: 'Industry Experience',
    description: `Joined I&M Bank Ltd as a Frontend Engineer Intern. Collaborated with cross-functional
            teams to bridge the gap between design and its implementation. Developed requisite React skills.`,
  };

  readonly milestone4: Milestone = {
    label: 'Freelancing (2024 & 2025)',
    title: 'Understanding the Web',
    description: `Worked as a freelance SEO writer while continuing to develop my technical skills. 
          Writing for different audiences sharpened my ability to communicate clearly and gave me a
          deeper understanding of search, content, and how people interact with the web.`,
  };

  readonly milestone5: Milestone = {
    label: 'Modern Web (2026 - Present)',
    title: 'CS & Human-Centered AI',
    description: `Joined Kabarak University to pursue BSC in Computer Science. Created AI tools that help
            Kenyan youth discover themselves (Nia) and people with ADHD manage daily challenges
            (Zenth).`,
  };

  readonly milestone6: Milestone = {
    label: 'The Path Ahead (2026 - Present)',
    title: 'Distributed Systems',
    description: 'Diving deep into infrastructure of the future, IoT, and Edge computing.',
  };
}
