import { Routes } from '@angular/router';
import { LandingPage } from './components/landing-page/landing-page';
import { Projects } from './components/projects/projects';

export const routes: Routes = [
  { path: '', component: LandingPage, title: 'Welcome' },
  { path: 'projects', component: Projects, title: 'All Projects' },
];
