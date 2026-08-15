import { Component, computed, input } from '@angular/core';
import { Feature } from '../../../api/openapi';

@Component({
  selector: 'app-projects-features',
  imports: [],
  templateUrl: './projects-features.html',
  styleUrl: './projects-features.scss',
})
export class ProjectsFeatures {
  readonly features = input<Feature[]>([]);

  
}
