import { computed, inject, Service } from '@angular/core';
import { Project, ProjectsService } from '../../api/openapi';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, map, of, startWith } from 'rxjs';

export type ProjectsState =
  | {
      status: 'loading';
      projects: Project[];
    }
  | {
      status: 'success';
      projects: Project[];
    }
  | {
      status: 'error';
      projects: Project[];
    };

@Service()
export class ProjectsDataService {
  private readonly projectsService = inject(ProjectsService);

  readonly state = toSignal(
    this.projectsService.projectsList().pipe(
      map((projects): ProjectsState => ({
        status: 'success',
        projects,
      })),
      startWith<ProjectsState>({
        status: 'loading',
        projects: [],
      }),
      catchError(() =>
        of<ProjectsState>({
          status: 'error',
          projects: [],
        }),
      ),
    ),
    {
      initialValue: {
        status: 'loading',
        projects: [],
      },
    },
  );

  readonly projects = computed(() => this.state().projects);

  readonly featuredProject = computed(() => this.projects().find((project) => project.is_featured));

  getProjectByUuid(uuid: string): Project | undefined {
    return this.projects().find((project) => project.uuid === uuid);
  }
}
