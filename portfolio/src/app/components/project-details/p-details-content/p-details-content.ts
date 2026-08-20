import { Component, input } from '@angular/core';
import { Project } from '../../../api/openapi';
import { ProjectTechs } from '../../../services/projects-data/projects-data-service';

@Component({
  selector: 'app-p-details-content',
  imports: [],
  templateUrl: './p-details-content.html',
  styleUrl: './p-details-content.scss',
})
export class PDetailsContent {
  readonly projectDetails = input<Project | undefined>(undefined);
  readonly technologies = input<ProjectTechs | undefined>(undefined);
}
