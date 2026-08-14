import { Component } from '@angular/core';
interface CurrentlyExploring {
  title: string;
  description: string;
  accent: 'primary' | 'secondary';
}
@Component({
  selector: 'app-about-exploring',
  imports: [],
  templateUrl: './about-exploring.html',
  styleUrl: './about-exploring.scss',
})
export class AboutExploring {
  currentlyExploring: CurrentlyExploring[] = [
    {
      title: 'AI Agents',
      description:
        'Building autonomous systems that bridge the gap between complex workflows and intuitive human interaction.',
      accent: 'primary',
    },
    {
      title: 'Distributed Systems',
      description:
        'Architecting resilient, scalable infrastructures for the next generation of edge computing and IoT.',
      accent: 'secondary',
    },
  ];
}
