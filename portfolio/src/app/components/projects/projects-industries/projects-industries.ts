import { Component, input } from '@angular/core';
import { Industry } from '../../../api/openapi';

@Component({
  selector: 'app-projects-industries',
  imports: [],
  templateUrl: './projects-industries.html',
  styleUrl: './projects-industries.scss',
})
export class ProjectsIndustries {
  readonly industries = input<Industry[]>([]);
}
