import { Component, inject } from '@angular/core';
import { PDetailsNav } from './p-details-nav/p-details-nav';
import { PDetailsTitle } from './p-details-title/p-details-title';
import { PDetailsSnapshot } from './p-details-snapshot/p-details-snapshot';
import { PDetailsDescription } from './p-details-description/p-details-description';
import { PDetailsContent } from './p-details-content/p-details-content';
import { PDetailsMore } from './p-details-more/p-details-more';
import { ActivatedRoute } from '@angular/router';
import { ProjectsDataService } from '../../services/projects-data/projects-data-service';

@Component({
  selector: 'app-project-details',
  imports: [
    PDetailsNav,
    PDetailsTitle,
    PDetailsSnapshot,
    PDetailsDescription,
    PDetailsContent,
    PDetailsMore,
  ],
  templateUrl: './project-details.html',
  styleUrl: './project-details.scss',
})
export class ProjectDetails {
  private readonly route = inject(ActivatedRoute);
  protected readonly projectsData = inject(ProjectsDataService);

  protected readonly uuid = this.route.snapshot.paramMap.get('uuid')!;

  protected readonly project = this.projectsData.getProjectByUuid(this.uuid);
}
