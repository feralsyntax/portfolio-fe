import { Component } from '@angular/core';

@Component({
  selector: 'app-p-details-content',
  imports: [],
  templateUrl: './p-details-content.html',
  styleUrl: './p-details-content.scss',
})
export class PDetailsContent {
  frontendTechnologies = ['Angular', 'TypeScript'];

  backendTechnologies = ['Django', 'Python', 'PostgreSQL'];

  otherTechnologies = ['Docker', 'AWS'];

  features = [
    {
      name: 'Workflow',
      description: 'Maker-checker approval flow for data integrity.',
    },
    {
      name: 'Tracking',
      description: 'Real-time inventory and sales monitoring.',
    },
    {
      name: 'Operations',
      description: 'Automated shift handovers and incident logging.',
    },
  ];
}
