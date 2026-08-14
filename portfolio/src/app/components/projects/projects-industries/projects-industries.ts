import { Component } from '@angular/core';
import { industries, Industry } from '../temp';

@Component({
  selector: 'app-projects-industries',
  imports: [],
  templateUrl: './projects-industries.html',
  styleUrl: './projects-industries.scss',
})
export class ProjectsIndustries {
  industries: Industry[] = industries;
}
