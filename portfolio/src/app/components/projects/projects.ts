import { Component } from '@angular/core';
import { ProjectsPageContext } from './projects-page-context/projects-page-context';
import { ProjectsContent } from './projects-content/projects-content';
import { ProjectsFeatures } from './projects-features/projects-features';
import { ProjectsTechnologies } from './projects-technologies/projects-technologies';
import { ProjectsIndustries } from './projects-industries/projects-industries';

@Component({
  selector: 'app-projects',
  imports: [
    ProjectsPageContext,
    ProjectsContent,
    ProjectsTechnologies,
    ProjectsFeatures,
    ProjectsIndustries,
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {}
