import { Component, input } from '@angular/core';
import { Technology } from '../../../api/openapi';

@Component({
  selector: 'app-projects-technologies',
  imports: [],
  templateUrl: './projects-technologies.html',
  styleUrl: './projects-technologies.scss',
})
export class ProjectsTechnologies {
  readonly technologies = input<Technology[]>([]);
}
