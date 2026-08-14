import { Component } from '@angular/core';
import { technologies, Technology } from '../temp';

@Component({
  selector: 'app-projects-technologies',
  imports: [],
  templateUrl: './projects-technologies.html',
  styleUrl: './projects-technologies.scss',
})
export class ProjectsTechnologies {
  technologies: Technology[] = technologies;
}
