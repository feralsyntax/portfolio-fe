import { Component } from '@angular/core';

@Component({
  selector: 'app-projects-features',
  imports: [],
  templateUrl: './projects-features.html',
  styleUrl: './projects-features.scss',
})
export class ProjectsFeatures {
  features = [
    'Admin Portals & Operations Dashboards',
    'LLM / AI Integration Pipelines',
    'Real-time Telemetry & Data Visualization',
    'Enterprise Auth & RBAC Systems',
    'RESTful / GraphQL API Design',
    'Edge Deployments & Microservices',
  ];
}
