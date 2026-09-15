import { Component, computed, inject } from '@angular/core';
import { PDetailsNav } from './p-details-nav/p-details-nav';
import { PDetailsTitle } from './p-details-title/p-details-title';
import { PDetailsSnapshot } from './p-details-snapshot/p-details-snapshot';
import { PDetailsDescription } from './p-details-description/p-details-description';
import { PDetailsContent } from './p-details-content/p-details-content';
import { PDetailsMore } from './p-details-more/p-details-more';
import { ActivatedRoute } from '@angular/router';
import {
  ProjectsDataService,
  ProjectTechs,
} from '../../services/projects-data/projects-data-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/internal/operators/map';

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

  protected readonly uuid = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('uuid'))),
    { initialValue: null },
  );

  protected readonly project = computed(() => {
    const uuid = this.uuid();

    return uuid ? this.projectsData.getProjectByUuid(uuid) : undefined;
  });

  protected readonly technologies = computed(() => {
    const project = this.project();

    return project ? this.projectsData.getTechs(project) : undefined;
  });

  protected readonly otherProjects = computed(() => {
    const uuid = this.uuid();

    return uuid ? this.projectsData.getOtherProjects(uuid) : undefined;
  });
}
