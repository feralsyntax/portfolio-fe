import { Routes } from '@angular/router';
import { LandingPage } from './components/landing-page/landing-page';
import { Projects } from './components/projects/projects';
import { ProjectDetails } from './components/project-details/project-details';

export const routes: Routes = [
  { path: '', component: LandingPage, title: 'Welcome' },
  { path: 'projects', component: Projects, title: 'All Projects' },
  { path: 'p/:uuid', component: ProjectDetails, title: 'Project Details' },
];
